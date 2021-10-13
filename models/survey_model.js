const mongoose = require("mongoose");
const { Schema } = mongoose;


const surveySchema = new Schema(
    {
        groupTemplate:{
            type: Schema.Types.ObjectId,
            ref:'GroupTemplate'
        },

        questionTemplate:{
         type: Schema.Types.ObjectId,
         ref:'QuestionTemplate'
        },

         templateType:{
             type:String,
             enum:['TEMPLATE_QUESTION','TEMPLATE_GROUP']
        },

        dummies:{}
    }
    
);


const SurveyGroupSchema = new Schema({
    
    surveys:[surveySchema],
    expireTime:{
        type:Number,
        enum:[24,48,72,96,120,144,168]
    }
   
},{timestamps:{createdAt:true,updatedAt:false}});

module.exports = mongoose.model("Survey", SurveyGroupSchema);