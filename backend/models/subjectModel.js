const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { text } = require('express');
const { bool } = require('joi');

const subjectSchema = mongoose.Schema({
    course_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    subject_name:{
        type: String,
        required: true,
    },
    subject_description:{
        type: Text,
        required: true,
    },
    course_video:{
        video_name:{
            type: String,
            sparse: true
        },
        video_file:{
            type: String,
            sparse:true
        }
    },
    quiz:{
        soal:{
            type: Text,
            sparse:true
        },
        jawaban:{
            type:String,
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
        statu_lulus:{
            type: bool,
        }
    }
})