const {check,oneOf} = require('express-validator');

//     title:String,
//     templateType:question,
//     dummyFields:[dummiesSchema],
//     questions:[questionsSchema]

//     title:String,
//     templateType:group,
//     dummyFields:[dummiesSchema],
//     groups:[groupsSchema],

// const validTemplate  = [oneOf([boolean1,boolean2],"errorMessage"), boolean3,boolean4,boolean5,boolean6 ]
// const validTemplate  = [(boolean1 or boolean2) && boolean3 && boolean4 && boolean5 && boolean6 ]


const validTemplate = [
    oneOf([
        [
            check('templateType').equals('TEMPLATE_GROUP'),
            check('groups').isArray(),
            check('groups.*.subHeader').not().isEmpty().withMessage('please enter a subheader'),
            check('groups.*.questions').isArray(),
            check("groups.*.questions.*.questionText").not().isEmpty().withMessage('please enter a question'),
           
        ],
        [
            check('templateType').equals('TEMPLATE_QUESTION'),
            check('questions').isArray(),
            check("questions.*.questionText").not().isEmpty().withMessage('please enter a question'),
            
        ]
    ], "Please Fill Out All Fields"),
    check('title')
    .not().isEmpty().withMessage('title can not be empty').trim().escape(),
    
    check('dummyFields').isArray({min:1}),
    check('dummyFields.*.dummyLable').not().isEmpty().withMessage('dummy lable can not be empty'),
    check('dummyFields.*.dummyKey').not().isEmpty().withMessage('dummy key can not be empty'),
    check('dummyFields.*.dummyType').not().isEmpty().withMessage('dummy type can not be empty'),

]
module.exports = validTemplate

