const express = require('express');
var cors = require('cors')
const app = express()
app.use(express.json());

const db = require('../database/db')
app.use(cors())

//Routers
const adminRouter = require('../routers/adminRouter')
const orderRouter = require('../routers/orderRouter')

app.use(adminRouter)
app.use(orderRouter)

app.get('/', (req,res) => {
    res.send('Server up')
})
//Set 404
app.get('*', (req, res) => {
    console.log('404')
    res.status(404).send()
})

// Run the server
app.listen(3000, () => {
    console.log('Server is running on port : 3000')
})


