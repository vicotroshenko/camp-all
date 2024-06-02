import React from 'react';
import { ct_field, ct_field_container } from './custom-text-field.styles';

interface CustomTextFieldProps {
	name: string;
	placeholder?: string;
	defaultValue?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomTextField: React.FC<CustomTextFieldProps> = ({
	name,
	placeholder = '',
	defaultValue,
	onChange,
}) => {
	return (
		<div className={ct_field_container}>
			<input
				type="text"
				name={name}
				className={ct_field}
				placeholder={placeholder}
				defaultValue={defaultValue}
				onChange={onChange}
			/>
		</div>
	);
};

export default CustomTextField;
