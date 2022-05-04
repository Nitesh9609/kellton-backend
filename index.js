// Import Express
const express = require('express')
const mongoose = require('mongoose')
const apiroute = require('./routes/api_route')

// Initialize the application
const app = express()

// setup server port
const port = 8080
app.use(express.json())


// send message for your localhost
app.use('/', apiroute)

const url = "mongodb+srv://Nitesh9609:Nitesh9609@cluster0.fnrsx.mongodb.net/Kellton-Ecommerce?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser:true} )
.then(() =>{
    console.log('Database Connected')
}).catch(err => console.log(err))


// Launch the ecommerce backend app
app.listen(port, () =>{
    console.log(`running app on port: 'http://localhost:${port}/`)
})