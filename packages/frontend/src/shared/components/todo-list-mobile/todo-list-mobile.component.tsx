import React, { useEffect } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import { ITodos } from '~shared/services/types';
import TodoCard from '../todo-card/todo-card.component';
import { td_ls_mobile } from './todo-list-mobile.styles';

interface TodoListMobileProps {
	todos: ITodos[];
	itemsPerPage: number;
	params?: { [x: string]: string };
	setParams: SetURLSearchParams;
	amountOfItems: number;
}

const TodoListMobile: React.FC<TodoListMobileProps> = ({
	todos,
	params,
	setParams,
	amountOfItems,
	itemsPerPage,
}) => {
	useEffect(() => {
		const handleScroll = (): void => {
			const scrollTop = document.documentElement.scrollTop;
			const scrollHeight = document.documentElement.scrollHeight;

			if (Number(params.skip) >= amountOfItems) return;

			if (scrollTop < 50) {
				setParams({ ...params, skip: '0' });
			}

			if (scrollHeight - scrollTop - window.innerHeight < 5) {
				setParams({
					...params,
					skip: `${Number(params.skip || '0') + itemsPerPage}`,
					take: `${itemsPerPage}`,
				});
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [params, amountOfItems]);

	return (
		<ul className={td_ls_mobile}>
			{todos.map((todo: ITodos) => (
				<li key={todo.id}>
					<TodoCard todo={todo} />
				</li>
			))}
		</ul>
	);
};

export default TodoListMobile;
