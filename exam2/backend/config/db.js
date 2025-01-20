const mongoose = require('mongoose')

const dbConnect = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/exam-2")
    console.log("Connect to Mongo Server")

}

module.exports = dbConnect