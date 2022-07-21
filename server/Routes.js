const express = require('express');

const { registerUser, login, logout, myProfile } = require('./controllers/User')
const {createNewChat, getAllChats, saveMsg} = require('./controllers/Chat')
const router = express.Router();


const { isAuthedUser } = require('./middleware/Auth')

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/logout').get(isAuthedUser, logout);
router.route('/myProfile').get(isAuthedUser, myProfile);

router.route('/createchat').post(isAuthedUser, createNewChat);
router.route('/allChats').get(isAuthedUser, getAllChats);
router.route('/saveMsg').patch(isAuthedUser, saveMsg);


module.exports = router;