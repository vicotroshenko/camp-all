import React from 'react';
import { loginTitle, todoTitle } from './todo-title.styles';
import { useUserStore } from '~store/user/user.store';
import classNames from 'classnames';

interface TodoTitleProps {
	children: React.ReactNode;
}

const TodoTitle: React.FC<TodoTitleProps> = ({ children }) => {
	const isLogged = useUserStore((state) => state.isLogged);
	return (
		<h2
			className={classNames(
				{ [todoTitle]: isLogged },
				{ [loginTitle]: !isLogged },
			)}
		>
			{children}
		</h2>
	);
};

export default TodoTitle;
