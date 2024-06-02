"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const { MAIL_USER, MAIL_PASSWORD } = process.env;
class SendEmail {
    constructor(postService, user, password) {
        this.post = postService;
        this.user = user;
        this.password = password;
        this.transport = this.post.createTransport({
            host: 'smtp.meta.ua',
            port: 465,
            secure: true,
            auth: {
                user: this.user,
                pass: this.password,
            },
        });
    }
    getRegisterMessage(token, email) {
        return {
            to: email,
            from: this.user,
            subject: `Welcome on board, ${email}`,
            html: `
			<p>To confirm your registration, please click on the link below:</p>
			<a href="http://localhost:3030/api/user/verify/${token}">Click me</a>
			`,
            text: `
			To confirm your registration, please click on the link below:\n
				http://localhost:3030/api/user/verify/${token}
			`,
        };
    }
    getPasswordMessage(token, email) {
        return {
            to: email,
            from: this.user,
            subject: `Hi, ${email}. Do you want to change the password`,
            html: `
			<p>Confirm that you want change password, please click on the link below:</p>
			<a href="http://localhost:3030/api/user/verify-password/${token}">Click me</a>
			`,
            text: `
			Confirm that you want change password, please click on the link below:\n
				http://localhost:3030/api/user/verify-password/${token}
			`,
        };
    }
    sendRegistration(token, email) {
        return this.transport.sendMail(this.getRegisterMessage(token, email));
    }
    sendPassword(token, email) {
        return this.transport.sendMail(this.getPasswordMessage(token, email));
    }
}
const sendEmail = new SendEmail(nodemailer_1.default, MAIL_USER, MAIL_PASSWORD);
exports.default = sendEmail;
//# sourceMappingURL=sendEmail.config.js.map