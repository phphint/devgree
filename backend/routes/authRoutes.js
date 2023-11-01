const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// router.post('/login', authController.login);
router.post('/login', passport.authenticate('local', { session: false }), authController.login);

router.post('/register', authController.register);
router.post('/forgot-password', authController.forgotPassword);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), authController.googleCallback);


module.exports = router;
