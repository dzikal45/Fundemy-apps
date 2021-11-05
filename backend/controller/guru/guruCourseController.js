const expressAsyncHandler = require('express-async-handler');
const Guru = require('../../models/guruModel');
const course = require('../../models/courseModel');
module.exports.addCourse = expressAsyncHandler(async(req,res)=>{
    const {course_name,course_description,content,author,category,grades,username} = req.body;

     const Course = await course.create({
         course_name,course_description,content,author,category,grades
 
     });
     const guru = await Guru.findOneAndUpdate({username},{$push:{course_id:Course._id}},{new:true});
   

 if(Course && guru){
     const courseId = Object.assign(guru,Course._id)
     if(courseId){
         guru.save();

         res.status(201).json({
             course_name : Course.course_name,
             course_description: Course.course_description,
            content: Course.content,
            autthor: Course.author,
            category: Course.category,
            grades: Course.grades,
            course_id: Course._id
         })
     }else{
        res.status(400);
        throw new Error(`failed create   data`)
     }
 }  else{
    res.status(400);
    throw new Error(`Invalid  data`)
}


})