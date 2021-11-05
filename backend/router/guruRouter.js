// import express from 'express';
const express = require('express');
const router = express.Router();
const guruController = require('../controller/guru/guruController');
const guruController2 = require('../controller/guru/guruCourseController');
const config = process.env;
const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './upload');
//         console.log(cb);
//     },
//     filename: function(req, file, cb){
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
    
// });
const fileFilter = (req, file, next)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        next(null, true);
    }else{
        next(new Error('Please only upload jpeg, jpg, and png'), false);
    }
};
const upload = multer({ storage: storage });

const {verifyToken,permit} = require("../middleware/auth");


router.get('/',(req,res)=>{
 res.send('online');
});
// user router
router.post('/register',guruController.registerUser);
router.post('/login', guruController.authUser);
router.get('/profile/:_id',permit("guru"),guruController.profileUser);
router.patch('/course',permit("guru"),guruController2.addCourse);
router.post('/upload',upload.single("file"),guruController.addSubject);

module.exports = router;
// export default UserRouter