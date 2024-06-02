import { create } from 'zustand';
import {
	LoginUser,
	PasswordUser,
	RegisterUser,
	UserType,
} from '~shared/services/types';
import userService from '~shared/services/user.service';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '~shared/keys';

interface IUserStore {
	user: UserType | null;
	token?: string;
	status: 'loading' | 'success' | 'error';
	errorMessage: string | null;
	isLogged: boolean;
	register: (data: RegisterUser) => Promise<void>;
	login: (data: LoginUser) => Promise<void>;
	logout: () => Promise<void>;
	resetPassword: (data: Pick<PasswordUser, 'email'>) => Promise<void>;
	changePassword: (data: Omit<PasswordUser, 'email'>) => Promise<void>;
}

export const useUserStore = create<
	IUserStore,
	[['zustand/persist', IUserStore]]
>(
	persist(
		(set) => ({
			user: null,
			token: '',
			status: 'success',
			errorMessage: null,
			isLogged: false,
			register: async (data: RegisterUser): Promise<void> => {
				try {
					set({ status: 'loading', errorMessage: null });
					const res = await userService.register(data);
					set({
						user: {
							...res.data,
							password: '',
						},
						token: res.data.token,
						status: 'success',
						isLogged: true,
					});
				} catch (error) {
					set({ status: 'error', errorMessage: error.message });
				}
			},
			login: async (data: LoginUser): Promise<void> => {
				try {
					set({ status: 'loading', errorMessage: null });
					const res = await userService.login(data);
					set({
						user: {
							...res.data,
							password: '',
						},
						token: res.data.token,
						status: 'success',
						isLogged: true,
					});
				} catch (error) {
					set({ status: 'error', errorMessage: error.message });
				}
			},
			logout: async (): Promise<void> => {
				try {
					set({ status: 'loading', errorMessage: null });
					await userService.logout();
					set({
						user: null,
						token: '',
						status: 'success',
						isLogged: false,
					});
				} catch (error) {
					set({ status: 'error', errorMessage: error.message });
				}
			},
			resetPassword: async (
				data: Pick<PasswordUser, 'email'>,
			): Promise<void> => {
				try {
					set({ status: 'loading', errorMessage: null });
					await userService.resetPassword(data);
					set({
						status: 'success',
					});
				} catch (error) {
					set({ status: 'error', errorMessage: error.message });
				}
			},
			changePassword: async (
				data: Omit<PasswordUser, 'email'>,
			): Promise<void> => {
				try {
					set({ status: 'loading', errorMessage: null });
					const res = await userService.changePassword(data);
					set({
						user: res.data,
						token: res.data.token,
						status: 'success',
						isLogged: true,
					});
				} catch (error) {
					set({ status: 'error', errorMessage: error.message });
				}
			},
		}),
		{
			name: STORAGE_KEYS.TODOS,
		},
	),
);