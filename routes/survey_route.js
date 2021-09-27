const express = require('express');
const router = express.Router();
const valid = require("../middleware/valid")
const validSurvey = require("../validation/surveyValidation")

const { survey_PostController,survey_GetController }=require('../controller/survey_controller')


router
    .route('/')
    .post(validSurvey,valid,survey_PostController)
    .get(survey_GetController)
    
module.exports = router;
