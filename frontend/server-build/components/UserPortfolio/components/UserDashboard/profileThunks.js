"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfileAsync = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
var _authSlice = require("../../reducers/authSlice");
// Adjust path as necessary

const updateProfileAsync = exports.updateProfileAsync = (0, _toolkit.createAsyncThunk)("profile/updateProfile", async (formData, thunkAPI) => {
  const state = thunkAPI.getState(); // Get the current state
  const token = state.auth.token; // Access the token from the state
  console.log("Token:", token); // Debug: Log the token

  try {
    console.log("Sending request to update profile"); // Debug: Log before sending the request
    const response = await _axios.default.put("".concat(process.env.REACT_APP_API_URL, "/profile"), formData, {
      headers: {
        Authorization: "Bearer ".concat(token),
        // Use the token from the state
        "Content-Type": "multipart/form-data"
      }
    });
    console.log("Profile update successful:", response.data); // Debug: Log the response data
    // Dispatch the updateProfile action from authSlice with the response data
    thunkAPI.dispatch((0, _authSlice.updateProfile)(response.data));
    return response.data;
  } catch (error) {
    console.error("Error in updateProfileAsync:", error.response ? error.response.data : error); // Debug: Log the error
    return thunkAPI.rejectWithValue(error.response ? error.response.data : error);
  }
});