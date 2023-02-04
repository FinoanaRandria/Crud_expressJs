const express = require('express')
const bodyparser = require('body-parser')
const {insert} = require('./models/bd')
const app = express()
const port = 4333


app.use(bodyparser.json())
app.use(bodyparser.urlencoded())
app.use("/css",express.static('./public'))
app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.post("/add",(req,res)=>{
    const info = req.body
    insert(info)
    res.end()
    console.log(info)
})


app.listen(port,console.log(`Server is runing on ${port}`))