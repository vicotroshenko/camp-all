import Joi from 'joi';

const todoAdd = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().allow(''),
	completed: Joi.boolean(),
	private: Joi.boolean(),
});

const todoUpdate = Joi.object({
	title: Joi.string(),
	description: Joi.string().allow(''),
	completed: Joi.boolean(),
	private: Joi.boolean(),
});

const schemas = {
	todoAdd,
	todoUpdate,
};

export default schemas;
