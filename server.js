const express = require('express')

const app = express()
const port = 4333

app.use("/css",express.static('./public'))
app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,console.log(`Server is runing on ${port}`))