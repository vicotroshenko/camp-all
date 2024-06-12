import React, { ReactNode } from 'react';
import { btnPrimary } from './button-primary.styles';

interface ButtonPrimaryProps {
	type?: 'button' | 'submit' | 'reset';
	children: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
	children,
	type = 'submit',
	disabled = false,
	onClick,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			tabIndex={1}
			className={btnPrimary}
		>
			{children}
		</button>
	);
};

export default ButtonPrimary;
