const express = require('express');
const router = express.Router();



const { answer_PostController }=require('../controller/answer_controller')



router
    .route("/vote/:surveyId")
    .post(answer_PostController)


module.exports = router;
