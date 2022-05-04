// Import Express
let express = require('express')

// Initialize the application
let app = express()

//  setup server port
let port = 8080

// dend message for your localhost
app.get('/', (request,response) =>{
    response.send('Hello first ecommerce website response')
})

// Launch the ecommerce backeng app
app.listen(port, () =>{
    console.log(`running app on port: 'http://localhost:${port}/`)
})