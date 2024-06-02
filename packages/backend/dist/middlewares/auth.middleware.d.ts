import { Request, Response, NextFunction } from 'express';
declare function auth(req: Request, res: Response, next: NextFunction): void;
export default auth;
