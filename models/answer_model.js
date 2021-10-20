const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  questionId:String,
  answer:Number,
  answerComment:String
  
});

const AnswerSchema = new Schema({
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survey",
      },
    answers:[QuestionSchema],
    
});
module.exports = mongoose.model("Answer", AnswerSchema);


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
  