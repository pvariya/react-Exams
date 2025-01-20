require('dotenv').config()
const express = require('express');
const dbConnect = require('./config/db');
const autheticationRoute = require('./routes/authentication_route');
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use("/", autheticationRoute)

app.listen(8090, () => {
    console.log("listening on port 8090");
    dbConnect()
})