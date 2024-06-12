import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { useModalStore } from '~store/modal/modal.store';
import { useUserStore } from '~store/user/user.store';
import ButtonPrimary from '../button-primary/button-primary.component';
import { header_btn, header_sx, userMenu } from './header.styles';
import { useParams } from 'react-router-dom';
import DropDown from '../drop-down/drop-down.component';

const Header = () => {
	const toggleModal = useModalStore((state) => state.toggle);
	const logout = useUserStore((state) => state.logout);
	const user = useUserStore((state) => state.user);
	const params = useParams();
	const isTodoElementPage = Object.keys(params).includes('id');

	const logoutButtonName = user ? user.username : 'SignIn';
	const toggle = (): void => toggleModal();

	return (
		<header className={header_sx}>
			<div className={header_btn}>
				{!isTodoElementPage && (
					<ButtonPrimary onClick={toggle}>add todo</ButtonPrimary>
				)}
				<DropDown text={'Victor'}>
					<ButtonPrimary onClick={logout}>Log out</ButtonPrimary>
				</DropDown>
			</div>
		</header>
	);
};

export default Header;
