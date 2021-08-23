const express = require('express');
const router = express.Router();

const { survey_PostController }=require('../controller/survey_controller')


router
    .route('/')
    .post(survey_PostController)
    




module.exports = router;
