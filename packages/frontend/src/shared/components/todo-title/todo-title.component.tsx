import React from 'react';
import { todoTitle } from './todo-title.styles';

interface TodoTitleProps {
	children: React.ReactNode;
}

const TodoTitle: React.FC<TodoTitleProps> = ({ children }) => {
	return <h2 className={todoTitle}>{children}</h2>;
};

export default TodoTitle;
