const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    ObjectId: mongoose.Schema.ObjectId,
    cusName:{
        type : String,
        required :true
    },
    Phone:{
        type : Number,
        required :true
    },
    address:{
        type : String,
        required :true
    },
    status:{
        type : Boolean,
        default :false,
        required : false
    },
    items:[{
        item:{
            type : String,
            required : true
        }
    }]
    
})



const order = mongoose.model('order',orderSchema);

module.exports = order;