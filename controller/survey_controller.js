
const Survey = require('../models/survey_model')

// req.body={

//     "surveyTitle":"August Survey",
//     "surveys":[
//       {
//         "templateType":"TEMPLATE_QUESTION",
//         "questionTemplate": "612407c4f1c31d2040f9f34c",
//         "dummies":{
//                     "lehrer":"Nathalie",
//                     "klasse":"BW1",
//                     "fach":"Web Development",
//                     "datum":"01-01-2021"

//                     }
//       },
//       {
//        "templateType":"TEMPLATE_QUESTION",
//         "questionTemplate": "612407c4f1c31d2040f9f34c",
//         "dummies":{
//                     "lehrer":"Andre",
//                     "klasse":"BW1",
//                     "fach":"Web Development",
//                     "datum":"01-01-2021"

//                     }
//       },
//       {
//         "templateType":"TEMPLATE_GROUP",
//         "groupTemplate": "612403fc70087357b8a6b8c8",
//         "dummies":{
//                     "ausbildung":"Andre",
//                     "klasse":"BW1",
//                     "einrichtung":"Web Development",
//                     "datum":"01-01-2021"

//                     }
//       }
//     ]

//   }


const survey_PostController = async (req, res, next) => {
  try {

    //################### Survey validation
    for(const survey of req.body.surveys){
      if(survey.templateType === 'TEMPLATE_QUESTION' && !survey.questionTemplate)
          return  res.status(400).send('template not selected.')
      if(survey.templateType === 'TEMPLATE_GROUP' && !survey.groupTemplate)
          return  res.status(400).send('template not selected.') 
    }
    //################### Survey validation

    const newSurvey = new Survey({
      surveyTitle: req.body.surveyTitle,
      surveys: req.body.surveys,
      expireTime: req.body.expireTime

    })
    const result = await newSurvey.save();
    res.status(200).send({ ...result, link: "http://localhost:3000/vote/" + result._id })
  } catch (error) {
    res.status(500).send(error)
  }
}

//************************************************************ */

const survey_GetController = async (req, res, next) => {

  try {

    let newSurvey = await Survey.find();
    res.status(200).send(newSurvey)

  } catch (error) {
    res.status(500).send(error)
  }
}

//************************************************************ */
const getSurveyById= async(req,res)=>{

  const id=req.params.surveyId
  try {
    const surveyWithId = await Survey.findById(id).populate('surveys.questionTemplate')
    res.status(200).send(surveyWithId)
  } catch (error) {
    res.status(400).send(error)
  }
        
}

module.exports = { survey_PostController, survey_GetController,getSurveyById }











// const id=req.params.surveyId;
    // try{
    //   const survey = await Survey.findById(id)
    //   res.status(200).send(survey)

    // }catch(error){
    //   res.status(400).send(error)
    // }

    // const survey = await Survey.findById(req.params.surveyId).populate("surveys.questionTemplate")
    // if (survey)
    //     return res.send(survey)
    // else res.status(404).send()