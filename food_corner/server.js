const port = process.env.PORT || 3454


const express = require('express') 
const app = express() 
app.use(express.static('dist'))
// start the server
app.listen(port, () => console.log(`Listening on port ${port}`))
