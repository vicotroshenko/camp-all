import { ITodos } from '~shared/services/types';

const getUnique = (array: ITodos[]) =>
	array.filter(
		(todo, index, arr) => index === arr.findIndex((t) => t.id === todo.id),
	);

export default getUnique;
