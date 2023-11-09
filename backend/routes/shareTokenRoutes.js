// shareTokenRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const shareTokenController = require('../controllers/shareTokenController');

// Assuming that passport.authenticate('jwt', { session: false }) is the method you use for JWT authentication
router.post(
  '/shareTokens',
  passport.authenticate('jwt', { session: false }),
  shareTokenController.createShareToken
);

router.get(
  '/shareTokens',
  passport.authenticate('jwt', { session: false }),
  shareTokenController.getShareTokens
);

router.delete(
  '/shareTokens/:tokenId',
  passport.authenticate('jwt', { session: false }),
  shareTokenController.deleteShareToken
);

module.exports = router;
