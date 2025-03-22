const express=require("express")
const router=express.Router()
const {body}=require("express-validator")
const adminController=require("../controller/admin.controller")


router.get("/",(req,res)=>{
    res.send("hii")
})

router.post("/register",[
    body("fullname","Name is required").not().isEmpty(),
    body("email","Enter a valid email").isEmail(),
    body("password","Password must be atleast 6 characters long").isLength({min:6})
],adminController.registerAdmin)

router.post("/login",[
    body("email","Enter a valid email").isEmail(),
    body("password","Password is required").exists()
],adminController.loginAdmin)

module.exports=router