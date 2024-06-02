"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_service_1 = __importDefault(require("../services/todo.service"));
const HttpError_helper_1 = __importDefault(require("../helpers/HttpError.helper"));
class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getAllTodo(req, res) {
        const { id } = req.user;
        const query = req.query;
        const todos = await this.todoService.findAll(id, query);
        const statistic = await this.todoService.statistic(id, query);
        const statTodos = statistic._count.id;
        res.send({
            statTodos,
            todos,
        });
    }
    async getOneTodo(req, res) {
        const id = req.params.id;
        const todo = await this.todoService.findOne(id);
        res.send(todo);
    }
    async createNewTodo(req, res) {
        const { id: owner } = req.user;
        const newTodo = await this.todoService.createOne({
            ...req.body,
            owner,
        });
        res.status(201).send(newTodo);
    }
    async updateOneTodo(req, res) {
        const id = req.params.id;
        const data = req.body;
        const { id: userId } = req.user;
        const todo = await this.todoService.findOne(id);
        if (userId !== (todo === null || todo === void 0 ? void 0 : todo.owner)) {
            throw new HttpError_helper_1.default(403, 'Forbidden');
        }
        const updatedTodo = await this.todoService.updateOne(id, data);
        res.status(200).send(updatedTodo);
    }
    async deleteOneTodo(req, res) {
        const id = req.params.id;
        const { id: userId } = req.user;
        const todo = await this.todoService.findOne(id);
        if (userId !== (todo === null || todo === void 0 ? void 0 : todo.owner)) {
            throw new HttpError_helper_1.default(403, 'Forbidden');
        }
        await this.todoService.deleteOne(id);
        res.status(200).send({ message: 'deleted successful' });
    }
}
exports.TodoController = TodoController;
const todoController = new TodoController(new todo_service_1.default());
exports.default = todoController;
//# sourceMappingURL=todo.controller.js.map