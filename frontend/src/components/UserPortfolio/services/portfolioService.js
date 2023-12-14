// portfolioService.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/';


export const fetchPortfolioData = async (identifier, token = null) => {
  try {
    const config = {};
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    const response = await axios.get(`${API_BASE_URL}/portfolio/${identifier}`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
