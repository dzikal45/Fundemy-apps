const expressAsyncHandler = require('express-async-handler');
const Guru = require('../../models/guruModel');
const course = require('../../models/courseModel');
// const subject = require('../../models/subjectModel');
const db = require('../../connection/db');
const config = require('../../utils/config');
const firebase = require('firebase');
//const {firebase} = require('../../connection/db');  // reference to our db 
require('firebase/firebase-storage'); // must be required for this to 

const storage = firebase.storage().ref();

global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug
module.exports.addCourse = expressAsyncHandler(async(req,res)=>{
    const {course_name,course_description,soal,jawaban_benar} = req.body;
    const username = req.user.username;
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
        const imageRef = storage.child('course_video/'+fileName);
        const metadata = {
            contentType: req.file.mimetype
        }

        // Step 2. Upload the file in the bucket storage
        const snapshot = await imageRef.put(file.buffer,metadata);
        // Step 3. Grab the public url
        const downloadURL = await snapshot.ref.getDownloadURL();
        
          const  video_name = fileName ;
            const video_file = downloadURL;
        
       

        const Course = await course.create({
            course_name,
            course_description,
            video_name,
            video_file,
            soal,
            jawaban_benar
            
        });
        const guru = await Guru.findOneAndUpdate({username},{$push:{course_id:Course._id}},{new:true});
       
        // const courseId = Object.assign(guru,Course._id)
      

            res.status(201).json({
                course_name : Course.course_name,
                course_description: Course.course_description,
                course_id: Course._id,
                video_name: Course.video_name,
                video_file:Course.video_file
            })
        
    }catch(error){
    console.log (error)
    res.status(400).send(error.message);
    }
}
   

//  if(Course && guru){
//      const courseId = Object.assign(guru,Course._id)
//      if(courseId){
//          guru.save();

//          res.status(201).json({
//              course_name : Course.course_name,
//              course_description: Course.course_description,
//             content: Course.content,
//             autthor: Course.author,
//             category: Course.category,
//             grades: Course.grades,
//             course_id: Course._id
//          })
//      }else{
//         res.status(400);
//         throw new Error(`failed create   data`)
//      }
//  }  else{
//     res.status(400);
//     throw new Error(`Invalid  data`)
// }


})