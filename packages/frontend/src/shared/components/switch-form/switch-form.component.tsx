import React from 'react';
import { FormGroup, Switch } from '@blueprintjs/core';
import { ITodos } from '~shared/services/types';
import TextLabel from '../text-label/text-label.component';
import { switchBtns } from './switch-form.styles';

interface SwitchFormProps {
	view: 'list' | 'full';
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	todo: ITodos;
	disabled?: boolean;
}

const SwitchForm: React.FC<SwitchFormProps> = ({
	view,
	onChange,
	todo,
	disabled = false,
}) => {
	const isOnList = Boolean(view === 'list');
	return (
		<FormGroup className={switchBtns}>
			<Switch
				className="bp5-align-right"
				name="completed"
				onChange={onChange}
				defaultChecked={todo.completed}
				disabled={disabled}
				aria-label="switch button - complete"
				labelElement={!isOnList && <TextLabel>Complete</TextLabel>}
			/>
			{!isOnList && (
				<Switch
					className="bp5-align-right"
					name="private"
					onChange={onChange}
					defaultChecked={todo.private}
					disabled={disabled}
					aria-label="switch button - private"
					labelElement={<TextLabel>Private</TextLabel>}
				/>
			)}
		</FormGroup>
	);
};

export default SwitchForm;
