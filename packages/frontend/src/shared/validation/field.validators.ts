export const validateLength = (text: string, num: number): string => {
	if (!text || text.length < num)
		return `The text must be more then ${num} letter`;
};

export const validateName = (value: string): string => validateLength(value, 5);

export const validatePassword = (value: string): string => {
	if (!value) return 'password is required';

	const valueArray = value.split('');
	const isEveryString = valueArray.every((letter) => isNaN(Number(letter)));
	const isLowerLetters = valueArray.every(
		(letter) => letter === letter.toLowerCase(),
	);

	const isNotValidPassword =
		value.length < 7 || isEveryString || isLowerLetters;

	if (isNotValidPassword) {
		return 'password must be at least 7 characters, contain numbers and uppercase letters';
	}
};
