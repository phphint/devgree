// userController.js

const User = require('../models/User');

// Handler for getting user profile
exports.getProfile = async (req, res, next) => {
    try {
        console.log('Get Profile Request:', req.user);
        const userId = req.user._id;
        console.log('Looking up user by ID:', userId);

        const user = await User.findById(userId);
        if (!user) {
            console.log('User not found for ID:', userId);
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User found:', user);
        res.json({ profile: user.profile });
    } catch (error) {
        console.error('Error in getProfile:', error);
        next(error);
    }
};


// Handler for editing user profile
exports.editProfile = async (req, res, next) => {
    try {
        console.log('Edit Profile Request:', req.user);
        const userId = req.user._id;
        console.log('Looking up user by ID for edit:', userId);

        const user = await User.findById(userId);
        if (!user) {
            console.log('User not found for ID:', userId);
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User found. Current profile:', user.profile);
        console.log('Requested changes:', req.body);

        // Update profile with provided values, ensure you validate them as needed
        user.profile = { ...user.profile, ...req.body };
        const updatedUser = await user.save();
        console.log('Updated profile:', updatedUser.profile);

        res.json({ message: 'Profile updated successfully', profile: updatedUser.profile });
    } catch (error) {
        console.error('Error in editProfile:', error);
        next(error);
    }
};


module.exports = exports;