import { create } from 'zustand';
import { UserType } from '~shared/services/types';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '~shared/keys';
import { UserPersist, UserStore } from './types.store';
import userInitial from './userInitial';

export const useUserStore = create<
	UserStore,
	[['zustand/persist', UserPersist]]
>(
	persist(
		(set) => ({
			...userInitial,
			login: (user: UserType): void =>
				set({
					user: {
						...user,
						password: '',
					},
					token: user.token,
					isLogged: true,
				}),
			logout: (): void => set(userInitial),
		}),
		{
			name: STORAGE_KEYS.TODOS,
			partialize: (state) => ({
				token: state.token,
				isLogged: state.isLogged,
				user: {
					id: state?.user?.id ?? '',
				},
			}),
		},
	),
);
