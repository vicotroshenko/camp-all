import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { todoService } from '~shared/services/todo.service';
import { ITodos } from '~shared/services/types';

type MutateParams = {
	id?: string;
	data: ITodos;
};

type Method = 'post' | 'put' | 'delete';

export const useAppMutation = (
	method: Method,
): {
	mutate: UseMutateFunction<
		AxiosResponse<unknown>,
		Error,
		MutateParams,
		Promise<AxiosResponse>
	>;
	isSuccess: boolean;
} => {
	const { mutate, isSuccess } = useMutation({
		mutationKey: [`todo-${method}`],
		mutationFn: ({ id, data }: MutateParams): Promise<AxiosResponse> =>
			todoService['post']({ id, data }, true),
	});

	return {
		mutate,
		isSuccess,
	};
};
