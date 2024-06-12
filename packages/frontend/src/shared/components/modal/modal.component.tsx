import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { backdrop, backdrop_hide, modal_show } from './modal.styles';
import { useModalStore } from '~store/modal/modal.store';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface ModalProps {
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const toggle = useModalStore((state) => state.toggle);
	const isOpen = useModalStore((state) => state.isOpen);
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
				{ [backdrop_hide]: !isOpen },
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
