"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.logout = exports.login = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _profileThunks = require("../components/UserDashboard/profileThunks.js");
// authslice 

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
    url: ""
  }
};
const authSlice = (0, _toolkit.createSlice)({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const {
        token,
        userId,
        fullName,
        profilePicture,
        email,
        bio,
        roleTitle,
        location,
        phone,
        videoIntro
      } = action.payload;
      localStorage.setItem("authToken", token);
      state.token = token;
      state.userId = userId;
      state.fullName = fullName;
      state.profilePicture = profilePicture;
      state.email = email;
      state.isLoggedIn = true;
      state.bio = bio !== null && bio !== void 0 ? bio : "";
      state.roleTitle = roleTitle !== null && roleTitle !== void 0 ? roleTitle : "";
      state.location = location !== null && location !== void 0 ? location : "";
      state.phone = phone !== null && phone !== void 0 ? phone : "";
      state.videoIntro = videoIntro !== null && videoIntro !== void 0 ? videoIntro : {
        platform: "",
        url: ""
      };
    },
    logout: state => {
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
      state.videoIntro = {
        platform: "",
        url: ""
      };
    },
    updateProfile: (state, action) => {
      // Assuming action.payload contains the updated user profile data
      const {
        fullName,
        profilePicture,
        bio,
        roleTitle,
        location,
        phone,
        videoIntro
      } = action.payload;
      state.fullName = fullName !== null && fullName !== void 0 ? fullName : state.fullName;
      state.profilePicture = profilePicture !== null && profilePicture !== void 0 ? profilePicture : state.profilePicture;
      state.bio = bio !== null && bio !== void 0 ? bio : state.bio;
      state.roleTitle = roleTitle !== null && roleTitle !== void 0 ? roleTitle : state.roleTitle;
      state.location = location !== null && location !== void 0 ? location : state.location;
      state.phone = phone !== null && phone !== void 0 ? phone : state.phone;
      state.videoIntro = videoIntro !== null && videoIntro !== void 0 ? videoIntro : state.videoIntro;
    }

    // ... potentially other reducers ...
  }
});
const {
  login,
  logout,
  updateProfile
} = authSlice.actions;
exports.updateProfile = updateProfile;
exports.logout = logout;
exports.login = login;
var _default = exports.default = authSlice.reducer;