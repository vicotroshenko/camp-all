import { create } from 'zustand';
import { createAllTodosSlice } from './slices/allTodos.slice';
import { AllTodos } from './types.store';

export const useTodosStore = create<AllTodos>((...a) => ({
	...createAllTodosSlice(...a),
}));
