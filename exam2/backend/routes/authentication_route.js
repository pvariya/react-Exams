const express = require('express');
const { signUp, login } = require('../controller/authenication');
const { roleMiddleware, authenticateJWT } = require('../middleware/jwt');
const autheticationRoute = express.Router();

autheticationRoute.post('/signup', signUp)
autheticationRoute.post('/login', login)

autheticationRoute.get('/getTeacher', authenticateJWT, roleMiddleware('Teacher'), (req, res) => {
    res.send('Welcome to the dashboard!');
});

autheticationRoute.get('/getStudent', authenticateJWT, roleMiddleware('Student'), (req, res) => {
    res.send('Welcome to the dashboard!');
});
module.exports = autheticationRoute;