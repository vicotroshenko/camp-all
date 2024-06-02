import React from 'react';
import { innerContainer, outerSection } from './container.styles';
import { useTodosStore } from '~store/todose.store';
import { FETCHING_STATUS } from '~shared/keys';
import Loader from '../loader/loader.component';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	const status = useTodosStore((state) => state.status);
	const errorMessage = useTodosStore((state) => state.errorMessage);

	const isError = Boolean(status === FETCHING_STATUS.ERROR);
	const isLoading = Boolean(status === FETCHING_STATUS.LOADING);

	return (
		<section className={outerSection}>
			<div className={innerContainer}>
				{!isError && children}
				{isError && <div>{errorMessage}</div>}
				{isLoading && <Loader />}
			</div>
		</section>
	);
};

export default Container;
