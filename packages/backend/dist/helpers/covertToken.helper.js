"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const convertToken = (token) => {
    const payload = jsonwebtoken_1.default.verify(token, SECRET_KEY);
    return payload.email;
};
exports.default = convertT;
//# sourceMappingURL=covertToken.helper.js.map