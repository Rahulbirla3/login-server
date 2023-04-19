const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskId: Number,
    taskDescription: String,
    taskTimer: Number,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: ["true" , "user id is required"]
    }
})


const taskModel = new mongoose.model('taskModel', taskSchema);
module.exports = taskModel;

