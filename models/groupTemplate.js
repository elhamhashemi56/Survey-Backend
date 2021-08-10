const mongoose = require("mongoose");
const { Schema } = mongoose;



const questionsSchema = new Schema(
    {
        questionText:String,
        hasAnswer:Boolean,
        hasComment:Boolean
    }
);

//****************************************************************** */

const groupsSchema = new Schema(
    {
        subHeader:String,
        questions:[questionsSchema]       
        
    }
);

//****************************************************************** */

const dummiesSchema = new Schema(
    {
        dummyLable:String,
        dummyType:String,
        dummyKey:String
    }
);

//****************************************************************** */
const GroupTemplateSchema = new Schema({
    title:String,
    dummies:[dummiesSchema],
    groups:[groupsSchema],      
    recommendation:Boolean
});

module.exports = mongoose.model("GroupTemplate", GroupTemplateSchema);