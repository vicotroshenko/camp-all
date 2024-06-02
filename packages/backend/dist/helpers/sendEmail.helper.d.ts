import nodemailer, { SentMessageInfo } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
declare class SendEmail {
    post: typeof nodemailer;
    private user;
    private password;
    transport: Mail<SentMessageInfo>;
    constructor(postService: typeof nodemailer, user: string, password: string);
    getRegisterMessage(token: string, email: string): {
        [x: string]: string;
    };
    getPasswordMessage(token: string, email: string): {
        [x: string]: string;
    };
    sendRegistration(token: string, email: string): unknown;
    sendPassword(token: string, email: string): unknown;
}
declare const sendEmail: SendEmail;
export default sendEmail;
