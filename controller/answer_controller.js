const Answer=require("../models/answer_model")
const Survey=require("../models/survey_model")

const answer_postController=async (req,res,next)=>{

    const id=req.params.surveyId

    try{
        const surveyWithId=await Survey.findById(id).populate('surveys.questionTemplate').populate('surveys.groupTemplate')
        console.log(surveyWithId);

    }catch(erorr){

    }

}

module.exports(answer_postController) 