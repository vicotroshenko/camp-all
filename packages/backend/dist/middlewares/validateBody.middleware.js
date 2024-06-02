"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_helper_1 = __importDefault(require("../helpers/HttpError.helper"));
const validateBody = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(new HttpError_helper_1.default(400, 'missing required name field'));
        }
        next();
    };
    return func;
};
exports.default = validateBody;
//# sourceMappingURL=validateBody.middleware.js.map