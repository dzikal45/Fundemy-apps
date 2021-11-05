// import { ObjectId } from "bson";
// import { Mongoose } from "mongoose";
const Mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const courseSchema = Mongoose.Schema({
    course_name:{
        type: String,
        required: true
    },
    course_description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    grades:{
        type: String,
        required: true
    },
    
        review:{
            review_content:{
                type: String,
                
                sparse: true,
                
            },
            rating:{
                type: Number,
    
                sparse: true,

                default : null
            },
            user_id:{
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'userRegister',
                sparse: true,
               
            },
        },
    
},
{
    timestamps: true
});

module.exports = Mongoose.model('Course',courseSchema);