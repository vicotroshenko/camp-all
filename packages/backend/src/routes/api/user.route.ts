import userController from '@/controllers/user.controller';
import auth from '@/middlewares/auth.middleware';
import ctrlWrapper from '@/middlewares/ctrlWrapper.middleware';
import validateBody from '@/middlewares/validateBody.middleware';
import schemas from '@/schemas/auth.schema';
import { Router } from 'express';

const router: Router = Router();

router.post(
	'/register',
	validateBody(schemas.register),
	ctrlWrapper(userController.register.bind(userController)),
);

router.post(
	'/login',
	validateBody(schemas.login),
	ctrlWrapper(userController.login.bind(userController)),
);

router.post(
	'/logout',
	auth,
	ctrlWrapper(userController.logout.bind(userController)),
);

router.post(
	'/reset-password',
	validateBody(schemas.resetPassword),
	ctrlWrapper(userController.resetPassword.bind(userController)),
);

router.put(
	'/password',
	validateBody(schemas.newPassword),
	ctrlWrapper(userController.changePassword.bind(userController)),
);

router.get(
	'/verify/:token',
	ctrlWrapper(userController.verify.bind(userController)),
);
export default router;
