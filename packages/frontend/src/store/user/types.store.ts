import { UserType } from '~shared/services/types';

export type UserState = {
	user: UserType | null;
	token?: string;
	isLogged: boolean;
};

export type UserActions = {
	login: (user: UserType) => void;
	logout: () => void;
};

export type UserStore = UserActions & UserState;

export type UserPersist = {
	token: string;
	isLogged: boolean;
	user: Pick<UserType, 'id'>;
};
