const express = require('express');
const { postTaskDataController, updateTaskvalueController, deleteTaskValueController, getTaskDataController } = require('../controller/taskController');
const blog_middleware = require('../middleware/blog_middleware');


// Router Object
const router = express.Router();


router.get("/getTask", blog_middleware , getTaskDataController);
router.post("/addTask", blog_middleware, postTaskDataController);
router.put("/updateTask/:id" , blog_middleware , updateTaskvalueController);
router.delete("/deleteTask/:id" , blog_middleware , deleteTaskValueController);

module.exports = router;