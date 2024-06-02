import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const PublicRout = ({ isLogged, children }) => {
	if (isLogged) {
		return <Navigate to={ROUTER_KEYS.BASE_NAME} replace />;
	} else {
		return children;
	}
};

export default PublicRout;
