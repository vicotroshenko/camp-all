import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Divider } from '@blueprintjs/core';
import { PasswordUser } from '~shared/services/types';
import { useUserStore } from '~store/user.store';
import { RESET_EMAIL, ROUTER_KEYS } from '~shared/keys';
import Container from '~shared/components/container/container.component';
import MainForm from '~shared/components/main-form/main-form.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import TextLabel from '~shared/components/text-label/text-label.component';

const ForgotPassword = () => {
	const [text, setText] = useState<string>(RESET_EMAIL.DEFAULT);
	const location = useLocation();
	const error = useUserStore((state) => state.errorMessage);
	const resetPassword = useUserStore((state) => state.resetPassword);

	const handleSubmit = (data: Pick<PasswordUser, 'email'>): void => {
		resetPassword(data);
		if (error) {
			return setText(RESET_EMAIL.ERROR);
		}
		setText(RESET_EMAIL.SUCCESS);
	};
	const backLink = location.state ? location.state.link : ROUTER_KEYS.HOME;
	return (
		<Container>
			<TodoTitle>Reset password</TodoTitle>
			<TextLabel>{text}</TextLabel>
			<Divider />
			<Divider />
			<MainForm onSubmit={handleSubmit} backLink={backLink}>
				<TextField labelName="email" fieldName="email" type="email" />
			</MainForm>
		</Container>
	);
};

export default ForgotPassword;
