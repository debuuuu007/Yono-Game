const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const gameController=require('../controller/game.controller');
router.post('/addgame',[
    body('gameName').not().isEmpty().withMessage('Game Name is required'),
    body('gameImage').not().isEmpty().withMessage('Game Image is required'),
    body('gameLink').not().isEmpty().withMessage('Game Link is required')
],gameController.addGame
)

router.get('/getgames',gameController.getGames)

module.exports=router