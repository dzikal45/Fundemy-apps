// import Mongoose  from "mongoose"
// import bcrypt from 'bcryptjs'
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('bson');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    invoice: {
        invoice_id :{
            type:String,
            unique: true
        },
        invoice_date:{
            type: Date,

        },
        invoice_status:{
            type:String
        },
        payment_method:{
            type: String
        },
        total_payment:{
            type: Number
        }

    },
    course_enrollment:{
        date_enrollment:{
            type: Date
        },
        date_of_completion:{
            type: Date
        },
        course_id:{
            type: ObjectId
        }
    },
    role:{
        type: String,
        require: true
    },

}, {
    timestamps: true
});





userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
};

module.exports = mongoose.model('userRegister',userSchema);



// export default User.js;