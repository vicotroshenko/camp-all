import React from 'react';
import { ITodos } from '~shared/services/types';
import { useTodosStore } from '~store/todose.store';
import { useUserStore } from '~store/user.store';
import LinkPrimary from '../link-primary/link-primary.component';
import ButtonPrimary from '../button-primary/button-primary.component';
import SwitchForm from '../switch-form/switch-form.component';
import { btn_wrapper } from './card-actions.styles';

interface CardActionsProps {
	todo: ITodos;
}

const CardActions: React.FC<CardActionsProps> = ({ todo }) => {
	const deleteTodo = useTodosStore((state) => state.deleteTodo);
	const updateTodo = useTodosStore((state) => state.updateTodo);
	const user = useUserStore((state) => state.user);

	const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, checked } = e.target;
		const newTodo = {
			title: todo.title,
			description: todo.description,
			completed: todo.completed,
			private: todo.private,
		};
		updateTodo(todo.id, { ...newTodo, [name]: checked });
	};

	const onDelete = (): Promise<void> => deleteTodo(todo.id);

	const disabled = Boolean(todo.owner !== user.id);

	return (
		<div className={btn_wrapper}>
			<LinkPrimary link={`/${todo.id}`}>View</LinkPrimary>
			<ButtonPrimary type="button" onClick={onDelete} disabled={disabled}>
				Delete
			</ButtonPrimary>
			<SwitchForm
				view="list"
				todo={todo}
				onChange={handleUpdate}
				disabled={disabled}
			/>
		</div>
	);
};

export default CardActions;
