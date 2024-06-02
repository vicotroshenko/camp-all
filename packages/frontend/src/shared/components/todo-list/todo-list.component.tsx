import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { SetURLSearchParams } from 'react-router-dom';
import { ITodos } from '../../services/types';
import TodoListDesktop from '../todo-list-desktop/todo-list-desktop.component';
import TodoListMobile from '../todo-list-mobile/todo-list-mobile.component';
import TodoListTablet from '../todo-list-tablet/todo-list-tablet.component';

interface ITodoListProps {
	allTodos: ITodos[];
	todos: ITodos[];
	itemsPerPage: number;
	params: { [x: string]: string };
	setParams: SetURLSearchParams;
	amountOfItems: number;
}

const TodoList: React.FC<ITodoListProps> = ({
	allTodos,
	todos,
	itemsPerPage,
	params,
	setParams,
	amountOfItems,
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
					params={params}
					setParams={setParams}
					amountOfItems={amountOfItems}
				/>
			)}
			{isTablet && !isDesktop && (
				<TodoListTablet
					todos={allTodos}
					itemsPerPage={itemsPerPage}
					params={params}
					setParams={setParams}
					amountOfItems={amountOfItems}
				/>
			)}
			{isTablet && isDesktop && (
				<TodoListDesktop
					todos={todos}
					itemsPerPage={itemsPerPage}
					params={params}
					setParams={setParams}
					amountOfItems={amountOfItems}
				/>
			)}
		</>
	);
};

export default TodoList;
