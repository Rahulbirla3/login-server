const express = require('express');
const { postTaskDataController, updateTaskvalueController, deleteTaskValueController, getTaskDataController } = require('../controller/taskController');


// Router Object
const router = express.Router();


router.get("/getTask" , getTaskDataController );
router.post("/addTask" , postTaskDataController );
router.put("/updateTask/:id" , updateTaskvalueController );
router.delete("/deleteTask/:id" , deleteTaskValueController );

module.exports = router;