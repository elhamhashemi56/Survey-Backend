const mongoose = require("mongoose");
const { Schema } = mongoose;



const questionSchema = new Schema(
    {
        questionText:String,
        hasAnswer:Boolean,
        hasComment:Boolean
    }
);

//*********************************************** */
const groupSchema = new Schema(
    {
        subHeader:String,
        questions:[questionSchema]
    }
);

//*********************************************** */
const dummySchema = new Schema(
    {
    dummyLable:String,
    dummyType:String,
    dummyKey:String
    }
);

//*********************************************** */
const GroupTemplateSchema = new Schema({
    title:String,
    dummies:[dummySchema],
    groups:[groupSchema],
    recommendation:Boolean
});

module.exports = mongoose.model("GroupTemplate", GroupTemplateSchema);