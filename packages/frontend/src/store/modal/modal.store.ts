import { create } from 'zustand';
import { todoInitial } from '../todos/todoInitial.store';
import { ModalStore } from './types.store';
import modalInitial from './initialModal.store';

export const useModalStore = create<ModalStore>((set) => {
	return {
		...modalInitial,
		toggle: (defaultValue = null): void => {
			set((state) => ({
				defaultValue: defaultValue || todoInitial,
				isOpen: !state.isOpen,
			}));
		},
	};
});
