import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useUserStore } from '~store/user/user.store';
import { Icon } from '@blueprintjs/core';
import { MUTATION_KEYS } from '~shared/keys';
import Container from '~shared/components/container/container.component';
import LinkPrimary from '~shared/components/link-primary/link-primary.component';
import SwitchForm from '~shared/components/switch-form/switch-form.component';
import TodoDescription from '~shared/components/todo-card-description/todo-card-description.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import ButtonPrimary from '~shared/components/button-primary/button-primary.component';
import { useModalStore } from '~store/modal/modal.store';
import { todoService } from '~shared/services/todo.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MutateParams, NewUpdateData } from '~shared/services/types';
import AddModal from '~shared/components/add-modal/add-modal.component';
import {
	el_buttons,
	element_wrapper,
	element_title,
} from './todo-elements.styles';

const TodoElement = () => {
	const [disabled, setDisable] = useState<boolean>(false);
	const params = useParams();
	const toggleModal = useModalStore((state) => state.toggle);
	const user = useUserStore((state) => state.user);

	const {
		data: todo,
		isFetched,
		refetch,
	} = useQuery({
		queryKey: [MUTATION_KEYS.TODO_ONE, params.id],
		queryFn: () => todoService.getOne(params.id, {}, true),
		select: ({ data }) => data,
	});

	const { mutate } = useMutation({
		mutationKey: [MUTATION_KEYS.TODO_UPDATE],
		mutationFn: ({ id, data }: MutateParams): Promise<AxiosResponse> =>
			todoService.put({ id, data }, true),
		onSuccess: () => refetch(),
	});

	useEffect(() => {
		if (todo && user.id !== todo.owner) {
			setDisable(true);
		}
	}, [todo]);

	const onTodoUpdate = (newData: NewUpdateData): void => {
		const newTodo = { ...todo };
		delete newTodo.createdAt;
		delete newTodo.owner;
		delete newTodo.id;
		const data = { ...newTodo, ...newData };
		mutate({ id: todo.id, data });
	};

	const toggle = (): void => toggleModal(todo);

	return (
		<Container>
			<AddModal onTodoUpdate={onTodoUpdate} />
			{isFetched && (
				<>
					<div className={element_wrapper}>
						<TodoTitle>
							<span className={element_title}>Title:</span>
							{todo.title}
						</TodoTitle>
						<TodoDescription view="full">
							{todo.description}
						</TodoDescription>
						<SwitchForm
							view="full"
							todo={todo}
							onTodoUpdate={onTodoUpdate}
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
				</>
			)}
		</Container>
	);
};

export default TodoElement;
