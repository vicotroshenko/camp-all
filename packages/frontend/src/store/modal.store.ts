import { create } from 'zustand';
import { ITodos } from '~shared/services/types';
import TODO_INITIAL from './todoInitial.store';

interface IModalStore {
	isOpen: boolean;
	defaultValue?: ITodos;
	toggle: (defaultValue?: ITodos) => void;
}

export const useModalStore = create<IModalStore>((set) => {
	return {
		isOpen: false,
		defaultValue: TODO_INITIAL,
		toggle: (defaultValue = null) => {
			set((state) => ({
				defaultValue: defaultValue || TODO_INITIAL,
				isOpen: !state.isOpen,
			}));
		},
	};
});
