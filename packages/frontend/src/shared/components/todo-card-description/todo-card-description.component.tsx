import React from 'react';
import { contents } from './todo-card-description.styles';

interface TodoDescriptionProps {
	children: React.ReactNode;
	view: 'list' | 'full';
}

const TodoDescription: React.FC<TodoDescriptionProps> = ({
	children,
	view,
}) => {
	const isOnList = Boolean(view === 'list');
	return (
		<p className={contents}>
			{!isOnList && <span>description</span>}
			<span>{children}</span>
		</p>
	);
};

export default TodoDescription;
