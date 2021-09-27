/** Mongoose Modul importieren  */
const mongoose = require("mongoose");

/** simpler Adressstring: Protokoll ://  Host : Port / Datenbank  */
let addressString = process.env.mongo || "mongodb://localhost:27017/surveyDB";
let optionen = { useNewUrlParser: true, useUnifiedTopology: true };

const verbindeDB = () => {
    /** Verbindung für das Mongoose Modul herstellen mit connect */
    mongoose.connect(addressString, optionen).then( (mongooseModul) => {
        console.log("connected to SurveyDB");
        //console.log("Bin mit der Datenbank verbunden", mongooseModul);
    } ).catch( (error) => {
        console.error("error while trying to connect to MongoDB: "+error);
    } );
}

module.exports = verbindeDB;


