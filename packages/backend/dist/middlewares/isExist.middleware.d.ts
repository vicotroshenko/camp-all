import { NextFunction, Request, Response } from 'express';
import { Models } from '../constants/models.constant';
declare const isExist: (model: Models) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default isExist;
