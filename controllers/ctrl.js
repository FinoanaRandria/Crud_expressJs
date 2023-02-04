const {insert,collectData} = require('../models/bd');

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