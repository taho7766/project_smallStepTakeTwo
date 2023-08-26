const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { registerUser, loginUser, requestPasswordReset, resetPassword, updateUser, deleteUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

router.patch('/me', auth, updateUser);
router.delete('/me', auth, deleteUser);

module.exports = router;