const { validationResult } = require('express-validator')
const validDataChecker = (req, res, next) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log('error',errors);
            return res.status(422).json({
                validationError: errors.array(),
                
               
            })
        }else{
            next()
        }
      
    }catch(error){
        return res.status(400).send('User could not be logged in.')
    }
}
module.exports = validDataChecker