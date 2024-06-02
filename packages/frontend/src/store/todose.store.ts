import { create } from 'zustand';
import { todoService } from '~shared/services/todo.service';
import { ITodos } from '~shared/services/types';
import TODO_INITIAL from './todoInitial.store';
import getUnique from '~shared/helpers/getUnique.helper';
import { FETCHING_STATUS } from '~shared/keys';

interface ITodoStore {
	todos: ITodos[] | [];
	allTodos: ITodos[] | [];
	todo: ITodos;
	status:
		| FETCHING_STATUS.LOADING
		| FETCHING_STATUS.SUCCESS
		| FETCHING_STATUS.ERROR;
	errorMessage: string;
	statTodos: number | null;
	resetAllTodos: () => void;
	getTodos: (queryString: string | undefined) => Promise<void>;
	getOneTodo: (id: string) => Promise<void>;
	addTodo: (newTodo: ITodos) => Promise<void>;
	updateTodo: (id: string, newTodo: ITodos) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
}

export const useTodosStore = create<ITodoStore>((set) => {
	return {
		todos: [],
		allTodos: [],
		todo: TODO_INITIAL,
		status: FETCHING_STATUS.SUCCESS,
		errorMessage: '',
		statTodos: null,
		resetAllTodos: (): void => {
			set({
				allTodos: [],
			});
		},
		getTodos: async (queryString: string | undefined): Promise<void> => {
			try {
				set({ status: FETCHING_STATUS.LOADING, errorMessage: '' });
				const { data } = await todoService.getAll(
					{ queryString },
					true,
				);
				set((state) => ({
					todos: data.todos,
					allTodos: getUnique([...state.allTodos, ...data.todos]),
					status: FETCHING_STATUS.SUCCESS,
					statTodos: data.statTodos,
				}));
			} catch (error) {
				set({
					status: FETCHING_STATUS.ERROR,
					errorMessage: error.message,
				});
			}
		},
		getOneTodo: async (id: string): Promise<void> => {
			try {
				set({ status: FETCHING_STATUS.LOADING, errorMessage: '' });
				const res = await todoService.getOne(id, {}, true);
				set({
					todo: res.data,
					status: FETCHING_STATUS.SUCCESS,
				});
			} catch (error) {
				set({
					status: FETCHING_STATUS.ERROR,
					errorMessage: error.message,
				});
			}
		},
		addTodo: async (newTodo: ITodos): Promise<void> => {
			try {
				set({ status: FETCHING_STATUS.LOADING, errorMessage: '' });
				const res = await todoService.post(
					{
						data: newTodo,
					},
					true,
				);
				set((state) => ({
					todos: [...state.todos, res.data],
					allTodos: [...state.allTodos, res.data],
					status: FETCHING_STATUS.SUCCESS,
				}));
			} catch (error) {
				set({
					status: FETCHING_STATUS.ERROR,
					errorMessage: error.message,
				});
			}
		},
		updateTodo: async (id: string, newTodo: ITodos): Promise<void> => {
			try {
				set({ status: FETCHING_STATUS.LOADING, errorMessage: '' });
				const res = await todoService.put(
					id,
					{
						data: newTodo,
					},
					true,
				);
				set((state) => ({
					todos: state.todos.map((todo: ITodos) => {
						if (todo.id === id) {
							return res.data;
						}
						return todo;
					}),
					status: FETCHING_STATUS.SUCCESS,
				}));
			} catch (error) {
				set({
					status: FETCHING_STATUS.ERROR,
					errorMessage: error.message,
				});
			}
		},
		deleteTodo: async (id: string): Promise<void> => {
			try {
				set({ status: FETCHING_STATUS.LOADING, errorMessage: '' });
				await todoService.delete(id, {}, true);
				set((state) => ({
					todos: state.todos.filter((todo: ITodos) => todo.id !== id),
					allTodos: state.allTodos.filter(
						(todo: ITodos) => todo.id !== id,
					),
					status: FETCHING_STATUS.SUCCESS,
				}));
			} catch (error) {
				set({
					status: FETCHING_STATUS.ERROR,
					errorMessage: error.message,
				});
			}
		},
	};
});
