import React from 'react';
import { Form } from 'react-final-form';
import { LoginUser, PasswordUser, RegisterUser } from '~shared/services/types';
import ButtonPrimary from '../button-primary/button-primary.component';
import { login_btn, login_form } from './main-from.styles';
import LinkPrimary from '../link-primary/link-primary.component';

interface MainFormProps {
	children: React.ReactNode;
	onSubmit: (
		data: RegisterUser | LoginUser | Omit<PasswordUser, 'passwordToken'>,
	) => void;
	backLink: string;
}

const MainForm: React.FC<MainFormProps> = ({
	children,
	onSubmit,
	backLink,
}) => {
	return (
		<Form
			onSubmit={onSubmit}
			render={(props) => (
				<form className={login_form} onSubmit={props.handleSubmit}>
					{children}
					<div className={login_btn}>
						<LinkPrimary link={backLink}>back</LinkPrimary>
						<ButtonPrimary type="submit">submit</ButtonPrimary>
					</div>
				</form>
			)}
		/>
	);
};

export default MainForm;
