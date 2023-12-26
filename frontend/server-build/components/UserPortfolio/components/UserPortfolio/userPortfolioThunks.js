"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPortfolioThunks = exports.fetchUserPortfolio = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _portfolioService = require("./services/portfolioService");
// userPortfolioThunks.js

const fetchUserPortfolio = exports.fetchUserPortfolio = (0, _toolkit.createAsyncThunk)('userPortfolio/fetchUserPortfolio', async (_ref, thunkAPI) => {
  let {
    identifier,
    token
  } = _ref;
  try {
    const response = await (0, _portfolioService.fetchPortfolioData)(identifier, token);
    return response;
  } catch (error) {
    console.error('fetchUserPortfolio error:', error);
    if (error.response && error.response.status === 403) {
      console.log('Portfolio is private:', error.response.data);
    }
    return thunkAPI.rejectWithValue(error.response ? error.response.data : {
      message: error.message
    });
  }
});

// Export your thunks as needed
const userPortfolioThunks = exports.userPortfolioThunks = {
  fetchUserPortfolio
  // ... other thunks
};