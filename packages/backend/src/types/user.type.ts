export interface UserType {
	id?: string;
	username: string;
	email: string;
	password: string;
	isConfirmed: boolean;
	token?: string;
	verificationToken?: string;
}
