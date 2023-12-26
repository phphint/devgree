"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userDashboardThunks = exports.updateSettings = exports.fetchUserPortfolio = exports.editItem = exports.deleteItem = exports.addItem = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
var _dashboardSlice = require("../../reducers/dashboardSlice");
//dashboardthunks.js

const API_URL = process.env.REACT_APP_API_URL;

// Helper function to get headers with Authorization token
const getAuthHeaders = token => ({
  headers: {
    Authorization: "Bearer ".concat(token)
  }
});

// Universal Add Item Thunk
const addItem = exports.addItem = (0, _toolkit.createAsyncThunk)("dashboard/addItem", async (_ref, _ref2) => {
  let {
    section,
    newData
  } = _ref;
  let {
    dispatch,
    getState
  } = _ref2;
  const token = getState().auth.token;
  const userId = getState().auth.userId; // Assuming user ID is stored in auth state

  try {
    const response = await _axios.default.post("".concat(API_URL, "/dashboard/").concat(section), newData, getAuthHeaders(token));
    dispatch((0, _dashboardSlice.appendNewItem)({
      section,
      data: response.data
    }));
    // Dispatch fetchUserPortfolio after successfully adding the item
    console.log("Dispatching fetchUserPortfolio");
    dispatch(fetchUserPortfolio({
      identifier: userId,
      token
    }));
    return response.data;
  } catch (error) {
    console.error("Error adding item to ".concat(section, ":"), error);
  }
});

// Universal Edit Item Thunk
const editItem = exports.editItem = (0, _toolkit.createAsyncThunk)("dashboard/editItem", async (_ref3, _ref4) => {
  let {
    section,
    itemId,
    newData
  } = _ref3;
  let {
    dispatch,
    getState
  } = _ref4;
  const token = getState().auth.token;
  try {
    const response = await _axios.default.put("".concat(API_URL, "/dashboard/").concat(section, "/").concat(itemId), newData, getAuthHeaders(token));
    dispatch((0, _dashboardSlice.updateItemById)({
      section,
      _id: itemId,
      newData: response.data
    }));
    return response.data;
  } catch (error) {
    console.error("Error editing item in ".concat(section, ":"), error);
  }
});

// Universal Delete Item Thunk
const deleteItem = exports.deleteItem = (0, _toolkit.createAsyncThunk)("dashboard/deleteItem", async (_ref5, _ref6) => {
  let {
    section,
    itemId
  } = _ref5;
  let {
    dispatch,
    getState
  } = _ref6;
  const token = getState().auth.token;
  try {
    const response = await _axios.default.delete("".concat(API_URL, "/dashboard/").concat(section, "/").concat(itemId), getAuthHeaders(token));
    if (response.status === 200) {
      dispatch((0, _dashboardSlice.removeItemById)({
        section,
        itemId
      }));
    }
  } catch (error) {
    console.error("Error deleting item from ".concat(section, ":"), error);
  }
});

// Thunk for updating user settings
// Thunk for updating user settings
const updateSettings = exports.updateSettings = (0, _toolkit.createAsyncThunk)("dashboard/updateSettings", async (newSettings, _ref7) => {
  let {
    dispatch,
    getState
  } = _ref7;
  const token = getState().auth.token;
  try {
    const response = await _axios.default.put("".concat(API_URL, "/dashboard/settings"), newSettings, getAuthHeaders(token));
    dispatch((0, _dashboardSlice.setDashboardData)({
      ...getState().dashboard,
      settings: response.data
    }));
    return response.data;
  } catch (error) {
    console.error("Error updating settings:", error);
  }
});

// Thunk for fetching the user's portfolio
const fetchUserPortfolio = exports.fetchUserPortfolio = (0, _toolkit.createAsyncThunk)("dashboard/fetchUserPortfolio", async (_ref8, _ref9) => {
  let {
    identifier,
    token
  } = _ref8;
  let {
    dispatch
  } = _ref9;
  try {
    const response = await _axios.default.get("".concat(API_URL, "/portfolio/").concat(identifier), getAuthHeaders(token));
    dispatch((0, _dashboardSlice.setDashboardData)(response.data));
    return response.data;
  } catch (error) {
    console.error("fetchUserPortfolio error:", error);
  }
});

// Similar thunks for other sections like workExperience, skills, etc.

const userDashboardThunks = exports.userDashboardThunks = {
  editItem,
  deleteItem,
  addItem

  // ... other thunks ...
};