const express = require('express');
const router = express.Router();
const admin=require('../middleware/admin')

const { userLogin,userPostController }=require('../controller/user_controller')


router
    .route('/')
    .post(admin,userPostController)
    
    
router.route('/login')
        .post(userLogin)




module.exports = router;
