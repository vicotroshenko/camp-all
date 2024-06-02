import * as React from 'react';
import { Outlet, redirect } from 'react-router-dom';
import Header from '~shared/components/header/header.component';
import Loader from '~shared/components/loader/loader.component';
import { useUserStore } from '~store/user.store';

const App = (): React.ReactNode => {

	return (
		<>
			<Header />
			<React.Suspense fallback={<Loader />}>
				<Outlet />
			</React.Suspense>
		</>
	);
};

export default App;
