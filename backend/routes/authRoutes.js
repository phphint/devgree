// authRoutes.js 

const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer'); // Add multer for file handling
const rateLimit = require('express-rate-limit');


const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const resumeController = require('../controllers/resumeController');
const dashboardController = require('../controllers/dashboardController');

// Configure multer for file upload, allowing only pdf, doc, and docx files
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ 
    dest: 'uploads/', // Specify the folder to store uploaded files
    fileFilter: fileFilter
});

// Configure rate limiter for login attempts
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes'
  });

  // Rate limiter for registration
const registerLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3,
    message: 'Too many registration attempts from this IP, please try again after an hour'
  });
  
  // Rate limiter for resume import
  const resumeImportLimiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 2,
    message: 'Too many resume import attempts from this IP, please try again after 30 minutes'
  });
  

// Apply rate limiter to the resume import route
router.post('/import-resume', passport.authenticate('jwt', { session: false }), resumeImportLimiter, upload.single('resume'), resumeController.importResume);


// Add these new routes for viewing and editing the profile data
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getProfile);
router.put('/profile', passport.authenticate('jwt', { session: false }), userController.editProfile);

router.put('/dashboard/settings', passport.authenticate('jwt', { session: false }), dashboardController.updateSettings);


router.post('/dashboard/:section', passport.authenticate('jwt', { session: false }), dashboardController.addItem);
router.put('/dashboard/:section/:itemId', passport.authenticate('jwt', { session: false }), dashboardController.editItem);
router.delete('/dashboard/:section/:itemId', passport.authenticate('jwt', { session: false }), dashboardController.deleteItem);



// router.post('/login', authController.login);
// Apply rate limiter to the login route
router.post('/login', loginLimiter, passport.authenticate('local', { session: false }), authController.login);


// Apply rate limiter to the registration route
router.post('/register', registerLimiter, authController.register);

router.post('/forgot-password', authController.forgotPassword);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), authController.googleCallback);


module.exports = router;
