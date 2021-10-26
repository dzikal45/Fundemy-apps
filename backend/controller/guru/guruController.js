const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../utils/generateToken');
const Guru = require('../../models/guruModel');
var Crytpojs = require('crypto-js'); 
const{registerValidation,loginValidation} = require('../../validation');

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
    const { username} = req.body;
    const guru = await Guru.findOne({ username })

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