import { createSlice } from "@reduxjs/toolkit";

// Define the initial state with additional properties for the user's full name and profile picture
const initialState = {
  isLoggedIn: false,
  token: null,
  fullName: "",
  profilePicture: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // Assuming action.payload is an object with token, fullName, and profilePicture
      const { token, fullName, profilePicture, email } = action.payload;
      localStorage.setItem("authToken", token); // Save the token to localStorage
      state.token = token; // Update the token in the state
      state.fullName = fullName; // Update the full name in the state
      state.profilePicture = profilePicture; // Update the profile picture in the state
      state.email = email; // Update the email in the state
      state.isLoggedIn = true; // Set the login state to true
    },
    logout: (state) => {
      localStorage.removeItem("authToken"); // Remove the token from localStorage
      state.token = null; // Reset the token in the state
      state.fullName = ""; // Reset the full name in the state
      state.profilePicture = ""; // Reset the profile picture in the state
      state.isLoggedIn = false; // Set the login state to false
    },
    // Add a new reducer for updating the profile
    updateProfile: (state, action) => {
      const { fullName, profilePicture } = action.payload;
      state.fullName = fullName;
      // Only update profilePicture if it's provided (truthy)
      if (profilePicture) {
        state.profilePicture = profilePicture;
      }
    },

    // ... potentially other reducers ...
  },
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
