const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskId: Number,
    taskDescription: String,
    taskTimer: Number
})


const taskModel = new mongoose.model('taskModel', taskSchema);
module.exports = taskModel;

