import jsonwebtoken from 'jsonwebtoken';

interface IPayload {
	[x: string]: string;
}

const createToken = (payload: IPayload): string => {
	const { SECRET_KEY } = process.env;

	return jsonwebtoken.sign(payload, SECRET_KEY as string, {
		expiresIn: '23h',
	});
};

export default createToken;
