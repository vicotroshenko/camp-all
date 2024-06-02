import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
declare const ctrlWrapper: (ctrl: RequestHandler) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default ctrlWrapper;
