const mongoose= require('mongoose')

const gameDataSchema = new mongoose.Schema({
    gameName:{
        type: String,
        required: true
    },
    gameImage:{
        type: String,
        required: true
    },
    gameLink:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('GameData', gameDataSchema)