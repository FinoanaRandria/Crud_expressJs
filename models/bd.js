const mongoose = require('mongoose');

const mdl = require('./models');

(async ()=>{
   
     try {
          await mongoose.connect("mongodb://localhost/Crud");
          console.log("connected with mongodb")
     } catch (error) {
        console.log(message.error)
     }

    
})()