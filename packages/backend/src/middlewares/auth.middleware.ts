import { UserType } from '@/types/user.type';
import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

function auth(req: Request, res: Response, next: NextFunction): void {
	return passport.authenticate(
		'jwt',
		{ session: false },
		(error: unknown, user: UserType | false) => {
			if (error) {
				return res
					.status(400)
					.json({ message: 'Email or password invalid' });
			}
			if (!user) {
				return res.status(401).json({ message: 'Unauthorized' });
			}
			req.user = user as UserType;
			next();
		},
	)(req, res, next);
}

export default auth;
