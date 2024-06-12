import React from 'react';
import { contents, contents_container } from './todo-card-description.styles';

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
		<div className={contents_container}>
			<div className={contents}>
				{!isOnList && <span>description</span>}
				<div>
					<span>{children}</span>
				</div>
			</div>
		</div>
	);
};

export default TodoDescription;
