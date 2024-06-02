import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RESET_EMAIL, ROUTER_KEYS } from '~shared/keys';
import { PasswordUser } from '~shared/services/types';
import { validatePassword } from '~shared/validation/field.validators';
import { useUserStore } from '~store/user.store';
import Container from '~shared/components/container/container.component';
import MainForm from '~shared/components/main-form/main-form.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';

const NewPassword = () => {
	const [text, setText] = useState<string>('');
	const changePassword = useUserStore((state) => state.changePassword);
	const error = useUserStore((state) => state.errorMessage);
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const params = useMemo(
		() => Object.fromEntries([...searchParams]),
		[searchParams],
	);

	const handleSubmit = (data: Omit<PasswordUser, 'passwordToken'>): void => {
		const compare = data.password === data.newPassword;
		if(!compare){
			return setText(RESET_EMAIL.INPUT_ERROR);
		}
		setText('');
		changePassword({
			newPassword: data.newPassword,
			passwordToken: params.token,
		});
		!error && navigate(ROUTER_KEYS.BASE_NAME);
	};

	return (
		<Container>
			<TodoTitle>Enter your new password</TodoTitle>
			{text && <span>{text}</span>}
			<MainForm
				onSubmit={handleSubmit}
				backLink={ROUTER_KEYS.FORGOT_PASSWORD}
			>
				<TextField
					labelName="password"
					fieldName="password"
					type="password"
					validate={validatePassword}
				/>
				<TextField
					labelName="repeat password"
					fieldName="newPassword"
					type="password"
					validate={validatePassword}
				/>
			</MainForm>
		</Container>
	);
};

export default NewPassword;
