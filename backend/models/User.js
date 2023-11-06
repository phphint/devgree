const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        fullName: String,  // Combined first and last name
        profilePicture: String,
        bio: String,
        coverImage: String
    },
    settings: {
        privacy: String,
        notifications: Boolean
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    lastLogin: Date
});

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);