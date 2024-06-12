import React from 'react';
import { useUserStore } from '~store/user/user.store';
import classNames from 'classnames';
import DropDown from '../drop-down/drop-down.component';
import ButtonPrimary from '../button-primary/button-primary.component';
import SwitchForm from '../switch-form/switch-form.component';
import { ITodos, NewUpdateData } from '~shared/services/types';
import {
	completed,
	ds_item_link,
	guest,
	item_container,
	item_container_head,
} from './todo-item-desktop.styles';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';

interface TodoItemDesktopProps {
	head?: boolean;
	todo?: ITodos;
	onTodoUpdate?: (newData: NewUpdateData, todo?: ITodos) => void;
	onTodoDelete?: (id: string) => void;
}

const TodoItemDesktop: React.FC<TodoItemDesktopProps> = ({
	head = false,
	todo,
	onTodoDelete,
	onTodoUpdate,
}) => {
	const user = useUserStore((state) => state.user);

	const getDateString = (): string =>
		new Date(todo.createdAt).toLocaleDateString();

	const date = head || getDateString();

	const handleDelete = (): void => onTodoDelete(todo.id);
	const isDisabled = !head && Boolean(user.id !== todo.owner);
	return (
		<ul
			className={classNames({
				[item_container]: true,
				[completed]: !head && todo.completed,
				[guest]: isDisabled,
				[item_container_head]: head,
			})}
		>
			<li>
				{head ? (
					<span>Date</span>
				) : (
					<Link to={`/${todo.id}`} className={ds_item_link}>
						{date}
					</Link>
				)}
			</li>
			<li>
				{head ? (
					<span>Todo title</span>
				) : (
					<Link to={`/${todo.id}`} className={ds_item_link}>
						{todo.title}
					</Link>
				)}
			</li>
			<li>
				{head ? (
					<span>Todo description</span>
				) : (
					<Link to={`/${todo.id}`} className={ds_item_link}>
						{todo.description}
					</Link>
				)}
			</li>
			<li tabIndex={1}>
				{head ? (
					<Icon icon="cog" />
				) : (
					<DropDown>
						<ButtonPrimary
							type="button"
							onClick={handleDelete}
							disabled={isDisabled}
						>
							Delete
						</ButtonPrimary>
						<SwitchForm
							view="list"
							todo={todo}
							onTodoUpdate={onTodoUpdate}
							disabled={isDisabled}
						/>
					</DropDown>
				)}
			</li>
		</ul>
	);
};

export default TodoItemDesktop;
