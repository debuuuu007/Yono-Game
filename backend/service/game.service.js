const gameModel=require('../models/gamedata.model');

module.exports.addGame=async({gameName,gameImage,gameLink})=>{
    if(!gameName || !gameImage || !gameLink){
        throw new Error("All fields are required")
    }
    try{
        const game=await gameModel.create({gameName,gameImage,gameLink})
        return game
    }
    catch(e){
        console.log(e)
        throw new Error("Server error")
    }
}