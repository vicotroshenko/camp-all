import { CustomReqQuery, StatisticType, TodoType } from '../types/todos.type';
export default class TodoService {
    queryHandler(query: CustomReqQuery): {
        [x: string]: string | boolean;
    };
    findAll(id: string | undefined, query: CustomReqQuery): Promise<TodoType[]>;
    findOne(id: string): Promise<TodoType | null>;
    createOne(newTodo: TodoType): Promise<TodoType>;
    updateOne(id: string, newTodo: TodoType): Promise<TodoType>;
    deleteOne(id: string): Promise<TodoType>;
    statistic(id: string | undefined, query: CustomReqQuery): Promise<StatisticType>;
}
