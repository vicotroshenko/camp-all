import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
	ds_action_wrapper,
	showUp_active,
	showUp_container,
} from './drop-down.styles';
import { Button } from '@blueprintjs/core';

interface DropDownProps {
	text?: string;
	children: React.ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({ text, children }) => {
	const [active, setActive] = useState<boolean>(false);

	const handleOnMouseEnter = (): void => setActive(true);
	const handleOnMouseLeave = (): void => setActive(false);

	return (
		<div
			className={ds_action_wrapper}
			tabIndex={1}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			<Button
				minimal
				icon={active ? 'caret-up' : 'caret-down'}
				tabIndex={1}
				aria-label="open todo menu"
			>
				{text}
			</Button>
			<div
				className={classNames({
					[showUp_container]: true,
					[showUp_active]: active,
				})}
			>
				{children}
			</div>
		</div>
	);
};

export default DropDown;
