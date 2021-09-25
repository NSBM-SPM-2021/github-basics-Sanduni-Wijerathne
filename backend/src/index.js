const express = require('express');

const app = express()
app.use(express.json());

const db = require('../database/db')

//Routers
const adminRouter = require('../routers/adminRouter')
const orderRouter = require('../routers/orderRouter')

app.use(adminRouter)
app.use(orderRouter)

//Set 404
app.get('*', (req, res) => {
    res.status(404).send()
})

// Run the server
app.listen(3000, () => {
    console.log('Server is running on port : 3000')
})


