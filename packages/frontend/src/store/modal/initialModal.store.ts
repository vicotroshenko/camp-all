import { todoInitial } from '~store/todos/todoInitial.store';
import { ModalState } from './types.store';

const modalInitial: ModalState = {
	isOpen: false,
	defaultValue: todoInitial,
};

export default modalInitial;
