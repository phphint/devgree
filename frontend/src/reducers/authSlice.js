// authslice 

import { createSlice } from "@reduxjs/toolkit";
import { updateProfile as updateProfileThunk } from '../components/UserDashboard/profileThunks.js';




const initialState = {
  isLoggedIn: false,
  token: null,
  userId: null,
  fullName: "",
  profilePicture: "",
  email: "",
  bio: "",
  roleTitle: "",
  location: "",
  phone: "",
  videoIntro: {
    platform: "",
    url: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, userId, fullName, profilePicture, email, bio, roleTitle, location, phone, videoIntro } = action.payload;
    
      localStorage.setItem("authToken", token);
      state.token = token;
      state.userId = userId;
      state.fullName = fullName;
      state.profilePicture = profilePicture;
      state.email = email;
      state.isLoggedIn = true;
      state.bio = bio ?? "";
      state.roleTitle = roleTitle ?? "";
      state.location = location ?? "";
      state.phone = phone ?? "";
      state.videoIntro = videoIntro ?? { platform: "", url: "" };
    },
    logout: (state) => {
      localStorage.removeItem("authToken");
      state.token = null;
      state.userId = null;
      state.fullName = "";
      state.profilePicture = "";
      state.email = "";
      state.isLoggedIn = false;
      state.bio = "";
      state.roleTitle = "";
      state.location = "";
      state.phone = "";
      state.videoIntro = { platform: "", url: "" };
    },
    updateProfile: (state, action) => {
      // Assuming action.payload contains the updated user profile data
      const { fullName, profilePicture, bio, roleTitle, location, phone, videoIntro } = action.payload;
      state.fullName = fullName ?? state.fullName;
      state.profilePicture = profilePicture ?? state.profilePicture;
      state.bio = bio ?? state.bio;
      state.roleTitle = roleTitle ?? state.roleTitle;
      state.location = location ?? state.location;
      state.phone = phone ?? state.phone;
      state.videoIntro = videoIntro ?? state.videoIntro;
  },
    
    // ... potentially other reducers ...
  }

  
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
