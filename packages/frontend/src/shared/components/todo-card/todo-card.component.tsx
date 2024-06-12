import { Card, Elevation } from '@blueprintjs/core';
import React from 'react';
import { ITodos, NewUpdateData } from '~shared/services/types';
import TodoTitle from '../todo-title/todo-title.component';
import TodoDescription from '../todo-card-description/todo-card-description.component';
import CardActions from '../card-actions/card-actions.component';
import { card_item } from './todo-card.styles';

interface TodoCardProps {
	todo: ITodos;
	onTodoUpdate: (newData: NewUpdateData, todo?: ITodos) => void;
	onTodoDelete: (id: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
	todo,
	onTodoDelete,
	onTodoUpdate,
}) => {
	return (
		<Card
			interactive={true}
			elevation={Elevation.ONE}
			className={card_item}
		>
			<TodoTitle>{todo.title}</TodoTitle>
			<TodoDescription view="list">{todo.description}</TodoDescription>
			<CardActions
				todo={todo}
				onTodoUpdate={onTodoUpdate}
				onTodoDelete={onTodoDelete}
			/>
		</Card>
	);
};

export default TodoCard;
