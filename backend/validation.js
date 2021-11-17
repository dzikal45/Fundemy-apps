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
exports.enrollCourse = data =>{
    const Schema =Joi.object({
        course_id:Joi.required(),
        token:Joi.required(),
    
    });
    return  Schema.validate(data);
}

exports.loginValidation = data =>{
    const Schema =Joi.object({
        password:Joi.string().min(6).required(),
        username:Joi.string().required()
    
    });
    return  Schema.validate(data);
}

exports.addCourseValidation = data =>{
    const Schema = Joi.object({
        course_name:Joi.string().required(),
        course_description:Joi.string().required(),
        soal:Joi.string().required(),
        jawaban_benar:Joi.string().required(),
        token:Joi.required(),

    });
    return  Schema.validate(data);
}
exports.deleteCourseValidation = data =>{
    const Schema = Joi.object({
       Course_id:Joi.required(),
        token:Joi.required(),

    });
    return  Schema.validate(data);
}
exports.uploadPembayaranValidation = data =>{
    const Schema = Joi.object({
       total_payment:Joi.required(),
        subscribe:Joi.required(),
        token:Joi.required(),

    });
    return  Schema.validate(data);
}
//validation