import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPortfolioData } from './services/portfolioService';

export const fetchUserPortfolio = createAsyncThunk(
    'userPortfolio/fetchUserPortfolio',
    async (token, thunkAPI) => {
      try {
        const response = await fetchPortfolioData(token);
        return response;
      } catch (error) {
        console.error('fetchUserPortfolio error:', error);
        // Check if the error is due to the portfolio being private
        if (error.response && error.response.status === 403) {
          // You can handle the private portfolio case here if needed
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
