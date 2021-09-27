
const {check} = require('express-validator');

    const validUser =[
        check('name')
        .not().isEmpty().withMessage('name can not be empty')
        .isAlpha().withMessage('name can only include letters without special characters')
        .trim()
        .escape(),
        check('email')
        // check if the string is an email.
        .isEmail().withMessage('pls enter a valid email')
        .not().isEmpty().withMessage('pls enter a valid email')
        .trim()
        .escape()
        .normalizeEmail(),
        check('password')
        .not().isEmpty().withMessage('pls enter your password')
        .isLength({min:8}).withMessage('your password must have at least 8 characters')
        .matches('[0-9]').withMessage('your password must include 1 number')
        .trim()
        .escape(),
    ]

    module.exports=validUser 

