import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
declare const validateBody: (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => void;
export default validateBody;
