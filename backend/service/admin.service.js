const adminModel = require("../models/admin.model")


module.exports.createAdmin=async({fullname,email,password})=>{
    if(!email || !password){
        throw new Error("Email and password are required")
    }
    try{
        const admin=await adminModel.create({fullname,email,password})
        return admin
    }
    catch(e){
        console.log(e)
        throw new Error("Server error")
    }
}