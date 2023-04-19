const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:String,
    password:String,
    tasks : [
        {
        type: mongoose.Types.ObjectId,
        ref: "taskModel",
        }
    ]
}, { timestamps: true })

const userModel = new mongoose.model('User' , userSchema);

module.exports = userModel;
