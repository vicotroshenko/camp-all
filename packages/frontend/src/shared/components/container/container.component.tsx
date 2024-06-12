import React from 'react';
import { innerContainer, outerSection } from './container.styles';
import { useTodosStore } from '~store/todos/todose.store';
import { FETCHING_STATUS } from '~shared/keys';
import Loader from '../loader/loader.component';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<section className={outerSection}>
			<div className={innerContainer}>{children}</div>
		</section>
	);
};

export default Container;
