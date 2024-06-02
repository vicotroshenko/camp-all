import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { backdrop, modal_hide, modal_show } from './modal.styles';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface ModalProps {
	isOpen: boolean;
	children: React.ReactNode;
	toggle: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen = false, children, toggle }) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			if (event.code === 'Escape') {
				toggle();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [toggle]);

	const handleBackdropClick = (
		event: React.MouseEvent<HTMLElement>,
	): void => {
		if (event.currentTarget === event.target) {
			toggle();
		}
	};

	return createPortal(
		<div
			className={classNames(
				{ [backdrop]: isOpen },
				{ [modal_hide]: !isOpen },
			)}
			onClick={handleBackdropClick}
		>
			<div className={classNames({ [modal_show]: isOpen })}>
				{children}
			</div>
		</div>,
		modalRoot,
	);
};

export default Modal;
