import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useUserStore } from '~store/user/user.store';
import { MUTATION_KEYS, ROUTER_KEYS } from '~shared/keys';
import { LoginUser } from '~shared/services/types';
import { validatePassword } from '~shared/validation/field.validators';
import Container from '~shared/components/container/container.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import MainForm from '~shared/components/main-form/main-form.component';
import userService from '~shared/services/user.service';
import { useMutation } from '@tanstack/react-query';
import BlurContainer from '~shared/components/blur-container/blur-container.component';

const Login = () => {
	const loginUser = useUserStore((state) => state.login);
	const location = useLocation();

	const onSuccess = ({ data }): void => {
		toast.success('Success', {
			position: 'bottom-center',
		});
		loginUser(data);
	};
	const onError = (): void => {
		toast.error('Something wrong, try again later', {
			position: 'bottom-center',
		});
	};

	const { mutate: login } = useMutation({
		mutationKey: [MUTATION_KEYS.USER_LOGIN],
		mutationFn: (data: LoginUser) => userService.login(data),
		onSuccess,
		onError,
	});

	return (
		<>
			<Container>
				<BlurContainer>
					<TodoTitle>Log in</TodoTitle>
					<MainForm onSubmit={login} backLink={ROUTER_KEYS.HOME}>
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
						<Link
							to={ROUTER_KEYS.FORGOT_PASSWORD}
							state={{ link: location.pathname }}
						>
							Forgot password?
						</Link>
					</MainForm>
					<Toaster />
				</BlurContainer>
			</Container>
		</>
	);
};

export default Login;
