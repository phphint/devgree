const jwt = require('jsonwebtoken');
const User = require('../models/User');
const nodemailer = require('nodemailer');  // Make sure to npm install nodemailer
const crypto = require('crypto');  // Node.js native module
const axios = require('axios');


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

    // Adjust this query to include the new fields
    const user = await User.findById(req.user._id).select('profile.fullName profile.profilePicture email profile.bio profile.roleTitle profile.location profile.phone profile.videoIntro');

    // Ensure the user was found
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    // Sign the JWT token with the user's ID
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Send the response including the token and user details
    res.send({
        token,
        userId: user._id, // Include the userId in the response
        fullName: user.profile.fullName,
        profilePicture: user.profile.profilePicture,
        email: user.email,
        // Include the newly added fields in the response
        bio: user.profile.bio,
        roleTitle: user.profile.roleTitle,
        location: user.profile.location,
        phone: user.profile.phone,
        videoIntro: user.profile.videoIntro
    });
};


exports.googleCallback = async (req, res) => {
    // Logic to handle the user returned from Google
    const token = jwt.sign({ userId: req.user._id }, 'YOUR_SECRET_KEY');
    res.send({ token });
};

const { v4: uuidv4 } = require('uuid'); // If using UUID


exports.register = async (req, res) => {
    console.log('Register endpoint hit with request body:', req.body);
    const { recaptchaToken } = req.body;

    if (!recaptchaToken) {
        console.log('No reCAPTCHA token provided');
        return res.status(400).send({ message: 'reCAPTCHA token is missing' });
    }

    try {
        console.log('Verifying reCAPTCHA token');
        const recaptchaResponse = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: recaptchaToken,
            },
        });

        if (!recaptchaResponse.data.success) {
            console.log('reCAPTCHA verification failed');
            return res.status(401).send({ message: 'Invalid reCAPTCHA. Please try again.' });
        }

        console.log('Proceeding with user registration');

        // Create a new user object
        const user = new User(req.body);

        // Add a share token to the user's settings
        user.settings = user.settings || {}; // Ensure settings object exists
        user.settings.shareTokens = user.settings.shareTokens || []; // Ensure shareTokens array exists
        const newToken = {
            token: uuidv4(), // Generate a unique token
            expiresAt: new Date(Date.now() + 3600 * 1000 * 24), // Set an expiration date for the token
            visibility: {} // Set default visibility settings or based on user input
        };
        user.settings.shareTokens.push(newToken);

        await user.save();
        console.log('User registered successfully:', user);

        res.send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        if (error.code === 11000) {
            console.error('Duplicate key error:', error);
            res.status(400).send({ message: 'Email already exists' });
        } else {
            res.status(500).send({ message: 'Registration error', error: error.message });
        }
    }
};



