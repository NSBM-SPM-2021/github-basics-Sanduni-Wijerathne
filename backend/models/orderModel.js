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
        fName:{
            type : String,
            required : true
        },
        count:{
            type : Number,
            required : true
        },
        price:{
            type : Number,
            required : true
        }
    }],
    total:{
        type : Number,
        required:true
    }
    
})



const order = mongoose.model('order',orderSchema);

module.exports = order;