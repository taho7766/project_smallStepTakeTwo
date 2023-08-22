const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { username, password} = req.body;

        let user = await User.findOne({ username });
        if(user) {
            return res.status(400).json({ message: 'User already exists' });
        }


        user = new User({
            username,
            password
        });

        await user.save();
        res.status(201).json({ message: 'User registration sucessfull'});

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password} = req.body;

        let user = await User.findOne({ username});
        if(!user) {
            return res.status(400).json({ message: 'Invalid credidentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){ 
            return res.status(400).json({ message: 'invalid credidentials' });
        }
        const token = jwt.sign({ userId: user.id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password'];
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidUpdate) {
        return res.status(400).send({ error: 'Invalid update' });
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();
        res.send(req.user);
    } catch(error) {
        res.status(400).send(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
};