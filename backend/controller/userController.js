import expressAsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";


// @desc Auth user & get Token
// @route POST api/users/login
// @access Public routes 
const authUser = expressAsyncHandler(async(req,res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id)
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

const registerUser = expressAsyncHandler(async(req,res) => {
    const { name, email, password, username } = req.body

    const userExists = await User.findOne({ username })

    if(userExists){
        res.status(400);
        throw new Error('User has already exist')
    }

    const user = await User.create({
        name,
        email,
        password,
        username
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error(`Invalid user data`)
    }
})