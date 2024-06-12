import { StateCreator } from 'zustand';
import { ITodos } from '~shared/services/types';
import { AllTodos } from '../types.store';

export const createAllTodosSlice: StateCreator<AllTodos> = (set) => ({
	allTodos: [],
	resetAllTodos: (): void => {
		set({
			allTodos: [],
		});
	},
	deleteById: (id: string): void => {
		set((state) => ({
			allTodos: state.allTodos.filter((todo: ITodos) => todo.id !== id),
		}));
	},
});
