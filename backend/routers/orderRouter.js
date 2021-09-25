const express = require('express');
const orderModel = require('../models/orderModel')

const router = new express.Router();
const auth =  require('../middlewares/auth');
const order = require('../models/orderModel');

router.post('/order/new',async (req,res)=>{
    try {
        const order = new orderModel(req.body)
        await order.save();
        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }

})

router.get('/order/all',auth,async(req,res)=>{
    try {
        const orders = await orderModel.find()
        res.status(200).send(orders)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

router.post('/order/close',auth,async(req,res)=>{
    try {
        const order = await orderModel.findById(req.body.id)
        order.status = true
        order.save()
        res.status(200).send(order)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

router.post('/order/delete',auth,async (req,res)=>{
    orderModel.findByIdAndDelete(req.body.id,function(err,doc){
        if(err){
            res.status(500).send(err)
        }else{
            res.send(doc)
        }
    })
})


module.exports = router