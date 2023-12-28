// portfolioService.js
const axios = require('axios');

const API_BASE_URL = 'http://backend:5000/api';

async function fetchPortfolioData(identifier, token) {
  try {
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const response = await axios.get(`${API_BASE_URL}/portfolio/${identifier}`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
}

module.exports = { fetchPortfolioData };
