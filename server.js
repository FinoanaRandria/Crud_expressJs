const express = require('express');
const bodyparser = require('body-parser');

const routes =  require('./routes/routes');
const app = express()
const port = 4333


app.use(bodyparser.json())
app.use(bodyparser.urlencoded())
app.use("/css",express.static('./public'))
app.set('view engine', 'ejs')
/* pour recupeer le valeur de la promesse */

/* app.get('/',async(req,res)=>{
    
    const data = await collectData()
     console.log(data)
    res.render('index')
    
}) */
/* app.post("/add",(req,res)=>{
    const info = req.body
    insert(info)
    res.end()
    console.log(info)
}) */

app.use(routes)
app.listen(port,console.log(`Server is runing on ${port}`))