const express = require('express');
const { signUp, login } = require('../controller/authenication');
const autheticationRoute = express.Router();

autheticationRoute.post('/signup', signUp)
autheticationRoute.post('/login', login)
module.exports = autheticationRoute;