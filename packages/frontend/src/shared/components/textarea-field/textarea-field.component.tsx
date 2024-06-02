import React from 'react';
import { textarea_desc } from './textarea-field.styles';
import { Label } from '@blueprintjs/core';
import { Field } from 'react-final-form';

interface TextareaFieldProps {
	labelName?: string;
	fieldName: string;
	initialValue: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
	labelName = '',
	fieldName,
	initialValue,
}) => {
	return (
		<Label name={labelName}>
			<Field name={fieldName} autocomplete="off" initialValue={initialValue}>
				{(props) => (
					<textarea
						{...props.input}
						className={textarea_desc}
					></textarea>
				)}
			</Field>
		</Label>
	);
};

export default TextareaField;
