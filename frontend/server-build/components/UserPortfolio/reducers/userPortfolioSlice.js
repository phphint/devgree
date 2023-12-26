"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPortfolioSlice = exports.resetUserPortfolio = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _userPortfolioThunks = require("../components/UserPortfolio/userPortfolioThunks");
// Import the thunk

const userPortfolioSlice = exports.userPortfolioSlice = (0, _toolkit.createSlice)({
  name: 'userPortfolio',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {
    // Add a reset reducer
    resetUserPortfolio: state => {
      state.data = null;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder.addCase(_userPortfolioThunks.fetchUserPortfolio.pending, state => {
      state.loading = true;
      state.error = null;
    }).addCase(_userPortfolioThunks.fetchUserPortfolio.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    }).addCase(_userPortfolioThunks.fetchUserPortfolio.rejected, (state, action) => {
      state.error = action.payload;
      state.data = null; // Clear the data if there's an error
      state.loading = false;
    });
  }
});

// Export the reset action so it can be dispatched
const {
  resetUserPortfolio
} = userPortfolioSlice.actions;
exports.resetUserPortfolio = resetUserPortfolio;
var _default = exports.default = userPortfolioSlice.reducer;