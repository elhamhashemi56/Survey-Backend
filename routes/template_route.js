const express = require('express');
const router = express.Router();
const {check, oneOf} = require('express-validator');
const {template_PostController, template_GetController} = require('../controller/template_controller')
const valid = require("../middleware/valid")
const validTemplate = require("../validation/templateValidation")




router
    .route('/')
    .post(validTemplate, valid, template_PostController)


router
    .route('/:templateType')
    .get(template_GetController)


module.exports = router;
