"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _dashboardThunks = require("../../UserDashboard/dashboardThunks.js");
// PortfolioDataFetcher.js

const PortfolioDataFetcher = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const userId = (0, _reactRedux.useSelector)(state => state.auth.userId);
  const token = (0, _reactRedux.useSelector)(state => state.auth.token);
  const authEmail = (0, _reactRedux.useSelector)(state => state.auth.email); // Get the email from auth state
  const dashboardEmail = (0, _reactRedux.useSelector)(state => state.dashboard.email); // Get the email from dashboard state

  (0, _react.useEffect)(() => {
    // Check if the user is authenticated and either dashboard email is empty or doesn't match auth email
    if (userId && token && (dashboardEmail === "" || authEmail !== dashboardEmail)) {
      // Dispatch the thunk to fetch the user's portfolio
      dispatch((0, _dashboardThunks.fetchUserPortfolio)({
        identifier: userId,
        token
      }));
    }
  }, [userId, token, authEmail, dashboardEmail, dispatch]); // Dependencies for useEffect

  return null; // Component does not render anything
};
var _default = exports.default = PortfolioDataFetcher;