import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { useModalStore } from '~store/modal.store';
import { useUserStore } from '~store/user.store';
import ButtonPrimary from '../button-primary/button-primary.component';
import AddModal from '../add-modal/add-modal.component';
import { header_btn, header_sx, userMenu } from './header.styles';
import { useLocation } from 'react-router-dom';
import { useTodosStore } from '~store/todose.store';

const Header = () => {
	const toggleModal = useModalStore((state) => state.toggle);
	const isOpen = useModalStore((state) => state.isOpen);
	const logout = useUserStore((state) => state.logout);
	const user = useUserStore((state) => state.user);
	const todo = useTodosStore((state) => state.todo);
	const location = useLocation();

	const isTodoElementPage = location.pathname.includes(todo.id);

	const logoutButtonName = user ? user.username : 'SignIn';
	const toggle = (): void => toggleModal();

	return (
		<header className={header_sx}>
			<AddModal toggle={toggle} isOpen={isOpen} />
			<div className={header_btn}>
				{!isTodoElementPage && (
					<ButtonPrimary onClick={toggle}>add todo</ButtonPrimary>
				)}

				<Menu className={userMenu}>
					<MenuItem
						text={logoutButtonName}
						roleStructure="menuitem" 
						children={
							<>
								<MenuItem text="Logout" onClick={logout} />
							</>
						}
					/>
				</Menu>
			</div>
		</header>
	);
};

export default Header;
