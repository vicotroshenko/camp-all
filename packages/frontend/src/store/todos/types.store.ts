import { ITodos } from '~shared/services/types';

type AllTodosState = {
	allTodos: ITodos[] | [];
};

type AllTodosAction = {
	resetAllTodos: () => void;
	deleteById: (id: string) => void;
};

export type AllTodos = AllTodosState & AllTodosAction;
