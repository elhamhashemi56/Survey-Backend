const express = require('express');
const router = express.Router();

const { survey_PostController,survey_GetController }=require('../controller/survey_controller')


router
    .route('/')
    .post(survey_PostController)
    .get(survey_GetController)
    
// router
//      .route('/:templateType')
//      .post(survey_PostController)



module.exports = router;
