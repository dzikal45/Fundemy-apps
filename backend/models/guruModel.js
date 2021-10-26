// import bcrypt from 'bcryptjs'
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('bson');
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
    course_id:{
        type: ObjectId,
        unique: true
    },
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