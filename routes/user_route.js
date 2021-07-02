const express = require('express');
const router = express.Router();

const { userEinloggen,userPostController }=require('../controller/user-controller')


router
    .route('/')
    .post(userPostController)
    
router.route('/login')
        .post(userEinloggen)



module.exports = router;
