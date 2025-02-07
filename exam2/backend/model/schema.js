const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['Admin', 'Teacher', 'Student'], required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
