import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const ProtectedRout = ({ isLogged, children }) => {
	if (!isLogged) {
		return <Navigate to={ROUTER_KEYS.HOME} replace />;
	} else {
		return children;
	}
};

export default ProtectedRout;
