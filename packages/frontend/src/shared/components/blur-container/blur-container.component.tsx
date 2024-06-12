import React from 'react';
import { blur_wrapper } from './blur-container.styles';
interface BlurContainerProps {
	children: React.ReactNode;
}

const BlurContainer: React.FC<BlurContainerProps> = ({ children }) => {
	return <div className={blur_wrapper}>{children}</div>;
};

export default BlurContainer;
