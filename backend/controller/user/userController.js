// import expressAsyncHandler from "express-async-handler";
// import generateToken from "../utils/generateToken.js";
// import User from "../models/userModel.js";

const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../utils/generateToken');
const User = require('../../models/userModel');
const course = require('../../models/courseModel')

var Crytpojs = require('crypto-js'); 
const{registerValidation,loginValidation,deleteCourseValidation,enrollCourse} = require('../../validation');
const uuid = require('uuid');
const db = require('../../connection/db');
const firebase = require('firebase');
const e = require('express');

require('firebase/firebase-storage'); // must be required for this to 

const storage = firebase.storage().ref();

global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug
// @desc Auth user & get Token
// @route POST api/users/login
// @access Public routes 
 exports.authUser = expressAsyncHandler(async(req,res) => {
    
    const { username, password } = req.body;
  
    // res.send(req.body)

    const{error} = loginValidation(req.body);
    if(error)res.status(400).send(error.details[0].message);


    const user = await User.findOne({ username})
    const hashedPassword = Crytpojs.AES.decrypt(
        user.password,
        process.env.SECRET_KEY
    ).toString(Crytpojs.enc.Utf8);


    if(password == hashedPassword){

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            role: user.role,
            token: generateToken.generate(user._id,user.role,user.username)
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid username or password!')
    }
})

// @desc Register a new user
// @route POST api/users/
// @access Public     

exports.registerUser = expressAsyncHandler(async(req,res) => {
    const { name, email, password, username } = req.body;
   const{error} = registerValidation(req.body);

   if(error)res.status(400).send(error.details[0].message);
   

    // res.json(nilai);
    const userExists = await User.findOne({ 
        $or: [
            {'username' :username},
            {'email':email}
        ]
    })
    
    if(userExists){
        res.status(400);
        throw new Error(`User has already exist `)
    }

    const role = 'siswa';
    
    const user = await User.create({
        name,
        email,
        password :Crytpojs.AES.encrypt(
            password,
            process.env.SECRET_KEY
        ).toString(),
        username,
        role
        // token: generateToken.generate(user._id)

    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            role: user.role
            // token: generateToken.generate(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error(`Invalid user data`)
    }
})
exports.profileUser = expressAsyncHandler(async(req,res)=>{
    // res.send(req.user)
    const  id = req.user.id;
    


    const user = await User.findOne({_id: id })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            role: user.role,
            invoice:  user.invoice,
            enrollment: user. course_enrollment

            // token: generateToken.generate(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error(`User doesnt exist`)
    }


})



exports.uploadPembayaran = expressAsyncHandler(async(req,res)=>{
    const id = req.user.id;
    const {total_payment,subscribe}= req.body;
    // res.send(total_payment);
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
                  const imageRef = storage.child(`bukti_pembayaran/${req.user.username}/`+fileName);
                  const metadata = {
                      contentType: req.file.mimetype
                  }
                  
                  
                  const user = await User.findOne({_id:id});

                  
                  // Step 2. Upload the file in the bucket storage
                  const snapshot = await imageRef.put(file.buffer,metadata);
                 // setTimeout(snapshot,60000);
                  // Step 3. Grab the public url
                  const downloadURL = await snapshot.ref.getDownloadURL();
            
         const Pesanan = {
                    invoiceId: uuid.v4(),
                    invoiceFile: downloadURL,
                    invoice_date: Date.now(),
                    invoice_status: "pending",
                    total_payment: total_payment,
                    subscribe: subscribe
                }

        // res.send(Pesanan);
        
        user.pesanan.push(Pesanan);
        await user.save();
        
        res.status(201).json(user.pesanan)
           

        }catch(err){
            console.log (err)
    res.status(400).send(err.message);
        }
        
    }
})

exports.getPembayaranPending = expressAsyncHandler(async(req,res)=>{
    const id = req.user.id
        try{

            const Pembayaran = await User.findOne({_id:id});
            const arr = Pembayaran.pesanan
            var newArr = [];
            for(i=0;i<arr.length;i++){
                if(arr[i].invoice_status=="pending" ){
                    newArr.push(arr[i]);
                }
            }
            res.status(200).json(newArr);
        }catch(e){
            console.log (e)
            res.status(400).send(e.message);
        }
})

exports.getPembayaran = expressAsyncHandler(async(req,res)=>{
    const id = req.user.id;
    
    const user = await User.findById(id);
    if(user){

        res.status(200).json(user.pesanan)
    }else{
        res.status(400);
        throw new Error(`user not found`)
    }
})

exports.getPembayaranById = expressAsyncHandler(async(req,res)=>{
    const user_id = req.user.id;
    const _id = req.params.id
    try{

        const user = await User.findById(user_id);
        const arr = user.pesanan;
        // res.send(arr);
        const result = arr.find(function(element){
            return element._id == _id
        })
        res.status(200).json(result)
    }catch(e){
        console.log (e)
        res.status(400).send(e.message);
    }
})

exports.enrollCourse = expressAsyncHandler(async(req,res)=>{
    const user_id = req.user.id;
    const Course_id = req.body.course_id;
    const{error} = enrollCourse(req.body);
    if(error)res.status(400).send(error.details[0].message);
    try{

        const user = await User.findById(user_id);
        const Course = await course.findById(Course_id);
        const enroll ={
            
            
        }
        
        const newCourse = {
            date_enrollment: Date.now(),
        
            course_name:Course.course_name
        }
        // res.send(Course)

    
        user.course_enrollment.push(newCourse);
      
        user.course_id.push(Course._id);
        await user.save();
        
        res.status(201).json(user);
    }catch(e){
        console.log (e)
        res.status(400).send(e.message);
    }


})
exports.getCourseEnroll = expressAsyncHandler(async(req,res)=>{
    const id = req.user.id;
    try{
    
        const Course = await User.findById(id).populate('course_id');
        res.status(200).json({Course})
        console.log('retrieved list of course', Course.length, Course[0]);
    }catch(err){
        console.log (err)
        res.status(400);
        throw new Error(err);
    }
})

exports.checkActive = expressAsyncHandler(async(req,res)=>{
    const user_id = req.user.id;

    const user = await User.findById(user_id);

    const now = Date.now();

    if(user.activeBefore >= now && user.activeBefore != null){
        res.status(200).json({
            succes: true,
            message: "user is active"
        })
    }else{
        res.status(400);
        throw new Error('user not active');
    }

})

exports.getAllCourse = expressAsyncHandler(async(req,res)=>{
    const Course = await course.find();
    if(Course){
        res.status(200).json(Course);
    }else{
        res.status(400);
        throw new Error('there is no course available');
    }
})

exports.checkAnswer = expressAsyncHandler(async(req,res)=>{
    const user_id = req.user.id;
    const {course_id,jawaban,course_name} = req.body;
    const user = await User.findById(user_id);
    const arr = user.course_enrollment;
    const result = arr.find(function(element){
        return element.course_name == course_name;
    })
    const Course = await course.findById(course_id);


    if(jawaban == Course.quiz[0].jawaban_benar){
        Course.quiz[0].score = 100;
        Course.quiz[0].status_lulus = true;
        result.date_of_completion = Date.now();
        await user.save();

        await Course.save();
        res.status(200).json({
            succes:true,
            message:"selamat anda telah lulus",
            status:Course.quiz[0].status_lulus
        })

    }else{
        res.status(400);
        throw new Error('anda belum lulus');
    }



})
// module.exports = [registerUser,authUser];