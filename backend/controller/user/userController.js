// import expressAsyncHandler from "express-async-handler";
// import generateToken from "../utils/generateToken.js";
// import User from "../models/userModel.js";

const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../utils/generateToken');
const User = require('../../models/userModel');
const bcrypt = require('bcryptjs');
var Crytpojs = require('crypto-js'); 
const{registerValidation,loginValidation} = require('../../validation');



// @desc Auth user & get Token
// @route POST api/users/login
// @access Public routes 
 exports.authUser = expressAsyncHandler(async(req,res) => {
    
    const { username, password } = req.body

    const{error} = loginValidation(req.body);
    if(error)res.status(400).send(error.details[0].message);

    const user = await User.findOne({ username })
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
    const { id} = req.user.id;
    


    const user = await User.findOne({ id })

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
// module.exports = [registerUser,authUser];