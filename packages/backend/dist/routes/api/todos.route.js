"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("../../controllers/todo.controller"));
const validateBody_middleware_1 = __importDefault(require("../../middlewares/validateBody.middleware"));
const todos_schema_1 = __importDefault(require("../../schemas/todos.schema"));
const isExist_middleware_1 = __importDefault(require("../../middlewares/isExist.middleware"));
const ctrlWrapper_middleware_1 = __importDefault(require("../../middlewares/ctrlWrapper.middleware"));
const auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
const todosRouter = (0, express_1.Router)();
todosRouter.get('/all', auth_middleware_1.default, (0, ctrlWrapper_middleware_1.default)(todo_controller_1.default.getAllTodo.bind(todo_controller_1.default)));
todosRouter.post('/', auth_middleware_1.default, (0, validateBody_middleware_1.default)(todos_schema_1.default.todoAdd), (0, ctrlWrapper_middleware_1.default)(todo_controller_1.default.createNewTodo.bind(todo_controller_1.default)));
todosRouter.get('/:id', auth_middleware_1.default, (0, isExist_middleware_1.default)("todo"), (0, ctrlWrapper_middleware_1.default)(todo_controller_1.default.getOneTodo.bind(todo_controller_1.default)));
todosRouter.put('/:id', auth_middleware_1.default, (0, isExist_middleware_1.default)("todo"), (0, validateBody_middleware_1.default)(todos_schema_1.default.todoUpdate), (0, ctrlWrapper_middleware_1.default)(todo_controller_1.default.updateOneTodo.bind(todo_controller_1.default)));
todosRouter.delete('/:id', auth_middleware_1.default, (0, isExist_middleware_1.default)("todo"), (0, ctrlWrapper_middleware_1.default)(todo_controller_1.default.deleteOneTodo.bind(todo_controller_1.default)));
exports.default = todosRouter;
//# sourceMappingURL=todos.route.js.map