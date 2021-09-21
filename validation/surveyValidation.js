const {check,oneOf} = require('express-validator');
// const surveySchema = new Schema(
//     {
//         groupTemplate:{
//             type: Schema.Types.ObjectId,
//             ref:'groupTemplate_model'
//         },

//         questionTemplate:{
//          type: Schema.Types.ObjectId,
//          ref:'questionTemplate_model'
//         },

//          templateType:{
//              type:String,
//              enum:['TEMPLATE_QUESTION','TEMPLATE_GROUP']
//         },

//         dummies:{}
//     }
    
// );
// surveyTitle:String,
// surveys:[surveySchema],


// const validTemplate  = [oneOf([boolean1,boolean2],"errorMessage"), boolean3,boolean4,boolean5,boolean6 ]
// const validTemplate  = [(boolean1 or boolean2) && boolean3 && boolean4 && boolean5 && boolean6 ]


const validSurvey = [
    
    oneOf([
        [
            check('surveys').isArray(),
            check('surveys.*.templateType.enum').equals('TEMPLATE_GROUP'),
            check('surveys.*.questionTemplate.type').not().isEmpty().withMessage('please enter a questionTemplate'),
            
        ],
        [   
            
            check('surveys').isArray(),
            check('surveys.*.templateType.enum').equals('TEMPLATE_QUESTION'),
            check("surveys.*.groupTemplate.type").not().isEmpty().withMessage('please enter a groupTemplate'),
        ]
    ], "Please Fill Out All Fields"),

    check('surveyTitle')
    .not().isEmpty().withMessage('title can not be empty').trim().escape(),

    // check('surveys').isArray(),
    // check('surveys.*.dummies[dummyKey]').not().isEmpty().withMessage('dummy key can not be empty'),

]

module.exports = validSurvey

