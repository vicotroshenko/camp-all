import React from 'react';
import { useMutation } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import { useUserStore } from '~store/user/user.store';
import {
	validateName,
	validatePassword,
} from '~shared/validation/field.validators';
import Container from '~shared/components/container/container.component';
import MainForm from '~shared/components/main-form/main-form.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import { MUTATION_KEYS, ROUTER_KEYS } from '~shared/keys';
import { RegisterUser } from '~shared/services/types';
import userService from '~shared/services/user.service';
import BlurContainer from '~shared/components/blur-container/blur-container.component';

const Register = () => {
	const loginUser = useUserStore((state) => state.login);

	const onSuccess = ({ data }): void => {
		toast.success('Welcome in our community', {
			position: 'bottom-center',
		});
		loginUser(data);
	};

	const onError = (): void => {
		toast.error('Something wrong, try again later', {
			position: 'bottom-center',
		});
	};
	const { mutate: register } = useMutation({
		mutationKey: [MUTATION_KEYS.USER_REGISTER],
		mutationFn: (data: RegisterUser) => userService.register(data),
		onSuccess,
		onError,
	});

	return (
		<>
			<Container>
				<BlurContainer>
					<TodoTitle>Create new account</TodoTitle>
					<MainForm onSubmit={register} backLink={ROUTER_KEYS.HOME}>
						<TextField
							labelName="name"
							fieldName="username"
							validate={validateName}
						/>
						<TextField
							labelName="email"
							fieldName="email"
							type="email"
						/>
						<TextField
							labelName="password"
							fieldName="password"
							type="password"
							validate={validatePassword}
						/>
					</MainForm>
					<Toaster />
				</BlurContainer>
			</Container>
		</>
	);
};

export default Register;
