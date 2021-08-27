const Survey=require('../models/survey_model')


// req.body={
    
//     "surveyTitle":"August Survey",
//     "surveys":[
//       {
//         "templateType":"TEMPLATE_QUESTION",
//         "template": "612407c4f1c31d2040f9f34c",
//         "dummies":{
//                     "teacher":"Nathali",
//                     "klass":"BW1",
//                     "Fach":"web Develop",
//                     "date":"01-01-2021"

//                     }
//       },
//       {
//        "templateType":"TEMPLATE_QUESTION",
//         "template": "612407c4f1c31d2040f9f34c",
//         "dummies":{
//                     "teacher":"Andre",
//                     "klass":"BW1",
//                     "Fach":"web Develop",
//                     "date":"01-01-2021"

//                     }
//       },
//       {
//         "templateType":"TEMPLATE_GROUP",
//         "template": "612403fc70087357b8a6b8c8",
//         "dummies":{
//                     "ausbildung":"Andre",
//                     "klasse":"BW1",
//                     "einrichtung":"web Develop",
//                     "datum":"01-01-2021"

//                     }
//       }
//     ]
   
//   }


const survey_PostController=async (req,res,next)=>{
    
      const newSurvey = new Survey({
        
        surveyTitle: req.body.surveyTitle,
        surveys: req.body.surveys,
        
      })
      const result = await newSurvey.save()
      res.send(result)

}

//************************************************************ */

const survey_GetController=async (req,res,next)=>{
    
    try {
       
          let newSurvey = await Survey.find();
          res.status(200).send(newSurvey)
       
      } catch (error) {
        res.status(500).send(error)
      }
}

module.exports={survey_PostController,survey_GetController}