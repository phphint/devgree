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
    const token = jwt.sign({ userId: req.user._id }, '7eefdc274d0c24c2ae3af303d7a099888449da8fcd368efa7bd82c2859813a68'); // Replace 'YOUR_SECRET_KEY' with your actual secret key
    res.send({ token });
};

exports.googleCallback = async (req, res) => {
    // Logic to handle the user returned from Google
    const token = jwt.sign({ userId: req.user._id }, 'YOUR_SECRET_KEY');
    res.send({ token });
};

exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Registration error' });
    }
};

