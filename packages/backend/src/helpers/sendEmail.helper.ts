import nodemailer, { SentMessageInfo } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const { MAIL_USER, MAIL_PASSWORD, HOST_VERIFY, HOST_PASSWORD } = process.env;

class SendEmail {
	post: typeof nodemailer;
	private user: string;
	private password: string;
	transport: Mail<SentMessageInfo>;
	constructor(
		postService: typeof nodemailer,
		user: string,
		password: string,
	) {
		this.post = postService;
		this.user = user;
		this.password = password;
		this.transport = this.post.createTransport({
			pool: true,
			host: 'smtp.ukr.net',
			port: 2525,
			secure: true,
			auth: {
				user: this.user,
				pass: this.password,
			},
		});
	}
	getRegisterMessage(token: string, email: string): { [x: string]: string } {
		return {
			to: email,
			from: this.user,
			subject: `Welcome on board, ${email}.Confirm your account`,
			html: `
			<p>To confirm your registration, please click on the link below:</p>
			<a href="${HOST_VERIFY}/api/user/verify/${token}">Click me</a>
			`,
			text: `
			To confirm your registration, please click on the link below:\n
				${HOST_VERIFY}/api/user/verify/${token}
			`,
		};
	}
	getPasswordMessage(token: string, email: string): { [x: string]: string } {
		return {
			to: email,
			from: this.user,
			subject: `Hi, ${email}. Do you want to change the password`,
			html: `
			<p>Confirm that you want change password, please click on the link below:</p>
			<a href="${HOST_PASSWORD}/auth/reset-password?token=${token}">Click me</a>
			`,
			text: `
			Confirm that you want change password, please click on the link below:\n
			${HOST_PASSWORD}/auth/reset-password?token=${token}
			`,
		};
	}
	sendRegistration(token: string, email: string): unknown {
		return this.transport.sendMail(this.getRegisterMessage(token, email));
	}

	sendPassword(token: string, email: string): unknown {
		return this.transport.sendMail(this.getPasswordMessage(token, email));
	}
}

const sendEmail = new SendEmail(
	nodemailer,
	MAIL_USER as string,
	MAIL_PASSWORD as string,
);

export default sendEmail;
