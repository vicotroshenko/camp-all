import Joi from 'joi';
declare const schemas: {
    register: Joi.ObjectSchema<any>;
    login: Joi.ObjectSchema<any>;
    resetPassword: Joi.ObjectSchema<any>;
    newPassword: Joi.ObjectSchema<any>;
};
export default schemas;
