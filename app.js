require('dotenv').config({path : 'backend/db/config.env'})
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')



app.use(express.json())
app.use(cors('http://localhost:5000/'))


//Routes
const user = require('./routes/userRoute')
app.use('/api/hack', user)

app.use(express.static(path.join(__dirname , './hack/build')))

app.get("*" , (req , res ) => {
    res.sendFile(path.resolve(__dirname , './hack/build/index.html'))
})


module.exports= app