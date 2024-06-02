import { prisma } from '@/app';
import { UserType } from '@/types/user.type';

export class UserService {
	async findUser(email: string): Promise<UserType | null> {
		return await prisma.user.findUnique({
			where: {
				email,
			},
		});
	}

	async registerUser(newUser: UserType): Promise<UserType> {
		return await prisma.user.create({
			data: newUser,
		});
	}

	async updateUser(
		id: string | undefined,
		newUser: UserType,
	): Promise<UserType> {
		return await prisma.user.update({
			where: {
				id,
			},
			data: newUser,
		});
	}
}

const userService = new UserService();
export default userService;
