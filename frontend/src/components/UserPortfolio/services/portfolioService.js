// portfolioService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api/'; // Replace with your actual API base URL

// Fetch portfolio data for a specific user by URL param
export const fetchPortfolioData = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/portfolio/${token}`);
    return response.data; // Assuming the response has a data object
  } catch (error) {
    // Handle errors, possibly re-throw them or return a default value
    throw error;
  }
};

// ... other service functions as needed for the portfolio ...
