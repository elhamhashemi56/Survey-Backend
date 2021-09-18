
const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin')
const { userLogin, userPostController } = require('../controller/user_controller')
const valid = require("../middleware/valid")
const validUser = require("../validation/userValidation")


router
    .route('/')
    .post(admin,validUser,valid, userPostController)
    
router
    .route('/login')
    .post(userLogin)
module.exports = router;