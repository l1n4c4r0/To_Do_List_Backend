const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
const port = 3005
app.set('port', port)

app.get('/',(req, res)=> {
    res.send('Hola Mundo')
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to db'))
.catch((err)=> console.error(err))

app.listen(port, ()=>{
    console.log('Listening on port'+ port)
})
