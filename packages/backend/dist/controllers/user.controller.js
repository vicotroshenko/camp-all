"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const HttpError_helper_1 = __importDefault(require("../helpers/HttpError.helper"));
const createToken_helper_1 = __importDefault(require("../helpers/createToken.helper"));
const convertToken_helper_1 = __importDefault(require("../helpers/convertToken.helper"));
const sendEmail_helper_1 = __importDefault(require("../helpers/sendEmail.helper"));
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(req, res) {
        const { email, password } = req.body;
        const hashPassword = await bcrypt_1.default.hash(password, 10);
        const token = (0, createToken_helper_1.default)({ email });
        const verificationToken = (0, createToken_helper_1.default)({ email });
        const newUser = {
            ...req.body,
            password: hashPassword,
            token,
            verificationToken,
        };
        await sendEmail_helper_1.default.sendRegistration(verificationToken, email);
        const result = await this.userService.registerUser(newUser);
        res.status(201).send(result);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const user = await this.userService.findUser(email);
        if (!user) {
            throw new HttpError_helper_1.default(401, 'Email or password invalid');
        }
        const passwordCompare = await bcrypt_1.default.compare(password, user.password);
        if (!passwordCompare) {
            throw new HttpError_helper_1.default(401, 'Email or password invalid');
        }
        const token = (0, createToken_helper_1.default)({ email: user.email });
        const result = await this.userService.updateUser(user.id, {
            ...user,
            token,
        });
        res.status(200).send(result);
    }
    async logout(req, res) {
        const { id } = req.user;
        await this.userService.updateUser(id, {
            ...req.user,
            token: '',
        });
        res.status(200).json({
            message: 'Logout success',
        });
    }
    async resetPassword(req, res) {
        const { email } = req.body;
        const user = await this.userService.findUser(email);
        if (!user) {
            throw new HttpError_helper_1.default(400, 'Email invalid');
        }
        const verificationToken = (0, createToken_helper_1.default)({ email });
        await sendEmail_helper_1.default.sendPassword(verificationToken, email);
        res.status(200).json({
            message: `Check your email ${email}. Confirm reset password.`,
        });
    }
    async changePassword(req, res) {
        const { newPassword, passwordToken } = req.body;
        const email = (0, convertToken_helper_1.default)(passwordToken);
        const user = await this.userService.findUser(email);
        if (!email || !user) {
            throw new HttpError_helper_1.default(400, 'The user was not found');
        }
        const hashPassword = await bcrypt_1.default.hash(newPassword, 10);
        const token = (0, createToken_helper_1.default)({ email });
        const result = await this.userService.updateUser(user.id, {
            ...user,
            password: hashPassword,
            token,
        });
        res.status(201).send(result);
    }
    async verify(req, res) {
        const { token } = req.params;
        const email = (0, convertToken_helper_1.default)(token);
        const user = await this.userService.findUser(email);
        if (!user) {
            throw new HttpError_helper_1.default(400, 'Email or password invalid');
        }
        await this.userService.updateUser(user.id, {
            ...user,
            isConfirmed: true,
            verificationToken: '',
        });
        res.status(200).json({ message: 'Your account is verified' });
    }
}
exports.UserController = UserController;
const userController = new UserController(user_service_1.default);
exports.default = userController;
//# sourceMappingURL=user.controller.js.map