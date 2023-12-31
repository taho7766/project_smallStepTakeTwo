require('dotenv').config();

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const jwtSecret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw new Error('No token');
        }

        const decoded = jwt.verify(token, jwtSecret);
        console.log('Decoded', decoded);
        const user = await User.findOne({ _id: decoded.userId });
        console.log('fetched user:', user);
        if(!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch(error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = {
    auth,
};
