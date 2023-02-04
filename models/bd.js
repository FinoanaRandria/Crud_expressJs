const mongoose = require('mongoose');

const model = require('./models');

const collectData =  async()=>{
     const collectData = await model.find()
     return collectData
}


const insert = async(info)=>{
     await model.create({
          nom:info.nom,
          prenom:info.prenom,
          telephone:info.telephone

     })
}


(async ()=>{
   
     try {
          await mongoose.connect("mongodb://localhost/Crud");
          console.log("connected with mongodb")

          
         
     } catch (error) {
        console.log(message.error)
     }

    
})()


module.exports={insert,collectData}