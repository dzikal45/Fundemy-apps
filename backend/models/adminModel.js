import { Mongoose } from "mongoose";

const adminSchema = mongoose.Schema({
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
    role:{
        type: String,
        require: true
    },
  
},
{
    timestamps: true
});
module.exports = Mongoose.model('Admin',adminSchema);