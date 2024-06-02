"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const authData = {
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
};
const register = joi_1.default.object({
    username: joi_1.default.string().required(),
    ...authData,
});
const login = joi_1.default.object({
    ...authData,
});
const resetPassword = joi_1.default.object({
    email: joi_1.default.string().required(),
});
const newPassword = joi_1.default.object({
    newPassword: joi_1.default.string().required(),
    passwordToken: joi_1.default.string().required(),
});
const schemas = {
    register,
    login,
    resetPassword,
    newPassword,
};
exports.default = schemas;
//# sourceMappingURL=auth.schema.js.map