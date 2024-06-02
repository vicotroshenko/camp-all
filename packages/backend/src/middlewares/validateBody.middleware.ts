import HttpError from '@/helpers/HttpError.helper';
import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

const validateBody = (schema: ObjectSchema) => {
	const func = (req: Request, res: Response, next: NextFunction): void => {
		const { error } = schema.validate(req.body);
		if (error) {
			next(new HttpError(400, 'missing required name field'));
		}
		next();
	};
	return func;
};

export default validateBody;
