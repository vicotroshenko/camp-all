import React, { useEffect, useMemo, useState } from 'react';
import { useTodosStore } from '~store/todose.store';
import Container from '~shared/components/container/container.component';
import TodoList from '~shared/components/todo-list/todo-list.component';
import FilterButtons from '~shared/components/filer-buttons/filter-buttons.component';
import { useSearchParams } from 'react-router-dom';
import getQueryString from '~shared/helpers/getQueryStrign.helper';
import CustomTextField from '~shared/components/custom-text-field/custom-text-field.component';

const TodoAll = () => {
	const itemsPerPage = 5;
	const [filterByStatus, setFilterByStatus] = useState<string>('all');

	const fetchTodos = useTodosStore((state) => state.getTodos);
	const todos = useTodosStore((state) => state.todos);
	const allTodos = useTodosStore((state) => state.allTodos);
	const statTodos = useTodosStore((state) => state.statTodos);
	const resetAllTodos = useTodosStore((state) => state.resetAllTodos);

	const [searchParams, setSearchParams] = useSearchParams();
	const params = useMemo(
		() => Object.fromEntries([...searchParams]),
		[searchParams],
	);

	useEffect(() => {
		setSearchParams({
			...params,
			status: 'all',
			skip: '0',
			take: `${itemsPerPage}`,
		});
	}, []);

	useEffect(() => {
		resetAllTodos();
	}, [params.search]);

	useEffect(() => {
		fetchTodos(getQueryString(params));
	}, [params]);

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
		resetAllTodos();
	};

	const handleSearchInput = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const { name, value } = e.target;
		setSearchParams({ ...params, skip: '0', [name]: value });
	};
	return (
		<Container>
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
			<TodoList
				allTodos={allTodos}
				todos={todos}
				itemsPerPage={itemsPerPage}
				params={params}
				setParams={setSearchParams}
				amountOfItems={statTodos}
			/>
		</Container>
	);
};

export default TodoAll;
