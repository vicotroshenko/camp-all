import Joi from 'joi';
declare const schemas: {
    todoAdd: Joi.ObjectSchema<any>;
    todoUpdate: Joi.ObjectSchema<any>;
};
export default schemas;
