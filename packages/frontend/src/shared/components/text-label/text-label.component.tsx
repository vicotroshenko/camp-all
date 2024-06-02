import React from 'react';
import { error_text, sw } from './text-label.styles';

interface TextLabelProps {
	children: React.ReactNode;
	error?: boolean;
}

const TextLabel: React.FC<TextLabelProps> = ({ children, error = false }) => {
	return <span className={error ? error_text : sw}>{children}</span>;
};

export default TextLabel;
