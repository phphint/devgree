const jwt = require('jsonwebtoken');
const User = require('../models/User');
const nodemailer = require('nodemailer');  // Make sure to npm install nodemailer
const crypto = require('crypto');  // Node.js native module

exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }

        const newPassword = crypto.randomBytes(6).toString('hex');
        user.password = newPassword;
        await user.save();

        // Send email with the new password
        const emailOptions = {
            from: '"Your Name" <your-email@example.com>',
            to: user.email,
            subject: 'Your New Password',
            text: `Your new password is: ${newPassword}`
        };

        const transporter = nodemailer.createTransport({
            host: 'your-smtp-server-namecheap.com',
            port: 587,
            secure: false,  // upgrade later with STARTTLS
            auth: {
                user: 'your-email@example.com',
                pass: 'your-email-password'
            }
        });

        transporter.sendMail(emailOptions);

        res.send({ message: 'New password sent to email' });
    } catch (error) {
        res.status(500).send({ message: 'Error in password reset' });
    }
};


exports.login = async (req, res) => {
    if (!req.user) {
        return res.status(401).send({ message: req.authInfo.message });
    }

    // Find the user's details from the database
    const user = await User.findById(req.user._id).select('profile.fullName profile.profilePicture email');

    // Ensure the user was found
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    // Sign the JWT token with the user's ID
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Send the response including the token, full name, and profile picture
    res.send({
        token,
        fullName: user.profile.fullName,
        profilePicture: user.profile.profilePicture,
        email: user.email
    
    });
};

exports.googleCallback = async (req, res) => {
    // Logic to handle the user returned from Google
    const token = jwt.sign({ userId: req.user._id }, 'YOUR_SECRET_KEY');
    res.send({ token });
};

exports.register = async (req, res) => {
    console.log('Register endpoint hit with request body:', req.body);

    try {
        const user = new User(req.body);
        console.log('Attempting to save user:', user);

        await user.save();
        console.log('User registered successfully:', user);

        res.send({ message: 'User registered successfully' });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error code
            res.status(400).send({ message: 'Email already exists' });
        } else {
            console.error('Registration error:', error);
            console.error(error.stack);

            res.status(500).send({ message: 'Registration error', error: error.message });
        }
    }
};


