"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPortfolioData = void 0;
var _axios = _interopRequireDefault(require("axios"));
// portfolioService.js

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/';
const fetchPortfolioData = async function (identifier) {
  let token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  try {
    const config = {};
    if (token) {
      config.headers = {
        Authorization: "Bearer ".concat(token)
      };
    }
    const response = await _axios.default.get("".concat(API_BASE_URL, "/portfolio/").concat(identifier), config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
exports.fetchPortfolioData = fetchPortfolioData;