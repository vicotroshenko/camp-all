import { NextFunction, Request, Response } from 'express';
import { prisma } from '@/app';
import HttpError from '@/helpers/HttpError.helper';
import { Models } from '@/constants/models.constant';

const isExist =
	(model: Models) =>
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const { id } = req.params;

		const result = await prisma[model].findUnique({
			where: {
				id,
			},
		});

		if (!result) {
			next(new HttpError(400, `${id} is not valid id`));
		}
		next();
	};

export default isExist;
