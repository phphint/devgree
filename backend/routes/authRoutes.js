// authRoutes.js 

const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer'); // Add multer for file handling

const authController = require('../controllers/authController');
// Require the userController which we will create
const userController = require('../controllers/userController');
const resumeController = require('../controllers/resumeController');

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

// Resume import route
router.post('/import-resume', passport.authenticate('jwt', { session: false }), upload.single('resume'), resumeController.importResume);


// Add these new routes for viewing and editing the profile data
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getProfile);
router.put('/profile', passport.authenticate('jwt', { session: false }), userController.editProfile);



// router.post('/login', authController.login);
router.post('/login', passport.authenticate('local', { session: false }), authController.login);

router.post('/register', authController.register);
router.post('/forgot-password', authController.forgotPassword);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), authController.googleCallback);


module.exports = router;
