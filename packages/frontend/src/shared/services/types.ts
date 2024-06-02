export interface ITodos {
	id?: string;
	title: string;
	description: string;
	completed: boolean;
	private: boolean;
	createdAt?: string;
	owner?: string;
}

export interface UserType {
	id: string;
	username: string;
	email: string;
	password: string;
	token: string;
	isConfirmed: boolean;
	verifiedToken: string;
}

export interface RegisterUser
	extends Pick<UserType, 'username' | 'email' | 'password'> {}

export interface LoginUser extends Pick<UserType, 'email' | 'password'> {}

export interface PasswordUser extends Pick<UserType, 'email'> {
	newPassword: string;
	passwordToken: string;
	password?: string;
}
