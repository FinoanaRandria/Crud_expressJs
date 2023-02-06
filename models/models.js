const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({
    
    nom:String,
    prenom:String,
    telephone:Number
    

})

const model = mongoose.model("infoPersonne", modelSchema);

module.exports =model