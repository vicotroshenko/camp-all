import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MUTATION_KEYS } from '~shared/keys';
import Container from '~shared/components/container/container.component';
import TodoList from '~shared/components/todo-list/todo-list.component';
import FilterButtons from '~shared/components/filer-buttons/filter-buttons.component';
import getQueryString from '~shared/helpers/getQueryStrign.helper';
import CustomTextField from '~shared/components/custom-text-field/custom-text-field.component';
import { todoService } from '~shared/services/todo.service';
import useAppSearchParams from '~/hooks/useAppSearchParams.hook';
import getUnique from '~shared/helpers/getUnique.helper';
import AddModal from '~shared/components/add-modal/add-modal.component';
import { ITodos, MutateParams, NewUpdateData } from '~shared/services/types';
import { useUserStore } from '~store/user/user.store';

const TodoAll = () => {
	const itemsPerPage = 5;
	const [allTodos, setAllTodos] = useState<ITodos[] | []>([]);
	const [filterByStatus, setFilterByStatus] = useState<string>('all');
	const [params, setSearchParams] = useAppSearchParams();
	const logout = useUserStore((state) => state.logout);

	const { data, refetch, isFetched, isError } = useQuery({
		queryKey: [MUTATION_KEYS.TODOS_ALL],
		queryFn: () =>
			todoService.getAll({ queryString: getQueryString(params) }, true),
		select: ({ data }) => data,
	});

	useEffect(() => {
		if (isError) {
			logout();
		}
	}, []);

	const { mutate: mutateUpdate } = useMutation({
		mutationKey: [MUTATION_KEYS.TODO_UPDATE],
		mutationFn: ({ id, data }: MutateParams): Promise<AxiosResponse> =>
			todoService.put({ id, data }, true),
		onSuccess: () => refetch(),
	});

	const { mutate: mutateDelete } = useMutation({
		mutationKey: [MUTATION_KEYS.TODO_DELETE],
		mutationFn: ({ id }: { id: string }): Promise<AxiosResponse> =>
			todoService.delete({ id }, true),
		onSuccess: () => refetch(),
	});

	const onTodoUpdate = (newData: NewUpdateData, todo: ITodos): void => {
		const newTodo = { ...todo };
		delete newTodo.createdAt;
		delete newTodo.owner;
		delete newTodo.id;
		const data = { ...newTodo, ...newData };
		mutateUpdate({ id: todo.id, data });
	};

	const onTodoDelete = (id: string): void => {
		mutateDelete({ id });
		refetch();
	};

	useEffect(() => {
		setSearchParams({
			...params,
			status: 'all',
			skip: '0',
			take: `${itemsPerPage}`,
		});
	}, []);

	useEffect(() => {
		refetch();
		if (isFetched) {
			setAllTodos((state) => getUnique([...state, ...data.todos]));
		}
	}, [params, data]);

	useEffect(() => {
		setAllTodos([]);
	}, [params.search, params.status]);

	const handleFilterButton = (e: React.MouseEvent<HTMLDivElement>): void => {
		const btn = e.target as HTMLButtonElement;
		if (!btn.name) return;
		setFilterByStatus(btn.name);
		setSearchParams({
			...params,
			status: btn.name,
			skip: '0',
			take: `${itemsPerPage}`,
		});
		setAllTodos([]);
		refetch();
	};

	const handleSearchInput = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const { name, value } = e.target;
		setSearchParams({ ...params, skip: '0', [name]: value });
	};

	return (
		<Container>
			<AddModal />
			<FilterButtons
				onClick={handleFilterButton}
				status={filterByStatus}
			/>
			<CustomTextField
				name="search"
				placeholder="Search"
				defaultValue={params.search}
				onChange={handleSearchInput}
			/>
			{isFetched && (
				<TodoList
					allTodos={allTodos}
					todos={data.todos}
					itemsPerPage={itemsPerPage}
					amountOfItems={data.statTodos}
					onTodoUpdate={onTodoUpdate}
					onTodoDelete={onTodoDelete}
				/>
			)}
		</Container>
	);
};

export default TodoAll;
