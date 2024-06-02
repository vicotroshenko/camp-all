import { CustomReqQuery, StatisticType, TodoType } from '@/types/todos.type';
import { prisma } from '@/app';
import { QUERY } from '@/constants/query.constant';

export default class TodoService {
	queryHandler(query: CustomReqQuery): { [x: string]: string | boolean } {
		const status = query?.status;
		const statusIsCorrect = Object.values(QUERY).includes(status as QUERY);

		return status && statusIsCorrect
			? status === QUERY.PUBLIC
				? { private: false }
				: { [status]: true }
			: {};
	}
	async findAll(
		id: string | undefined,
		query: CustomReqQuery,
	): Promise<TodoType[]> {
		const search = query?.search;
		const skip = Number(query?.skip) || 0;
		const take = Number(query?.take) || 5;

		const filterByCondition = this.queryHandler(query);

		return await prisma.todo.findMany({
			skip,
			take,
			orderBy: {
				createdAt: 'asc',
			},
			where: {
				OR: [{ owner: id }, { private: false }],
				title: {
					contains: search,
					mode: 'insensitive',
				},
				...filterByCondition,
			},
		});
	}

	async findOne(id: string): Promise<TodoType | null> {
		return await prisma.todo.findUnique({
			where: {
				id,
			},
		});
	}

	async createOne(newTodo: TodoType): Promise<TodoType> {
		return await prisma.todo.create({
			data: newTodo,
		});
	}

	async updateOne(id: string, newTodo: TodoType): Promise<TodoType> {
		return await prisma.todo.update({
			where: {
				id,
			},
			data: newTodo,
		});
	}

	async deleteOne(id: string): Promise<TodoType> {
		return await prisma.todo.delete({
			where: {
				id,
			},
		});
	}
	async statistic(
		id: string | undefined,
		query: CustomReqQuery,
	): Promise<StatisticType> {
		const search = query?.search;
		const filterByCondition = this.queryHandler(query);
		return await prisma.todo.aggregate({
			_count: {
				id: true,
			},
			where: {
				OR: [{ owner: id }, { private: false }],
				title: {
					contains: search,
					mode: 'insensitive',
				},
				...filterByCondition,
			},
		});
	}
}
