
const Survey=require('../models/survey_model')
const QuestionTemplate=require('../models/questionTemplate_model')


// req.body={
    
//     "surveyTitle":"August Survey",
//     "surveys":[
//       {
//         "templateType":"TEMPLATE_QUESTION",
//         "questionTemplate": "612407c4f1c31d2040f9f34c",
//         "dummies":{
//                     "teacher":"Nathali",
//                     "klass":"BW1",
//                     "Fach":"web Develop",
//                     "date":"01-01-2021"

//                     }
//       },
//       {
//        "templateType":"TEMPLATE_QUESTION",
//         "questionTemplate": "612407c4f1c31d2040f9f34c",
//         "dummies":{
//                     "teacher":"Andre",
//                     "klass":"BW1",
//                     "Fach":"web Develop",
//                     "date":"01-01-2021"

//                     }
//       },
//       {
//         "templateType":"TEMPLATE_GROUP",
//         "groupTemplate": "612403fc70087357b8a6b8c8",
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
        expireTime:req.body.expireTime
        
      })
      const result = await newSurvey.save()
      // res.send(result)
      res.send({...result,link:"http://localhost:5000/"+result._id})

    // try {
        
    //          const { templateType } = req.params;
    //         let testId =await QuestionTemplate.find({_id:templateType })
    //         console.log('testId',testId);
    //         let newSurvey =await Survey.create({
    //             surveyTitle: req.body.surveyTitle,
    //             surveys: req.body.surveys,
    //             surveys:{
    //                 questionTemplate:testId[0]._id
    //              }
    //             // questionTemplate: testId._id
                
    //         })
    //        res.send(newSurvey)

      
       
    // }catch(error){
    //     res.status(500).send(error)

    // }
      

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