const {insert,collectData,deletes,updates} = require('../models/bd');
/* pour recupeer le valeur de la promesse */
exports.racine=  async(req,res)=>{
const data = await collectData()
     console.log(data)
    res.render('index')
}


exports.ajouter = (req,res)=>{
    const info = req.body
    insert(info)
    res.end()
    console.log(info)
}


exports.supprimer = (req,res)=>{
   const info = req.body
    deletes(info)
    res.end()
    
}


exports.modifier = async(req,res)=>{
   const info = req.body
   const data = await collectData()
     
   
    for(eltms of data){
        if(eltms._id=== info.id){
            updates(info)
        }
    }
    console.log(data)
    res.end()

}