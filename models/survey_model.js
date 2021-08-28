const mongoose = require("mongoose");
const { Schema } = mongoose;


const surveySchema = new Schema(
    {
        groupTemplate:{
            type: Schema.Types.ObjectId,
            ref:'groupTemplate_model'
        },

        questionTemplate:{
         type: Schema.Types.ObjectId,
         ref:'questionTemplate_model'
        },

         templateType:{
             type:String,
             enum:['TEMPLATE_QUESTION','TEMPLATE_GROUP']
        },

        dummies:{}
    }
    
);


const SurveyGroupSchema = new Schema({
    surveyTitle:String,
    surveys:[surveySchema],
   
   
});

module.exports = mongoose.model("Survey", SurveyGroupSchema);