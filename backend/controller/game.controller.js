const {validationResult} = require('express-validator');
const gameDataModel = require('../models/gamedata.model');
const {addGame} = require('../service/game.service');
module.exports.addGame = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {gameName, gameImage, gameLink} = req.body;
        const game = await addGame({gameName, gameImage, gameLink});
        res.status(201).json({msg: 'Game added successfully'});
    } catch (e) {
        console.log(e);
        res.status(500).json({errors: [{msg: 'Server error'}]});
    }
}

module.exports.getGames = async (req, res, next) => {
    try {
        const games = await gameDataModel.find(); //servicde function is no needed
        res.status(200).json(games);
    } catch (e) {
        console.log(e);
        res.status(500).json({errors: [{msg: 'Server error'}]});
    }
}