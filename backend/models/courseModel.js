// import { ObjectId } from "bson";
// import { Mongoose } from "mongoose";
const Mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { bool, boolean } = require('joi');
const courseSchema = Mongoose.Schema({
    course_name:{
        type: String,
        unique: true,
        required: true
    },
    course_description:{
        type: String,
        required: true
    },
    
    course_video:[{
        video_name:{
            type: String,
            sparse: true
        },
        video_file:{
            type: String,
            sparse:true
        },
    }],
    
    quiz:[{
        soal:{
            type: String,
            sparse:true
        },
        jawaban_benar:{
            type:String ,
            sparse:true
        },
        score:{
            type:Number,
            sparse:true
        },
        status_lulus:{
            type: Boolean,
            sparse:true
            
        },
    }],
    review:[{
    
   
    
        
            review_content:{
                type: String,
                
                sparse: true,
                
            },
            rating:{
                type: Number,
    
                sparse: true,

                default : null
            },
            user_id:[{
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'userRegister',
                sparse: true,
               
            }],
    }]
    
},
{
    timestamps: true
});

module.exports = Mongoose.model('Course',courseSchema);