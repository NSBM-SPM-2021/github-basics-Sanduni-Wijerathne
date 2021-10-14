const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');

const auth = async (req,res,next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(token,'blZuyy6LdenIikI0p8xK');
        const user = await adminModel.findOne({userName:decoded.userName,'tokens.token':token})
        if(!user){
            console.log("no user found")
            throw new Error()
        }
        req.user = user;
        req.token = token;
    } catch (e) {
        console.log(e)
        res.status(401).send({error:'Authentication failed'})
    }
    next()
}

module.exports = auth