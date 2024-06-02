import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { UserType } from '@/types/user.type';
import { CustomReqQuery } from '@/types/todos.type';
import HttpError from '@/helpers/HttpError.helper';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(req: Request, res: Response): Promise<void> {
		const { id } = req.user as UserType;
		const query = req.query as CustomReqQuery;
		const todos = await this.todoService.findAll(id, query);
		const statistic = await this.todoService.statistic(id, query);
		const statTodos = statistic._count.id;
		res.send({
			statTodos,
			todos,
		});
	}

	async getOneTodo(req: Request, res: Response): Promise<void> {
		const id = req.params.id;
		const todo = await this.todoService.findOne(id);
		res.send(todo);
	}

	async createNewTodo(req: Request, res: Response): Promise<void> {
		const { id: owner } = req.user as UserType;

		const newTodo = await this.todoService.createOne({
			...req.body,
			owner,
		});
		res.status(201).send(newTodo);
	}

	async updateOneTodo(req: Request, res: Response): Promise<void> {
		const id = req.params.id;
		const data = req.body;
		const { id: userId } = req.user as UserType;
		const todo = await this.todoService.findOne(id);
		if (userId !== todo?.owner) {
			throw new HttpError(403, 'Forbidden');
		}
		const updatedTodo = await this.todoService.updateOne(id, data);

		res.status(200).send(updatedTodo);
	}

	async deleteOneTodo(req: Request, res: Response): Promise<void> {
		const id = req.params.id;

		const { id: userId } = req.user as UserType;
		const todo = await this.todoService.findOne(id);
		if (userId !== todo?.owner) {
			throw new HttpError(403, 'Forbidden');
		}
		await this.todoService.deleteOne(id);

		res.status(200).send({ message: 'deleted successful' });
	}
}

const todoController = new TodoController(new TodoService());

export default todoController;
