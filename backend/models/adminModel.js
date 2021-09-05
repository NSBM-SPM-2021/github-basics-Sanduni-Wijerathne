const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    userName:{
        type : String,
        required :true
    },
    password:{
        type : String,
        required :true
    },
    tokens:[{
        token:{
            type : String,
            required : true
        }
    }]
})

adminSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens

    return userObject;
}

adminSchema.methods.genorateAuthToken = async function(){
    const user= this;
    const token = jwt.sign({userName:user.userName.toString()},'blZuyy6LdenIikI0p8xK');
    user.tokens =  user.tokens.concat({token});
    await user.save();
    return token;
}

adminSchema.statics.findByCredentials = async function(userName,userPassword){
    const user= this;
    const User = await user.findOne({'userName':userName,"password":userPassword});
    
    if(!User){
        throw new Error('unable to find user');
    }else{
        return User;
    }
}


const admin = mongoose.model('admin',adminSchema);

module.exports = admin;