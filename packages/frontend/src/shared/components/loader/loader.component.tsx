import { Spinner } from '@blueprintjs/core';
import * as React from 'react';
import { loader_container } from './loader.styles';

const Loader: React.FunctionComponent = () => {
	return (
		<div className={loader_container}>
			<Spinner size={60} intent="primary" />
		</div>
	);
};

export default Loader;
