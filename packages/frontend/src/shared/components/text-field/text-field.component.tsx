import React, { HTMLInputTypeAttribute } from 'react';
import TextLabel from '../text-label/text-label.component';
import { Label } from '@blueprintjs/core';
import { Field } from 'react-final-form';
import { fieldStyle } from './text-field.styles';

interface TextFieldProps {
	labelName?: string;
	fieldName: string;
	validate?: (value: string) => string;
	type?: HTMLInputTypeAttribute;
	initialValue: string;
}

const TextField: React.FC<TextFieldProps> = ({
	labelName = '',
	fieldName,
	validate,
	type = 'text',
	initialValue,
}) => {
	return (
		<>
			<Label>
				<TextLabel>{labelName}</TextLabel>
				<Field
					type={type}
					name={fieldName}
					autocomplete="off"
					initialValue={initialValue}
					validate={validate}
				>
					{({ input, meta }) => (
						<>
							<input {...input} className={fieldStyle} />
							{!meta.valid && meta.touched && (
								<TextLabel error={true}>{meta.error}</TextLabel>
							)}
						</>
					)}
				</Field>
			</Label>
		</>
	);
};

export default TextField;
