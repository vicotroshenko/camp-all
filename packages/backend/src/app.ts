import express, { Express, NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { ExtractJwt, Strategy } from 'passport-jwt';
import passport from 'passport';
import { JwtPayload } from 'jsonwebtoken';
import AppRouter from './routes';
import { IHttpError } from './types/httpError.type';
import userService from './services/user.service';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

export const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY as string,
};

const jwtStrategy = new Strategy(opts, async (payload: JwtPayload, done) => {
	try {
		const user = await userService.findUser(payload.email);
		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	} catch (err) {
		return done(err, false);
	}
});
passport.use('jwt', jwtStrategy);
app.use(passport.initialize());

router.init();

app.use((err: IHttpError, req: Request, res: Response, next: NextFunction) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ message });
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
