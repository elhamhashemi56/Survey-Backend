const QuestionTemplate=require('../models/questionTemplate_model')
const GroupTemplate=require('../models/groupTemplate_model')


    const template_PostController = async (req, res, next)=>{
      console.log('templateType',req.body.templateType); 
      const templateType=req.body.templateType
      if (templateType === 'TEMPLATE_QUESTION') {
        const newQuestionTemplate = new QuestionTemplate({
          templateType:templateType,
          title: req.body.title,
          dummyFields: req.body.dummyFields,
          questions: req.body.questions
        })
        const result = await newQuestionTemplate.save()
        res.send(result)

      }else if(templateType === 'TEMPLATE_GROUP'){
        const newGroupTemplate = new GroupTemplate({
          templateType:templateType,
          title: req.body.title,
          dummyFields: req.body.dummyFields,
          groups: req.body.groups,
          recommendation:req.body.recommendation
        })
        const result = await newGroupTemplate.save()
        res.send(result)
      }
  }

//******************************************************* */

const template_GetController = async (req, res, next)=>{
 
  try {
    const { templateType } = req.params;
    if (templateType === 'TEMPLATE_QUESTION') {
      let templateTypeQuestion = await QuestionTemplate.find();
      res.status(200).send(templateTypeQuestion)
    } else if (templateType === 'TEMPLATE_GROUP') {
      let templateTypeGroup = await GroupTemplate.find();
      res.status(200).send(templateTypeGroup)
    }
  } catch (error) {
    res.status(500).send(error)
  }

}

module.exports={template_PostController,template_GetController}


 

//******************************************************* */

    // req.body={
    //   "templateType":"TEMPLATE_GROUP",
    //   "title": "Group Template",
    //   "dummyFields": [
    //     {
    //       "dummyLable": "Ausbildung/Weiterbildung: ",
    //       "dummyType": "text",
    //       "dummyKey": "ausbildung"
    //     },
    //     {
    //       "dummyLable": "Klasse/Bezeichnung: ",
    //       "dummyType": "text",
    //       "dummyKey": "klasse"
    //     },
    //     {
    //       "dummyLable": "Einrichtung:  ",
    //       "dummyType": "text",
    //       "dummyKey": "einrichtung"
    //     },
    //     {
    //       "dummyLable": "Datum:  ",
    //       "dummyType": "text",
    //       "dummyKey": "datum"
    //     }
    //   ],
    //   "groups": [
    //     {
    //       "subHeader": "group 1",
    //       "questions": [
    //         {
    //           "questionText": "asdfasdf asdfasdf",
    //           "hasAnswer": true
    //         }
    //       ]
    //     }, {
    //       "subHeader": "group 2",
    //       "questions": [
    //         {
    //           "questionText": "asdf asfasdf asdf sd",
    //           "hasComment": true
    //         }, {
    //           "questionText": "asdfasd fasdfsd",
    //           "hasAnswer": true
    //         }
    //       ]
    //     }
    //   ]
    // }   

//*************************************************************************+ */
    // req.body={

    //       "templateType":"TEMPLATE_QUESTION",
    //       "title": "Question Template",

    //       "dummyFields": [
    //         {
    //           "dummyLable": "Teacher : ",
    //           "dummyType": "text",
    //           "dummyKey": "teacher"
    //         },
    //         {
    //           "dummyLable": "Klasse: ",
    //           "dummyType": "text",
    //           "dummyKey": "klasse"
    //         },
    //       ],
      
    //       "questions": [
    //             {
    //               "questionText": "q1",
    //               "hasAnswer": true
    //             },
    //             {
    //               "questionText": "q2",
    //               "hasComment": true
    //             }
    //           ]
          
    //     }

