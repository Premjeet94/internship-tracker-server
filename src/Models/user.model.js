import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:4,
        max:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:25,
    },
},{timestamps:true})

export const User = new mongoose.model("User",UserSchema)