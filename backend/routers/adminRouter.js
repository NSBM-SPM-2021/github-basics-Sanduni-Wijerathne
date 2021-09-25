const express = require('express');
const adminModel = require('../models/adminModel')

const router = new express.Router();
const auth =  require('../middlewares/auth')

router.post('/admin/login',async (req,res)=>{
    try {
        const admin = await adminModel.findByCredentials(req.body.userName,req.body.password);
        const token = await admin.genorateAuthToken();
        res.send({
            admin: admin,
            token:token
        });
    } catch (error) {
        res.status(401).send("invalid Login Data")
        console.log(error)
    }
})

router.post('/admin/logout',auth,async(req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()  
    }
})

// router.post('/admin/new',async (req,res)=>{
//     const admin = new adminModel(req.body);
    
//     try {
//         await admin.save();
//         const token = await admin.genorateAuthToken();
//         res.status(200).send({admin,token});
//     } catch (error) {
//         res.status(500).send(error)
//         console.log(error)
//     }
// })



module.exports = router