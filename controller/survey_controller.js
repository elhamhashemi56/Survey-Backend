
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
    const newSurvey = new Survey({

      surveyTitle: req.body.surveyTitle,
      surveys: req.body.surveys,
      expireTime: req.body.expireTime

    })
    const result = await newSurvey.save();
    res.status(200).send({ ...result, link: "http://localhost:3000/" + result._id })
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

module.exports = { survey_PostController, survey_GetController }