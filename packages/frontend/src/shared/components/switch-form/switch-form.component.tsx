import React, { useState } from 'react';
import { FormGroup, Switch } from '@blueprintjs/core';
import { ITodos, NewUpdateData } from '~shared/services/types';
import TextLabel from '../text-label/text-label.component';
import { switchBtns } from './switch-form.styles';

interface SwitchFormProps {
	view: 'list' | 'full';
	todo: ITodos;
	disabled?: boolean;
	onTodoUpdate: (newData: NewUpdateData, todo?: ITodos) => void;
}

const SwitchForm: React.FC<SwitchFormProps> = ({
	view,
	onTodoUpdate,
	todo,
	disabled = false,
}) => {
	const [value, setValue] = useState<{ [v: string]: boolean }>({
		completed: todo.completed,
		private: todo.private,
	});

	const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, checked } = e.target;
		setValue((state) => ({ ...state, [name]: checked }));
		onTodoUpdate({ [name]: checked }, todo);
	};

	const isOnList = Boolean(view === 'list');
	return (
		<FormGroup className={switchBtns}>
			<Switch
				className="bp5-align-right"
				name="completed"
				onChange={handleSwitch}
				defaultChecked={value.completed}
				disabled={disabled}
				tabIndex={1}
				aria-label="switch button - complete"
				labelElement={!isOnList && <TextLabel>Complete</TextLabel>}
			/>
			{!isOnList && (
				<Switch
					className="bp5-align-right"
					name="private"
					onChange={handleSwitch}
					defaultChecked={value.private}
					disabled={disabled}
					tabIndex={1}
					aria-label="switch button - private"
					labelElement={<TextLabel>Private</TextLabel>}
				/>
			)}
		</FormGroup>
	);
};

export default SwitchForm;
