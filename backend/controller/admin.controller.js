const { validationResult } = require("express-validator")
const adminModel = require("../models/admin.model")
const {createAdmin}=require("../service/admin.service")

module.exports.registerAdmin=async(req,res,next)=>{
    try{
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {fullname,email,password}=req.body
        const admin=await createAdmin({fullname,email,password})
        const token=await admin.generateToken() 
        res.cookie("token",token,{httpOnly:true})
        res.status(201).json({msg:"Admin registered successfully"})
    }
    catch(e){
        console.log(e)
        res.status(500).json({errors:[{msg:"Server error"}]})
    }
}

module.exports.loginAdmin=async(req,res,next)=>{
    try{
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {email,password}=req.body
        const admin=await adminModel.findOne({email})
        if(!admin){
            return res.status(400).json({errors:[{msg:"Invalid credentials"}]})
        }
        const isMatch=await admin.matchPassword(password)
        if(!isMatch){
            return res.status(400).json({errors:[{msg:"Invalid credentials"}]})
        }
        const token=await admin.generateToken()
        res.cookie("token",token,{httpOnly:true})
        res.status(200).json({msg:"Logged in successfully"})
    }
    catch(e){
        console.log(e)
        res.status(500).json({errors:[{msg:"Server error"}]})
    }
}