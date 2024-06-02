import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodo(req: Request, res: Response): Promise<void>;
    getOneTodo(req: Request, res: Response): Promise<void>;
    createNewTodo(req: Request, res: Response): Promise<void>;
    updateOneTodo(req: Request, res: Response): Promise<void>;
    deleteOneTodo(req: Request, res: Response): Promise<void>;
}
declare const todoController: TodoController;
export default todoController;
