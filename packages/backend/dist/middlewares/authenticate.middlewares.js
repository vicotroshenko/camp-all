"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_helper_1 = __importDefault(require("../helpers/HttpError.helper"));
const app_1 = require("../app");
const convertToken_helper_1 = __importDefault(require("../helpers/convertToken.helper"));
const authenticate = async (req, res, next) => {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');
    if (bearer !== 'Bearer' && token) {
        next(new HttpError_helper_1.default(401, 'Unauthorized'));
    }
    try {
        const email = (0, convertToken_helper_1.default)(token);
        const user = await app_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user || !user.token || user.token !== token) {
            next(new HttpError_helper_1.default(401, 'Unauthorized'));
        }
        req.user = user;
        next();
    }
    catch (_a) {
        next(new HttpError_helper_1.default(401, 'Unauthorized'));
    }
};
exports.default = authenticate;
//# sourceMappingURL=authenticate.middlewares.js.map