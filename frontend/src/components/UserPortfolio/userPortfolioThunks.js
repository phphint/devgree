// userPortfolioThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPortfolioData } from './services/portfolioService';

export const fetchUserPortfolio = createAsyncThunk(
  'userPortfolio/fetchUserPortfolio',
  async ({ identifier, token }, thunkAPI) => {
    try {
      const response = await fetchPortfolioData(identifier, token);
      return response;
    } catch (error) {
      console.error('fetchUserPortfolio error:', error);
      if (error.response && error.response.status === 403) {
        
        console.log('Portfolio is private:', error.response.data);
      }
      return thunkAPI.rejectWithValue(error.response ? error.response.data : { message: error.message });
    }
  }
);

// Export your thunks as needed
export const userPortfolioThunks = {
  fetchUserPortfolio,
  // ... other thunks
};
