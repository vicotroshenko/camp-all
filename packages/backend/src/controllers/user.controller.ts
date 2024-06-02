import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import HttpError from '@/helpers/HttpError.helper';
import { UserType } from '@/types/user.type';
import createToken from '@/helpers/createToken.helper';
import convertToken from '@/helpers/convertToken.helper';
import sendEmail from '@/helpers/sendEmail.helper';
import userService, { UserService } from '@/services/user.service';

export class UserController {
	constructor(private userService: UserService) {}

	async register(req: Request, res: Response): Promise<void> {
		const { email, password } = req.body;

		const hashPassword = await bcrypt.hash(password, 10);
		const token = createToken({ email });
		const verificationToken = createToken({ email });
		const newUser = {
			...req.body,
			password: hashPassword,
			token,
			verificationToken,
		};
		await sendEmail.sendRegistration(verificationToken, email);

		const result = await this.userService.registerUser(newUser);
		res.status(201).send(result);
	}

	async login(req: Request, res: Response): Promise<void> {
		const { email, password } = req.body;

		const user = await this.userService.findUser(email);
		if (!user) {
			throw new HttpError(401, 'Email or password invalid');
		}

		const passwordCompare = await bcrypt.compare(password, user.password);
		if (!passwordCompare) {
			throw new HttpError(401, 'Email or password invalid');
		}

		const token = createToken({ email: user.email });

		const result = await this.userService.updateUser(user.id, {
			...user,
			token,
		});
		res.status(200).send(result);
	}

	async logout(req: Request, res: Response): Promise<void> {
		const { id } = req.user as UserType;

		await this.userService.updateUser(id, {
			...req.user,
			token: '',
		} as UserType);

		res.status(200).json({
			message: 'Logout success',
		});
	}
	async resetPassword(req: Request, res: Response): Promise<void> {
		const { email } = req.body;

		const user = await this.userService.findUser(email);
		if (!user) {
			throw new HttpError(400, 'Email invalid');
		}

		const verificationToken = createToken({ email });
		await sendEmail.sendPassword(verificationToken, email);

		res.status(200).json({
			message: `Check your email ${email}. Confirm reset password.`,
		});
	}
	async changePassword(req: Request, res: Response): Promise<void> {
		const { newPassword, passwordToken } = req.body;

		const email = convertToken(passwordToken);
		const user = await this.userService.findUser(email);

		if (!email || !user) {
			throw new HttpError(400, 'The user was not found');
		}

		const hashPassword = await bcrypt.hash(newPassword, 10);
		const token = createToken({ email });

		const result = await this.userService.updateUser(user.id, {
			...user,
			password: hashPassword,
			token,
		});

		res.status(201).send(result);
	}
	async verify(req: Request, res: Response): Promise<void> {
		const { token } = req.params;
		const email = convertToken(token);
		const user = await this.userService.findUser(email);
		if (!user) {
			throw new HttpError(400, 'Email or password invalid');
		}

		await this.userService.updateUser(user.id, {
			...user,
			isConfirmed: true,
			verificationToken: '',
		});

		res.status(200).json({ message: 'Your account is verified' });
	}
}

const userController = new UserController(userService);

export default userController;
