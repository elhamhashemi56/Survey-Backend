const Answer=require("../models/answer_model")
const Survey=require("../models/survey_model")

const answer_postController=async (req,res,next)=>{

    try{
        

        const newAnswer = new Answer({
           survey:req.body.surveyId,
           answers:req.body.answers

          })
          const result = await newAnswer.save()
          res.status(200).send(result)

    }catch(error){

    }

}


const deleteSurvey = async (req, res) => {
    const id = req.params.surveyId
   
    try {
       
        const test=await Survey.findByIdAndDelete(id)
        console.log("test",test);
       
        await test.save();
        res.status(200).send()
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

}


module.exports={answer_postController,deleteSurvey} 

// const answer = {
//   survey: "6166a7db9f6887478f5a83a0",
//   answers: [
//       {
//           questionId: "61606e00f40c34df83b243cf",
//           answer: 2
//       },{
//           questionId: "61606e00f40c34df83b243d0",
//           answer: 4
//       }
//   ]
// }