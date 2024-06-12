import { UserState } from './types.store';

const userInitial: UserState = {
	user: null,
	token: '',
	isLogged: false,
};

export default userInitial;
