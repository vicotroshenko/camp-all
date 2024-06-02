import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '~store/user.store';
import {
	validateName,
	validatePassword,
} from '~shared/validation/field.validators';
import Container from '~shared/components/container/container.component';
import MainForm from '~shared/components/main-form/main-form.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import { ROUTER_KEYS } from '~shared/keys';
import { RegisterUser } from '~shared/services/types';

const Register = () => {
	const register = useUserStore((state) => state.register);
	const navigate = useNavigate();
	const handleRegister = (data: RegisterUser): void => {
		register(data);
		navigate(ROUTER_KEYS.BASE_NAME);
	};
	return (
		<Container>
			<TodoTitle>Create new account</TodoTitle>
			<MainForm onSubmit={handleRegister} backLink={ROUTER_KEYS.HOME}>
				<TextField
					labelName="name"
					fieldName="username"
					validate={validateName}
				/>
				<TextField labelName="email" fieldName="email" type="email" />
				<TextField
					labelName="password"
					fieldName="password"
					type="password"
					validate={validatePassword}
				/>
			</MainForm>
		</Container>
	);
};

export default Register;
