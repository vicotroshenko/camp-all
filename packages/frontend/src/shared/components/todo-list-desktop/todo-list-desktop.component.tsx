import React from 'react';
import ReactPaginate from 'react-paginate';
import { ITodos, NewUpdateData } from '~shared/services/types';
import useAppSearchParams from '~/hooks/useAppSearchParams.hook';
import TodoItemDesktop from '../todo-item-desktop/todo-item-desktop.component';
import {
	ld_item,
	ld_item_animate,
	paginate_container,
} from './todo-list-desktop.styles';

interface ITodoListProps {
	todos: ITodos[];
	itemsPerPage: number;
	amountOfItems: number;
	onTodoUpdate: (newData: NewUpdateData, todo?: ITodos) => void;
	onTodoDelete: (id: string) => void;
}

const TodoListDesktop: React.FC<ITodoListProps> = ({
	todos,
	itemsPerPage,
	amountOfItems,
	onTodoUpdate,
	onTodoDelete,
}) => {
	const [params, setSearchParams] = useAppSearchParams();
	const handlePageClick = (event: { selected: number }): void => {
		setSearchParams({
			...params,
			skip: `${event.selected * itemsPerPage}`,
		});
	};

	const pageCount = Math.ceil(amountOfItems / itemsPerPage);

	return (
		<>
			<ul className={ld_item}>
				<li>
					<TodoItemDesktop head={true} />
				</li>
				{todos.map((todo) => (
					<li key={todo.id} className={ld_item_animate}>
						<TodoItemDesktop
							todo={todo}
							onTodoDelete={onTodoDelete}
							onTodoUpdate={onTodoUpdate}
						/>
					</li>
				))}
			</ul>
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				className={paginate_container}
			/>
		</>
	);
};

export default TodoListDesktop;
