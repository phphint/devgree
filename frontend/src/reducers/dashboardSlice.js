//dashboardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  profile: {
    fullName: "",
    profilePicture: "",
    bio: "",
    roleTitle: "",
    location: "",
    phone: "",
    videoIntro: {
      platform: "",
    },
    achievements: [],
  },
  skillsAssessment: {
    quizzesTaken: [],
  },
  testimonials: [],
  analytics: {
    visitorDemographics: [],
  },
  repositories: [],
  resume: {
    education: [],
    workExperience: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // Reducer for setting the entire dashboard data
    setDashboardData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },

    updateResume: (state, action) => {
      state.resume = { ...state.resume, ...action.payload };
    },

  // Generic Reducer for updating an item by ID in any section
updateItemById: (state, action) => {
  const { section, _id, newData } = action.payload;

  // Handle sections directly under the state
  if (section === "testimonials" || section === "analytics" || section === "repositories") {
    const index = state[section].findIndex((item) => item._id === _id);
    if (index !== -1) {
      state[section][index] = {
        ...state[section][index],
        ...newData,
      };
    }
  } 
  // Handle sections under 'resume'
  else if (state.resume && state.resume.hasOwnProperty(section)) {
    const index = state.resume[section].findIndex((item) => item._id === _id);
    if (index !== -1) {
      state.resume[section][index] = {
        ...state.resume[section][index],
        ...newData,
      };
    }
  } 
  else {
    console.error(`Section ${section} not found in state for update`);
  }
},


    // Generic Reducer for appending a new item in any section
    appendNewItem: (state, action) => {
      const { section, data } = action.payload;

      // Handle sections directly under the state
      if (
        section === "email" ||
        section === "profile" ||
        section === "skillsAssessment" ||
        section === "testimonials" ||
        section === "analytics" ||
        section === "repositories"
      ) {
        if (Array.isArray(state[section])) {
          state[section].push(data); // For array sections like testimonials and repositories
        } else {
          state[section] = { ...state[section], ...data }; // For object sections like profile
        }
      }
      // Handle sections under 'resume'
      else if (state.resume && state.resume.hasOwnProperty(section)) {
        state.resume[section].push(data);
      } else {
        console.error(`Section ${section} not found in state`);
      }
    },

    // Generic Reducer for removing an item by ID in any section
    removeItemById: (state, action) => {
      const { section, itemId } = action.payload;

      // Handle sections directly under the state
      if (
        section === "testimonials" ||
        section === "analytics" ||
        section === "repositories"
      ) {
        state[section] = state[section].filter((item) => item._id !== itemId);
      }
      // Handle sections under 'resume'
      else if (state.resume && state.resume.hasOwnProperty(section)) {
        state.resume[section] = state.resume[section].filter(
          (item) => item._id !== itemId
        );
      } else {
        console.error(`Section ${section} not found in state for removal`);
      }
    },
  },
});

export const {
  setUser,
  setDashboardData,
  updateItemById,
  appendNewItem,
  removeItemById,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
