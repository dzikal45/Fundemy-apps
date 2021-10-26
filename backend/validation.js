const Joi = require('joi');

exports.registerValidation = data => {
    const Schema =Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(6).required(),
        username:Joi.string()
    
    });
  return  Schema.validate(data);

};

exports.loginValidation = data =>{
    const Schema =Joi.object({
        password:Joi.string().min(6).required(),
        username:Joi.string().required()
    
    });
    return  Schema.validate(data);
}
//validation