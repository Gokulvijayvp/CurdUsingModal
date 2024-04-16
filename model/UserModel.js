const mongoose = require('mongoose')

const modal = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    age:Number,
    address:String,
    state:String,
    pincode:Number
})

const UserModal = mongoose.model('allusers',modal)
module.exports = UserModal
