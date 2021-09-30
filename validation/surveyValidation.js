const {check, oneOf } = require('express-validator');
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
//              :['TEMPLATE_QUESTION','TEMPLATE_GROUP']
//         },

//         dummies:{}
//     }
    
// );
// surveyTitle:String,
// surveys:[surveySchema],


// const validTemplate  = [oneOf([boolean1,boolean2],"errorMessage"), boolean3,boolean4,boolean5,boolean6 ]
// const validTemplate  = [(boolean1 or boolean2) && boolean3 && boolean4 && boolean5 && boolean6 ]


const validSurvey = [
    
    // oneOf([
    //     [
    //         check('surveys').isArray().not().isEmpty(),
    //         check('surveys.*.templateType').equals('TEMPLATE_QUESTION'),
    //         check('surveys.*.questionTemplate').not().isEmpty(),
            
    //     ],
    //     [   
            
    //         check('surveys').isArray().not().isEmpty(),
    //         check('surveys.*.templateType').equals('TEMPLATE_GROUP'),
    //         check("surveys.*.groupTemplate").not().isEmpty(),
    //     ]
    // ], "Please Fill Out All Fields"),
    
    check('surveys').isArray().not().isEmpty(),
    check('surveyTitle')
    .not().isEmpty().withMessage('title can not be empty').trim().escape(),



]

module.exports = validSurvey

