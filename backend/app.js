const dotenv=require("dotenv")
dotenv.config()
const db=require("./db/mongoose.connection")
db()

const express= require("express")
const app=express()
const cors=require("cors")
const cookieParser=require("cookie-parser")

const adminRoutes=require("./routes/admin.routes")
const gameRoutes=require("./routes/game.routes")
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/admin",adminRoutes)
app.use("/game",gameRoutes)

module.exports=app