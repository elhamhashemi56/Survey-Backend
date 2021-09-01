const User = require("../models/user_model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//POST ************************************
const userPostController = async (req, res, next) => {
    try {
        const newUser = req.body
        // const errors = validationResult(req)
        // if (!errors.isEmpty()) {
        //     return res.status(422).json({
        //         validationError: errors.array()
        //     })
        // }
        let userAlready = await User.find({ email: newUser.email })
        if (userAlready.length >= 1) {
            return res.status(409).send('A user with this email adress already exists')
        }
        let passwordGehashed = await bcrypt.hash(newUser.password, 10)
        let createUser = await User.create({ ...newUser, password: passwordGehashed })
        res.status(201).send(createUser);
    } catch (error) {
        next(error)
    }
}


// Login ***********************************

const userLogin = async (req, res, next) => {
    let user = req.body
    let mailSmall = user.email
    try {
        let userfromDatabase = await User.findOne({ email: mailSmall })
        if (userfromDatabase === null) {
            return res.status(401).send('You are not registered. Pls sign up')
        }
        let comparePassword = await bcrypt.compare(user.password, userfromDatabase.password)
        if (comparePassword) {
            let token = jwt.sign({
                email: userfromDatabase.email,
                userId: userfromDatabase._id,
                name: userfromDatabase.name
            }, process.env.JWT, { expiresIn: '3h' });
            res.status(200).json({
                message: 'You are logged in',
                token: token,
                name: userfromDatabase.name
            })
        } else {
            res.status(401).send('Password is not valid.')
        }
    } catch (error) {
        res.status(401).send('You couldn`t be logged in. error from catch' + error);
    }
}
 




module.exports = {  userLogin,userPostController }
