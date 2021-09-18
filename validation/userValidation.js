
const {check} = require('express-validator');

    const validUser =[
        check('name')
        .not().isEmpty().withMessage('name can not be empty')
        // .isLength({min:2}).withMessage('name needs to have at least two characters')
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
        // check('password')
        // check('password')
        // .not().isEmpty().withMessage('pls enter your password')
        // .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1})
        // .withMessage('your password must have at least 8 characters and include 1 number')
        // .trim()
        // .escape(),
        check('password')
        .not().isEmpty().withMessage('pls enter your password')
        .isLength({min:8}).withMessage('your password must have at least 8 characters')
        .matches('[0-9]').withMessage('your password must include 1 number')
        .trim()
        .escape(),
    ]

    module.exports=validUser 

