import React from 'react';
import { ITodos, NewUpdateData } from '~shared/services/types';
import { useUserStore } from '~store/user/user.store';
import LinkPrimary from '../link-primary/link-primary.component';
import ButtonPrimary from '../button-primary/button-primary.component';
import SwitchForm from '../switch-form/switch-form.component';
import { btn_wrapper } from './card-actions.styles';

interface CardActionsProps {
	todo: ITodos;
	onTodoUpdate: (newData: NewUpdateData, todo?: ITodos) => void;
	onTodoDelete: (id: string) => void;
}

const CardActions: React.FC<CardActionsProps> = ({
	todo,
	onTodoUpdate,
	onTodoDelete,
}) => {
	const user = useUserStore((state) => state.user);

	const onDelete = (): void => onTodoDelete(todo.id);

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
				onTodoUpdate={onTodoUpdate}
				disabled={disabled}
			/>
		</div>
	);
};

export default CardActions;
