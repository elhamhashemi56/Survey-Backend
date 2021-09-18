const express = require('express');
const router = express.Router();
const {check,oneOf} = require('express-validator');
const { template_PostController,template_GetController }=require('../controller/template_controller')
const valid = require("../middleware/valid")

const validTemplate=[
    oneOf([
      [

        check('subHeader')
        .not().isEmpty().withMessage('pls enter Subheader')
        .trim()
        .escape(),
      
      ],
      check('templateType').equals('TEMPLATE_GROUP')
    ], "Please Fill Out All Fields Of Your Billing Address"),
    check('title')
        .not().isEmpty().withMessage('name can not be empty')
        .trim()
        .escape(),
        
        check('dummyFields')
        .not().isEmpty().withMessage('pls enter dummy lable')
        .trim()
        .escape(),
       
        check('questions')
        .not().isEmpty().withMessage('pls enter question Text')
        .trim()
        .escape(),
       
  ]
 

router
    .route('/')
    .post(validTemplate,valid,template_PostController)
    
    

router
    .route('/:templateType')
    .get(template_GetController)

//#################################################################################


module.exports = router;
