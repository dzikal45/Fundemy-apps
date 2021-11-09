// import bcrypt from 'bcryptjs'
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('bson');
const { string } = require('joi');
const guruSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    course_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        sparse: true,
    }],
    role:{
        type: String,
        require: true
    },
  
},
{
    timestamps: true
});
guruSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
};

module.exports = mongoose.model('Guru',guruSchema);