require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

/////////////////////////////////////////////////////////////////
 const userRouter = require("./routes/user_route");
 const templateRouter=require("./routes/template_route")
 const surveyRouter=require("./routes/survey_route")
 const answerRouter=require("./routes/answer_route")
 


//initialize express
const app = express();
app.use(express.static(path.join(__dirname, "../build")));


//DB connection
const verbindeDB = require("./mongo-db");
verbindeDB();


app.use(logger("dev"));
//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS Header Info
const corsHeader = require("./middleware/cors");
app.use(corsHeader);

//Routes
app.use("/user", userRouter);
app.use("/template", templateRouter);
app.use("/survey", surveyRouter);
app.use("/answer",answerRouter)



//Error Middleware needs to be last
//dead End

app.get('*',(req,res,next)=>{
    let errorPath=new Error('this path does not exist')
    errorPath.statusCode=404
    next(errorPath)
})
// unsere Fehler middleware:
app.use((error, req,res,next) => {
    // status im header setzen:
    res.status(error.statusCode)
    res.send({
      error: {
        status: error.statusCode,
        message: error.message
      }
    })
  })


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

//mit send or end req/res cycle ends!
module.exports = app;