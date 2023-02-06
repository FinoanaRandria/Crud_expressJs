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

const deletes = async(info)=>{
     await model.deleteOne({
          nom:info.nom,
          prenom:info.prenom,
          telephone:info.telephone
     })
}


const updates = async(info)=>{
   await model.findOneAndUpdate({
       _id : info.id,
   },{nom:info.nom,
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


module.exports={insert,collectData,deletes,updates}