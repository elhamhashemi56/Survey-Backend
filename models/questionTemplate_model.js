const mongoose = require("mongoose");
const { Schema } = mongoose;


const questionsSchema = new Schema(
    
        {
            questionText:String,
            hasAnswer:Boolean,
            hasComment:Boolean
        }
);
//************************************************************** */

const dummiesSchema = new Schema(
    {
        dummyLable:String,
        dummyType:String,
        dummyKey:String
    }
);

//************************************************************** */
const QuestionTemplateSchema = new Schema({
    title:String,
    templateType:String,
    dummyFields:[dummiesSchema],
    questions:[questionsSchema]
});

module.exports = mongoose.model("QuestionTemplate", QuestionTemplateSchema);