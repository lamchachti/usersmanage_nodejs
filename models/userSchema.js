const mongoose = require('mongoose');

const Schema=mongoose.Schema

const userSchema= new Schema({
    firstname:String,
    firstfamilyname:String,
    secondfamilyname:String,
    birthday:Date,
    country:String,
    role:String,
    status:{ type: Boolean, default: true } 
})

const User=mongoose.model('User',userSchema)

module.exports=User