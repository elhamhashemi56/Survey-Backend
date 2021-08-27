const express = require('express');
const router = express.Router();

const { template_PostController,template_GetController }=require('../controller/template_controller')


router
    .route('/')
    .post(template_PostController)
    
    

router
    .route('/:templateType')
    .get(template_GetController)


module.exports = router;
