"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const HttpError_helper_1 = __importDefault(require("../helpers/HttpError.helper"));
const isExist = (model) => async (req, res, next) => {
    const { id } = req.params;
    const result = await app_1.prisma[model].findUnique({
        where: {
            id,
        },
    });
    if (!result) {
        next(new HttpError_helper_1.default(400, `${id} is not valid id`));
    }
    next();
};
exports.default = isExist;
//# sourceMappingURL=isExist.middleware.js.map