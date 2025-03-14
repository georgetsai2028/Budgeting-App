const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    //to save new user to database
    const newUser = new User({username, password: hashedPassword});
    await newUser.save();

    res.status(201).send('User registered');
});

//User login route (verifies password and generates JWT)
router.post('/login', async(req, res) => {
    const { username, password } = req.body;

    // Find the user from the database
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).send('Invalid Credentials');

    }

    //compare password with hashed password store in database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).send('Invalid Credentials');
    }

    //Generate JWT Token
    const token = jwt.sign({userId: user._id}, 'jwt_secret', {expiresIn: '1h'});

    res.json({ token });
});

//Protect routes with JWT verification middleware
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];//bearer token

    if (!token) {
        return res.status(403).send('Access Denied');
    }

    jwt.verify(token, 'jwt_secret', (err, user) => {
        if (err) {
            return res.status(403).send("Invalid Token");

        }
        req.user = user; //attaches user info to req
        next();
    });
}

router.get('/protected', authenticateJWT, (req, res) => {
    res.send('This is a protected route');
});

module.exports = router;