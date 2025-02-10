const User = require("../model/schema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = User(req.body);
            const tokenData = {
                email: user.email,
                id: user.id,
                role: user.role,
                username: user.username,
            };
            const token = jwt.sign(tokenData, "private-key");
            await user.save();
            res.status(201).json({ message: 'User registered successfully', token });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
}



const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const pass = await bcrypt.compare(password, user.password);
        if (!pass) return res.status(400).json({ error: 'Invalid password' });

        let data = {
            email: user.email,
            id: user.id,
            role: user.role,
            username: user.username,
        };
        const token = jwt.sign(data, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ msg: "user loggedIn", token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}

// const getStudent = async (req, res) => {
//     try {
//         let user = await User.find({ role: "Student" });
//         res.json(user);
//     } catch (error) {
//         res.json({ "getAlluser error": error.message });
//     }
// };


// const getTeacher = async (req, res) => {
//     try {
//         let user = await User.findOne({ role: "Teacher" });
//         res.json(user);
//     } catch (error) {
//         res.json({ "getTeacher error": error.message });
//     }
// };


module.exports = { signUp, login }