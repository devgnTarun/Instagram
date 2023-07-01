require('dotenv').config({path : 'backend/db/config.env'})
const app = require('./app')
const connectToMongo = require('./db/db')
const mongoose = require('mongoose')


const PORT = process.env.DB_PORT

connectToMongo()

app.listen(PORT , () => {
    console.log(`server live on port ${PORT}`)
})