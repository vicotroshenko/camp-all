"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload) => {
    const { SECRET_KEY } = process.env;
    return jsonwebtoken_1.default.sign(payload, SECRET_KEY, {
        expiresIn: '23h',
    });
};
exports.default = createToken;
//# sourceMappingURL=createToken.helper.js.map