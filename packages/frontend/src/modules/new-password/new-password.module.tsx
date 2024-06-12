import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MUTATION_KEYS, RESET_EMAIL, ROUTER_KEYS } from '~shared/keys';
import { PasswordUser } from '~shared/services/types';
import { validatePassword } from '~shared/validation/field.validators';
import { useUserStore } from '~store/user/user.store';
import Container from '~shared/components/container/container.component';
import MainForm from '~shared/components/main-form/main-form.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import useAppSearchParams from '~/hooks/useAppSearchParams.hook';
import { useMutation } from '@tanstack/react-query';
import userService from '~shared/services/user.service';
import BlurContainer from '~shared/components/blur-container/blur-container.component';

const NewPassword = () => {
	const [text, setText] = useState<string>('');
	const loginUser = useUserStore((state) => state.login);

	const [params] = useAppSearchParams();

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

	const { mutate: changePassword } = useMutation({
		mutationKey: [MUTATION_KEYS.CHANGE_PASSWORD],
		mutationFn: (data: Omit<PasswordUser, 'email'>) =>
			userService.changePassword(data),
		onSuccess,
		onError,
	});

	const handleSubmit = (data: Omit<PasswordUser, 'passwordToken'>): void => {
		const compare = data.password === data.newPassword;
		if (!compare) {
			return setText(RESET_EMAIL.INPUT_ERROR);
		}
		setText('');
		changePassword({
			newPassword: data.newPassword,
			passwordToken: params.token,
		});
	};

	return (
		<Container>
			<BlurContainer>
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
				<Toaster />
			</BlurContainer>
		</Container>
	);
};

export default NewPassword;
