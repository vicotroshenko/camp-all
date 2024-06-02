import { Card, Elevation } from '@blueprintjs/core';
import React from 'react';
import { ITodos } from '~shared/services/types';
import TodoTitle from '../todo-title/todo-title.component';
import TodoDescription from '../todo-card-description/todo-card-description.component';
import CardActions from '../card-actions/card-actions.component';
import { card_item } from './todo-card.styles';

interface TodoCardProps {
	todo: ITodos;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
	return (
		<Card
			interactive={true}
			elevation={Elevation.ONE}
			className={card_item}
		>
			<TodoTitle>{todo.title}</TodoTitle>
			<TodoDescription view="list">{todo.description}</TodoDescription>
			<CardActions todo={todo} />
		</Card>
	);
};

export default TodoCard;
