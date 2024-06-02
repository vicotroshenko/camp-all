import { Switch } from '@blueprintjs/core';
import React from 'react';
import { Field } from 'react-final-form';
import TextLabel from '../text-label/text-label.component';

interface SwitchFieldProps {
	fieldName: string;
	ariaLabel?: string;
	label?: string;
	defaultChecked: boolean;
}

const CustomSwitchField: React.FC<SwitchFieldProps> = ({
	fieldName,
	ariaLabel = 'switch button',
	label = '',
	defaultChecked = false,
}) => {
	return (
		<Field name={fieldName} type="checkbox" defaultChecked={defaultChecked} aria-label={ariaLabel}>
			{(props) => (
				<div>
					<Switch
						{...props.input}
						labelElement={
							<TextLabel label="primary">{label}</TextLabel>
						}
					/>
				</div>
			)}
		</Field>
	);
};

export default CustomSwitchField;
