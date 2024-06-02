import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '~modules/app/app.module';
import ForgotPassword from '~modules/forgot-password/forgot-password.module';
import Home from '~modules/home/home.module';
import Login from '~modules/login/login.module';
import NewPassword from '~modules/new-password/new-password.module';
import Register from '~modules/register/register.module';
import TodoAll from '~modules/todo-all/todo-all.module';
import { ROUTER_KEYS } from '~shared/keys';
import { useUserStore } from '~store/user.store';
import ProtectedRout from './ProtectedRout.route';
import PublicRout from './PublicRout.route';

const TodoElement = React.lazy(
	() => import('~modules/todo-element/todo-element.module'),
);

const Router: React.FunctionComponent = () => {
	const isLogged = useUserStore((state) => state.isLogged);


	return (
		<Routes>
			<Route
				path={ROUTER_KEYS.HOME}
				element={
					<PublicRout isLogged={isLogged}>
						<Home />
					</PublicRout>
				}
			/>
			<Route
				path={ROUTER_KEYS.LOGIN}
				element={
					<PublicRout isLogged={isLogged}>
						<Login />
					</PublicRout>
				}
			/>
			<Route
				path={ROUTER_KEYS.REGISTER}
				element={
					<PublicRout isLogged={isLogged}>
						<Register />
					</PublicRout>
				}
			/>
			<Route path={ROUTER_KEYS.PASSWORD} element={<NewPassword />} />
			<Route
				path={ROUTER_KEYS.FORGOT_PASSWORD}
				element={<ForgotPassword />}
			/>
			<Route
				path={ROUTER_KEYS.BASE_NAME}
				element={
					<ProtectedRout isLogged={isLogged}>
						<App />
					</ProtectedRout>
				}
			>
				<Route
					index
					element={
						<ProtectedRout isLogged={isLogged}>
							<TodoAll />
						</ProtectedRout>
					}
				/>
				<Route
					path={ROUTER_KEYS.BY_ID}
					element={
						<ProtectedRout isLogged={isLogged}>
							<TodoElement />
						</ProtectedRout>
					}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
