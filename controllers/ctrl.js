const {insert,collectData,deletes} = require('../models/bd');
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


exports.modifier = (req,res)=>{


}