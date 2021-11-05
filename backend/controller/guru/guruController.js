

const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../utils/generateToken');
const Guru = require('../../models/guruModel');
var Crytpojs = require('crypto-js'); 
const{registerValidation,loginValidation} = require('../../validation');
const db = require('../../connection/db');
const config = require('../../utils/config');
const firebase = require('firebase');
//const {firebase} = require('../../connection/db');  // reference to our db 
require('firebase/firebase-storage'); // must be required for this to 

const storage = firebase.storage().ref();

global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug



exports.authUser = expressAsyncHandler(async(req,res) => {
    
    const { username, password } = req.body

    const{error} = loginValidation(req.body);
    if(error)res.status(400).send(error.details[0].message);

    const guru = await Guru.findOne({ username })
    const hashedPassword = Crytpojs.AES.decrypt(
        guru.password,
        process.env.SECRET_KEY
    ).toString(Crytpojs.enc.Utf8);


    if(password == hashedPassword){

        res.json({
            _id: guru._id,
            name: guru.name,
            email: guru.email,
            username: guru.username,
            role: guru.role,
            token: generateToken.generate(guru._id)
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid username or password!')
    }
})

// @desc Register a new guru
// @route POST api/users/
// @access Public     

exports.registerUser = expressAsyncHandler(async(req,res) => {
    const { name, email, password, username } = req.body;
   const{error} = registerValidation(req.body);

   if(error)res.status(400).send(error.details[0].message);
   

    // res.json(nilai);
    const userExists = await Guru.findOne({ 
        $or: [
            {'username' :username},
            {'email':email}
        ]
    })
    
    if(userExists){
        res.status(400);
        throw new Error(`User has already exist `)
    }

    const role = 'guru';
    const guru = await Guru.create({
        name,
        email,
        password :Crytpojs.AES.encrypt(
            password,
            process.env.SECRET_KEY
        ).toString(),
        username,
        role
        // token: generateToken.generate(guru._id)

    })

    if(guru){
        res.status(201).json({
            _id: guru._id,
            name: guru.name,
            email: guru.email,
            username: guru.username,
            role: guru.role
            // token: generateToken.generate(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error(`Invalid user data`)
    }
})
exports.profileUser = expressAsyncHandler(async(req,res)=>{
    const { id} = req.user.id;
    const guru = await Guru.findOne({id })

    if(guru){
        res.status(201).json({
            _id: guru._id,
            name: guru.name,
            email: guru.email,
            username: guru.username,
            role: guru.role,
            course_id:  guru.course_id,
           

            // token: generateToken.generate(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error(`User doesnt exist`)
    }


})

exports.addSubject = expressAsyncHandler(async(req,res)=>{
  
        // Grab the file
        const file = req.file;
        if(!req.file) {
            res.status(400).send("Error: No files found")
    }else{

    
        //Format the filename
        try {
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
            
            res.send(downloadURL);
         }  catch (error) {
            console.log (error)
            res.status(400).send(error.message);
        }
    }
})