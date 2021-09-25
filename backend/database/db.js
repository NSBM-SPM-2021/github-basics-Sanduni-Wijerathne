const mongoose = require('mongoose');

try {
    dbCon = mongoose.connect("mongodb+srv://sanduni:sanduni@foodcorner.y6xth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});
} catch (error) {
    console.log(error)
}


module.exports = dbCon;