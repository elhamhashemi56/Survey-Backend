const express = require('express');
const router = express.Router();

const { template_PostController,templateType_GetController,template_GetController }=require('../controller/template_controller')


router
    .route('/')
    .post(template_PostController)
    .get(template_GetController)
    

router
    .route('/:templateType')
    .get(templateType_GetController)


module.exports = router;
