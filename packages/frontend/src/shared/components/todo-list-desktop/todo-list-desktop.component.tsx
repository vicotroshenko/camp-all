import React from 'react';
import classNames from 'classnames';
import { SetURLSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import CardActions from '../card-actions/card-actions.component';
import { ITodos } from '~shared/services/types';
import {
	border_tb,
	paginate_container,
	todo_tb,
} from './todo-list-desktop.styles';

interface ITodoListProps {
	todos: ITodos[];
	itemsPerPage: number;
	params: { [x: string]: string };
	setParams: SetURLSearchParams;
	amountOfItems: number;
}

const TodoListDesktop: React.FC<ITodoListProps> = ({
	todos,
	itemsPerPage,
	params,
	setParams,
	amountOfItems,
}) => {
	const handlePageClick = (event: { selected: number }): void => {
		setParams({
			...params,
			skip: `${event.selected * itemsPerPage}`,
		});
	};

	const pageCount = Math.ceil(amountOfItems / itemsPerPage);

	return (
		<>
			<table width="100%" className={classNames([border_tb, todo_tb])}>
				<thead className={border_tb}>
					<tr className={border_tb}>
						<th>todo title</th>
						<th>description</th>
						<th>actions</th>
					</tr>
				</thead>
				<tbody className={border_tb}>
					{todos.map((todo: ITodos) => (
						<tr key={crypto.randomUUID()} className={border_tb}>
							<td width="20%">{todo.title}</td>
							<td width="55%">
								<span>{todo.description}</span>
							</td>
							<td width="25%">
								<CardActions todo={todo} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
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
