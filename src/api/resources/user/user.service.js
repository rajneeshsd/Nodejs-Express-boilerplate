import joi from '@hapi/joi';
export default {
    validateUserSignup(body) {
        const schema = joi.object().keys({
            firstName: joi.string().alphanum().min(3).max(16).trim().required(),
            lastName: joi.string().alphanum().min(3).max(16).trim().required(),
            email: joi.string().email().required().trim(),
            activationKey : joi.string().required(),
            gender : joi.string().optional(),
            password: joi.string().required()
        });
        const { value, error } = joi.validate(body, schema);
        if (error && error.details){
            return error;
        } else {
            return value;
        }
    }
}


