import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';
const { SECRET_KEY } = process.env;

const convertToken = (token: string): string => {
	const payload = jsonwebtoken.verify(
		token,
		SECRET_KEY as string,
	) as JwtPayload;

	return payload.email;
};

export default convertToken;
