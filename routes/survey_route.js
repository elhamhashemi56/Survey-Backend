const express = require('express');
const router = express.Router();
const valid = require("../middleware/valid")


const { survey_PostController,survey_GetController,getSurveyById,deleteSurvey }=require('../controller/survey_controller')


router
    .route('/')
    .post(valid,survey_PostController)
    .get(survey_GetController)

router
    .route("/vote/:surveyId")
    .get(getSurveyById)

router
    .route("/:surveyId/:templateId")
    .delete(deleteSurvey)
    
module.exports = router;
