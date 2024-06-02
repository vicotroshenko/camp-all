"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const todoAdd = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().allow(''),
    completed: joi_1.default.boolean(),
    private: joi_1.default.boolean(),
});
const todoUpdate = joi_1.default.object({
    title: joi_1.default.string(),
    description: joi_1.default.string().allow(''),
    completed: joi_1.default.boolean(),
    private: joi_1.default.boolean(),
});
const schemas = {
    todoAdd,
    todoUpdate,
};
exports.default = schemas;
//# sourceMappingURL=todos.schema.js.map