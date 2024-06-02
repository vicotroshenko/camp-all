import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useTodosStore } from '~store/todose.store';
import { useUserStore } from '~store/user.store';
import Container from '~shared/components/container/container.component';
import LinkPrimary from '~shared/components/link-primary/link-primary.component';
import SwitchForm from '~shared/components/switch-form/switch-form.component';
import TodoDescription from '~shared/components/todo-card-description/todo-card-description.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import { el_buttons, element_wrapper } from './todo-elements.styles';
import ButtonPrimary from '~shared/components/button-primary/button-primary.component';
import { Icon } from '@blueprintjs/core';
import { useModalStore } from '~store/modal.store';

const TodoElement = () => {
	const params = useParams();
	const getOneTodo = useTodosStore((state) => state.getOneTodo);
	const updateTodo = useTodosStore((state) => state.updateTodo);
	const todo = useTodosStore((state) => state.todo);
	const toggleModal = useModalStore((state) => state.toggle);
	const user = useUserStore((state) => state.user);
	const keyRf = useRef<number>(1);

	useEffect(() => {
		keyRf.current += 1;
		getOneTodo(params.id);
	}, [params.id]);

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

	const disabled = Boolean(todo.owner !== user.id);

	const toggle = (): void => toggleModal(todo);

	return (
		<Container>
			<div className={element_wrapper}>
				<TodoTitle>{todo.title}</TodoTitle>
				<TodoDescription view="full">
					{todo.description}
				</TodoDescription>
				<SwitchForm
					view="full"
					todo={todo}
					onChange={handleUpdate}
					key={keyRf.current}
					disabled={disabled}
				/>
				<div className={el_buttons}>
					<LinkPrimary link="/">back</LinkPrimary>
					<ButtonPrimary onClick={toggle} disabled={disabled}>
						<span>Edit</span>
						<Icon icon="edit" />
					</ButtonPrimary>
				</div>
			</div>
		</Container>
	);
};

export default TodoElement;
