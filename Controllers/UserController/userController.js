const User = require("../../Model/user")

exports.getAllUser = async(req, res)=>{
    try{
        const users = await User.find()
        
        res.json({users})
    }catch(err){
        console.log('err', err)
    }
}