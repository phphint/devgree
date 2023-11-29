import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateProfile } from "../../reducers/authSlice"; // Adjust path as necessary

export const updateProfileAsync = createAsyncThunk(
  "profile/updateProfile",
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState(); // Get the current state
    const token = state.auth.token; // Access the token from the state
    console.log("Token:", token); // Debug: Log the token

    try {
      console.log("Sending request to update profile"); // Debug: Log before sending the request
      const response = await axios.put(
        "http://localhost:5001/api/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token from the state
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Profile update successful:", response.data); // Debug: Log the response data
      // Dispatch the updateProfile action from authSlice with the response data
      thunkAPI.dispatch(updateProfile(response.data));

      return response.data;
    } catch (error) {
      console.error("Error in updateProfileAsync:", error.response ? error.response.data : error); // Debug: Log the error
      return thunkAPI.rejectWithValue(error.response ? error.response.data : error);
    }
  }
);
