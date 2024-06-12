import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { SetURLSearchParams } from 'react-router-dom';
import { ITodos, NewUpdateData } from '../../services/types';
import TodoListDesktop from '../todo-list-desktop/todo-list-desktop.component';
import TodoListMobile from '../todo-list-mobile/todo-list-mobile.component';
import TodoListTablet from '../todo-list-tablet/todo-list-tablet.component';

interface ITodoListProps {
	allTodos: ITodos[];
	todos: ITodos[];
	itemsPerPage: number;
	amountOfItems: number;
	onTodoUpdate: (newData: NewUpdateData, todo?: ITodos) => void;
	onTodoDelete: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
	allTodos,
	todos,
	itemsPerPage,
	amountOfItems,
	onTodoUpdate,
	onTodoDelete,
}) => {
	const isMobile = useMediaQuery({ query: '(max-width: 424px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 425px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<>
			{isMobile && (
				<TodoListMobile
					todos={allTodos}
					itemsPerPage={itemsPerPage}
					amountOfItems={amountOfItems}
					onTodoUpdate={onTodoUpdate}
					onTodoDelete={onTodoDelete}
				/>
			)}
			{isTablet && !isDesktop && (
				<TodoListTablet
					todos={allTodos}
					itemsPerPage={itemsPerPage}
					amountOfItems={amountOfItems}
					onTodoUpdate={onTodoUpdate}
					onTodoDelete={onTodoDelete}
				/>
			)}
			{isTablet && isDesktop && (
				<TodoListDesktop
					todos={todos}
					itemsPerPage={itemsPerPage}
					amountOfItems={amountOfItems}
					onTodoUpdate={onTodoUpdate}
					onTodoDelete={onTodoDelete}
				/>
			)}
		</>
	);
};

export default TodoList;
