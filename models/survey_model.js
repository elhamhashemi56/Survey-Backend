const mongoose = require("mongoose");
const { Schema } = mongoose;


const surveySchema = new Schema(
    {
        groupTemplate:{
            type: Schema.Types.ObjectId,
            ref:'groupTemplate'
         },

        questionTemplate:{
         type: Schema.Types.ObjectId,
         ref:'questionTemplate'
         },

         templateType:{
             type:String,
             enum:['group','single']
         },

        dummies:{}
    }
    
);


const SurveyGroupSchema = new Schema({
    surveyTitle:String,
    surveys:[surveySchema]
});

module.exports = mongoose.model("Survey", SurveyGroupSchema);