import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { LoginUser } from '~shared/services/types';
import { validatePassword } from '~shared/validation/field.validators';
import { useUserStore } from '~store/user.store';
import Container from '~shared/components/container/container.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import MainForm from '~shared/components/main-form/main-form.component';

const Login = () => {
	const login = useUserStore((state) => state.login);
	const location = useLocation();
	const navigate = useNavigate();
	const handleLogin = (data: LoginUser): void => {
		login(data);
		navigate(ROUTER_KEYS.BASE_NAME);
	};

	return (
		<Container>
			<TodoTitle>Log in</TodoTitle>
			<MainForm onSubmit={handleLogin} backLink={ROUTER_KEYS.HOME}>
				<TextField labelName="email" fieldName="email" type="email" />
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
		</Container>
	);
};

export default Login;
