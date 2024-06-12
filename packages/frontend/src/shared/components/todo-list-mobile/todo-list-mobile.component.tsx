import React, { useEffect } from 'react';
import { ITodos, NewUpdateData } from '~shared/services/types';
import useAppSearchParams from '~/hooks/useAppSearchParams.hook';
import TodoCard from '../todo-card/todo-card.component';
import { td_ls_mobile } from './todo-list-mobile.styles';

interface TodoListMobileProps {
	todos: ITodos[];
	itemsPerPage: number;
	amountOfItems: number;
	onTodoUpdate: (newData: NewUpdateData, todo?: ITodos) => void;
	onTodoDelete: (id: string) => void;
}

const TodoListMobile: React.FC<TodoListMobileProps> = ({
	todos,
	amountOfItems,
	itemsPerPage,
	onTodoUpdate,
	onTodoDelete,
}) => {
	const [params, setSearchParams] = useAppSearchParams();
	useEffect(() => {
		const handleScroll = (): void => {
			const scrollTop = document.documentElement.scrollTop;
			const scrollHeight = document.documentElement.scrollHeight;

			if (Number(params.skip) >= amountOfItems) return;

			if (scrollTop < 50) {
				setSearchParams({ ...params, skip: '0' });
			}

			if (scrollHeight - scrollTop - window.innerHeight < 5) {
				setSearchParams({
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
			{todos.length > 0 &&
				todos.map((todo: ITodos) => (
					<li key={todo.id}>
						<TodoCard
							todo={todo}
							onTodoUpdate={onTodoUpdate}
							onTodoDelete={onTodoDelete}
						/>
					</li>
				))}
		</ul>
	);
};

export default TodoListMobile;
