const mongoose=require("mongoose")

const db=()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected")
    }
    catch(e){
        console.log("Database connection failed")
    }
}

module.exports=db
