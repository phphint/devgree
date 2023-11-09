// portfolioRoutes.js
const express = require('express');
const router = express.Router();
const PortfolioController = require('../controllers/PortfolioController');

router.get('/portfolio/:identifier', PortfolioController.getPortfolio);

module.exports = router;
