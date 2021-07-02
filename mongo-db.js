/** Mongoose Modul importieren  */
const mongoose = require("mongoose");

/** simpler Adressstring: Protokoll ://  Host : Port / Datenbank  */
let addressString = process.env.mongo || "mongodb://localhost:27017/surveyDB";
let optionen = { useNewUrlParser: true, useUnifiedTopology: true };

const verbindeDB = () => {
    /** Verbindung für das Mongoose Modul herstellen mit connect */
    mongoose.connect(addressString, optionen).then( (mongooseModul) => {
        console.log("mit SurveyDB verbunden");
        //console.log("Bin mit der Datenbank verbunden", mongooseModul);
    } ).catch( (fehler) => {
        console.error("Fehler mit MongoDB: "+fehler);
    } );
}

module.exports = verbindeDB;


