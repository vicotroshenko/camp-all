import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { Divider } from '@blueprintjs/core';
import { PasswordUser } from '~shared/services/types';
import { MUTATION_KEYS, RESET_EMAIL, ROUTER_KEYS } from '~shared/keys';
import Container from '~shared/components/container/container.component';
import MainForm from '~shared/components/main-form/main-form.component';
import TextField from '~shared/components/text-field/text-field.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';
import TextLabel from '~shared/components/text-label/text-label.component';
import userService from '~shared/services/user.service';
import BlurContainer from '~shared/components/blur-container/blur-container.component';

const ForgotPassword = () => {
	const [text, setText] = useState<string>(RESET_EMAIL.DEFAULT);
	const location = useLocation();

	const onSuccess = (): void => {
		setText(RESET_EMAIL.SUCCESS);
		toast.success('Success', {
			position: 'bottom-center',
		});
	};

	const onError = (): void => {
		setText(RESET_EMAIL.ERROR);
		toast.error('Something wrong, try again!', {
			position: 'bottom-center',
		});
	};
	const { mutate: reset } = useMutation({
		mutationKey: [MUTATION_KEYS.RESET_PASSWORD],
		mutationFn: (data: Pick<PasswordUser, 'email'>) =>
			userService.resetPassword(data),
		onSuccess,
		onError,
	});

	const backLink = location.state ? location.state.link : ROUTER_KEYS.HOME;
	return (
		<Container>
			<BlurContainer>
				<TodoTitle>Reset password</TodoTitle>
				<p>{text}</p>
				<Divider />
				<Divider />
				<MainForm onSubmit={reset} backLink={backLink}>
					<TextField
						labelName="email"
						fieldName="email"
						type="email"
					/>
				</MainForm>
				<Toaster />
			</BlurContainer>
		</Container>
	);
};

export default ForgotPassword;
