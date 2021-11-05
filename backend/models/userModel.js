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
        invoiceId :{
            type:String,
            unique:true,
            sparse: true,
            default : null
        },
        invoice_date:{
            type: Date,
            unique:true,
            sparse: true,
            default : null

        },
        invoice_status:{
            type:String,
            unique:true,
            sparse: true,
            default : null
        },
        payment_method:{
            type: String,
            unique:true,
            sparse: true,
            default : null
        },
        total_payment:{
            type: Number,
            unique:true,
            sparse: true,
            default : null
        }

    },
    course_enrollment:{
        date_enrollment:{
            type: Date,
            unique:true,
            sparse: true,
            default : null
        },
        date_of_completion:{
            type: Date,
            unique:true,
            sparse: true,
            default : null
        },
        course_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            sparse: true,
            default : null
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