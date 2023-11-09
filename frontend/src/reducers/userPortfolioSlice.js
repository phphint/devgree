import { createSlice } from '@reduxjs/toolkit';
import { fetchUserPortfolio } from '../components/UserPortfolio/userPortfolioThunks'; // Import the thunk

export const userPortfolioSlice = createSlice({
  name: 'userPortfolio',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Add a reset reducer
    resetUserPortfolio: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPortfolio.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserPortfolio.rejected, (state, action) => {
        state.error = action.payload;
        state.data = null; // Clear the data if there's an error
        state.loading = false;
      });
  },
});

// Export the reset action so it can be dispatched
export const { resetUserPortfolio } = userPortfolioSlice.actions;

export default userPortfolioSlice.reducer;
