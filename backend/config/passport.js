// passport.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy, ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// For local strategy
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    } catch (err) {
        done(err);
    }
}));

// For Google strategy
passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ email: profile.emails[0].value });
        if (!user) {
            // If the user isn't found in the database, create a new user
            user = await new User({ 
                email: profile.emails[0].value, 
                profile: {
                    fullName: profile.displayName,
                    profilePicture: profile.photos[0].value
                }
            }).save();
        }
        return done(null, user);
    } catch (err) {
        done(err);
    }
}));

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET // Use environment variable for the secret key
};

// Create JWT strategy
passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    console.log('JWT payload received:', jwt_payload);
    try {
        console.log('Looking for user with ID:', jwt_payload.userId);
        const user = await User.findById(jwt_payload.userId);
        console.log('User found:', user);

        if (!user) {
            console.error('No user associated with this ID.');
            return done(null, false);
        }

        // Otherwise, return the user
        return done(null, user);
    } catch (error) {
        console.error('Error in JWT strategy:', error);
        done(error, false);
    }
}));


// Serialize and deserialize user instances to and from the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});
