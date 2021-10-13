const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnswerSchema = new Schema({
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survey",
      },
    answer:[String],
    
});
module.exports = mongoose.model("Answer", AnswerSchema);