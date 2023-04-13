const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:String,
    password:String
}, { timestamps: true })

const userModel = new mongoose.model('User' , userSchema);

module.exports = userModel;
