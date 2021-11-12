const expressAsyncHandler = require('express-async-handler');
const Guru = require('../../models/guruModel');
const course = require('../../models/courseModel');
// const subject = require('../../models/subjectModel');
const db = require('../../connection/db');
const config = require('../../utils/config');
const firebase = require('firebase');
const{addCourseValidation,deleteCourseValidation} = require('../../validation');
//const {firebase} = require('../../connection/db');  // reference to our db 
require('firebase/firebase-storage'); // must be required for this to 

const storage = firebase.storage().ref();

global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug


module.exports.addCourse = expressAsyncHandler(async(req,res)=>{
    const {course_name,course_description,soal,jawaban_benar} = req.body;
    const username = req.user.username;

    const{error} = addCourseValidation(req.body);
    if(error)res.status(400).send(error.details[0].message);
    if(!req.file) {
        res.status(400).send("Error: No files found")
    }else{
        try{
            
                // Grab the file
            const file = req.file;
            // Format the filename
            const timestamp = Date.now();
            const name = file.originalname.split(".")[0];
            const type = file.originalname.split(".")[1];
            const fileName = `${name}_${timestamp}.${type}`;
            // Step 1. Create reference for file name in cloud storage 
            const imageRef = storage.child(`course_video/${req.user.username}/`+fileName);
            const metadata = {
                contentType: req.file.mimetype
            }
            
            // Step 2. Upload the file in the bucket storage
            const snapshot = await imageRef.put(file.buffer,metadata);
            // Step 3. Grab the public url
            const downloadURL = await snapshot.ref.getDownloadURL();
            
            const  video_name = fileName ;
            const video_file = downloadURL;
            
            
            
            // const Course = await course.create({
                //     course_name,
                //     course_description,
                //     video_name,
                //     video_file,
                //     soal,
                //     jawaban_benar,
                
                // });
                const CoursePost = new course({
                    course_name: course_name,
                    course_description: course_description,
                    course_video:{
                        video_file:downloadURL,
                        video_name:fileName
                    },
                    quiz:{
                        
                        soal:soal,
                        jawaban_benar: jawaban_benar,
                    }
                })
                const Course = await CoursePost.save();
                const guru = await Guru.findOne({username:username});
                guru.course_id.push(CoursePost);
               
               
                await guru.save()
                // res.send(guru);

                
                
                
                res.status(201).json({
                    course_name : Course.course_name,
                    course_description: Course.course_description,
                    course_id: Course._id,
                    video_name: Course.video_name,
                    video_file:Course.video_file,
                    soal: Course.soal,
                    jawaban_benar: Course.jawaban_benar
                })
                
    }catch(error){
    console.log (error)
    res.status(400).send(error.message);
    }
}
})

exports.getCourseByGuru = expressAsyncHandler(async(req,res)=>{
    const id = req.user.id;
try{

    // const guru = await Guru.findOne({id});
    // const Course_id = guru.course_id;
    // res.send(Course_id)
    const Course = await Guru.findById(id).populate('course_id');
    res.status(200).json({Course})
    console.log('retrieved list of course', Course.length, Course[0]);
}catch(err){
    console.log (err)
    res.status(400);
    throw new Error(err);
}
    // res.send(guru.course_id);


    
})

 exports.getCourseByid = expressAsyncHandler(async(req,res)=>{
     const course_id = req.params.id;

     
    //  res.send(req.params );
    try{
        
        const Course = await course.findOne({_id:course_id});
        res.status(200).json({Course});
    }catch(err){
        res.status(400);
        throw new Error(err)
    }
 })

 exports.updateCourseByid = expressAsyncHandler(async(req,res)=>{
    const course_id = req.params.id;
    const {course_name,course_description,soal,jawaban_benar} = req.body;
    const{error} = addCourseValidation(req.body);
    if(error)res.status(400).send(error.details[0].message);
    if(!req.file) {
        res.status(400).send("Error: No files found")
    }
    
    try{
             // Grab the file
             const file = req.file;
             // Format the filename
             const timestamp = Date.now();
             const name = file.originalname.split(".")[0];
             const type = file.originalname.split(".")[1];
             const fileName = `${name}_${timestamp}.${type}`;
             // Step 1. Create reference for file name in cloud storage 
             const imageRef = storage.child(`course_video/${req.user.username}/`+fileName);
             const metadata = {
                 contentType: req.file.mimetype
             }
             
             // Step 2. Upload the file in the bucket storage
             const snapshot = await imageRef.put(file.buffer,metadata);
             // Step 3. Grab the public url
             const downloadURL = await snapshot.ref.getDownloadURL();
             
             const  video_name = fileName ;
             const video_file = downloadURL;
             const CoursePost = {
                course_name: course_name,
                course_description: course_description,
                course_video:{
                    video_file:downloadURL,
                    video_name:fileName
                },
                quiz:{
                    
                    soal:soal,
                    jawaban_benar: jawaban_benar,
                }
    }

        const Course = await course.findOneAndUpdate({_id:course_id},CoursePost,{new: true});
        res.status(200).json({Course});
    }catch(err){
        res.status(400);
        throw new Error(err)
    }
})

exports.deleteCourse = expressAsyncHandler(async(req,res)=>{
    const {Course_id} = req.body;
    const{error} = deleteCourseValidation(req.body);
    if(error)res.status(400).send(error.details[0].message);
    const guru = await Guru.findOne({Course_id});

    const arr = guru.course_id
    // function checkAge(arr) {
    //     return arr = Course_id;
    //   }
      const result = arr.indexOf(Course_id,0);
      const remove = arr.splice(result,1);
      await guru.save();
      console.log(guru)
    // res.status(200).json(guru)

    const Course = await course.findOneAndDelete({_id:Course_id})
    res.send(Course)
    if(Course){
        res.status(200).json({
            success: true,
            message: Course
        })
    }else{
        res.status(200).json({
            success:false,
            message:'Failed delete Course'
        })
    }

})