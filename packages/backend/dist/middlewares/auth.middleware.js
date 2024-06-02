"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
function auth(req, res, next) {
    return passport_1.default.authenticate('jwt', { session: false }, (error, user) => {
        if (error) {
            return res
                .status(400)
                .json({ message: 'Email or password invalid' });
        }
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    })(req, res, next);
}
exports.default = auth;
//# sourceMappingURL=auth.middleware.js.map