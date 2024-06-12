import { ITodos } from '~shared/services/types';

export type ModalState = {
	isOpen: boolean;
	defaultValue?: ITodos;
};

type ModalAction = {
	toggle: (defaultValue?: ITodos) => void;
};

export type ModalStore = ModalState & ModalAction;
