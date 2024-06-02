import Joi from 'joi';

const authData = {
	email: Joi.string().required(),
	password: Joi.string().required(),
};

const register = Joi.object({
	username: Joi.string().required(),
	...authData,
});

const login = Joi.object({
	...authData,
});

const resetPassword = Joi.object({
	email: Joi.string().required(),
});

const newPassword = Joi.object({
	newPassword: Joi.string().required(),
	passwordToken: Joi.string().required(),
});

const schemas = {
	register,
	login,
	resetPassword,
	newPassword,
};

export default schemas;
