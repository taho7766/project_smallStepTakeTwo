require('dotenv').config('../../.env');

const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

const registerUser = async (req, res) => {
    try {
        const { username, password, email} = req.body;

        let user = await User.findOne({ username });
        let userEmail = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        if(userEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        user = new User({
            username,
            password,
            email
        });

        await user.save();
        const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1hr' });
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
        const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const requestPasswordReset = async (req, res) => {
    try {
        const { username } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "No user found with that username." });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.passwordResetToken = resetToken;
        user.passwordResetExpires = Date.now() + 3600000;
        await user.save();

        // const resetLink = '';

        await sendEmail({
            to: user.email,
            subject: 'Password Reset Request',
            message: `Click on the following link to reset your password: ${resetToken}`,
        });

        res.status(200).json({ message: 'Reset link sent to your email.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

const resetPassword = async (req, res) => {
    try {
        const user = await User.findOne({
            passwordResetToken: req.body.token,
            passwordResetExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token.' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = req.body.password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save();

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'password'];
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
        console.log("Atempting to delete user:", req.user);
        await req.user.deleteOne();
        console.log("user should be deleted.");
        res.send(req.user);
    } catch (error) {
        console.log("Error deleteting user:", error);
        res.status(500).send(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    requestPasswordReset,
    resetPassword,
    updateUser,
    deleteUser
};