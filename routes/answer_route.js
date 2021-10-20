const express = require('express');
const router = express.Router();



const {answer_postController }=require('../controller/answer_controller')



router
    .route("/")
    .post(answer_postController)


module.exports = router;


