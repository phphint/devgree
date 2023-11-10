const express = require('express');
const passport = require('passport');
const router = express.Router();
const PortfolioController = require('../controllers/PortfolioController');

// Optional Authentication Middleware
const optionalAuth = (req, res, next) => {
    console.log("optionalAuth middleware triggered");

    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.error("Error in passport authentication:", err);
            return next(err);
        }

        if (user) {
            console.log("User authenticated:", user);
            req.user = user; // If authenticated, attach user to request
        } else {
            console.log("No user authenticated. Info:", info);
        }

        next(); // Proceed whether authenticated or not
    })(req, res, next);
};

// Apply optional authentication to the portfolio route
router.get('/portfolio/:identifier', optionalAuth, PortfolioController.getPortfolio);

module.exports = router;
