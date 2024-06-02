import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import validateBody from '@/middlewares/validateBody.middleware';
import schemas from '@/schemas/todos.schema';
import isExist from '@/middlewares/isExist.middleware';
import ctrlWrapper from '@/middlewares/ctrlWrapper.middleware';
import { Models } from '@/constants/models.constant';
import auth from '@/middlewares/auth.middleware';

const todosRouter: Router = Router();

todosRouter.get(
	'/all',
	auth,
	ctrlWrapper(todoController.getAllTodo.bind(todoController)),
);

todosRouter.post(
	'/',
	auth,
	validateBody(schemas.todoAdd),
	ctrlWrapper(todoController.createNewTodo.bind(todoController)),
);

todosRouter.get(
	'/:id',
	auth,
	isExist(Models.todo),
	ctrlWrapper(todoController.getOneTodo.bind(todoController)),
);

todosRouter.put(
	'/:id',
	auth,
	isExist(Models.todo),
	validateBody(schemas.todoUpdate),
	ctrlWrapper(todoController.updateOneTodo.bind(todoController)),
);

todosRouter.delete(
	'/:id',
	auth,
	isExist(Models.todo),
	ctrlWrapper(todoController.deleteOneTodo.bind(todoController)),
);

export default todosRouter;
