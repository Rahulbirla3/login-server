const express = require('express');
const { checkUserLoginController, registerAllUserController } = require('../controller/userController');


// router Object
const router = express.Router();

// get the login value
router.get("/login", checkUserLoginController);
router.post("/register", registerAllUserController);


module.exports = router;