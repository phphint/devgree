//dashboardthunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  updateItemById,
  appendNewItem,
  removeItemById,
  setDashboardData,

  // ... other import actions ...
} from "../../reducers/dashboardSlice";

const API_URL = process.env.REACT_APP_API_URL;

// Helper function to get headers with Authorization token
const getAuthHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// Universal Add Item Thunk
export const addItem = createAsyncThunk(
  "dashboard/addItem",
  async ({ section, newData }, { dispatch, getState }) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId; // Assuming user ID is stored in auth state

    try {
      const response = await axios.post(
        `${API_URL}/dashboard/${section}`,
        newData,
        getAuthHeaders(token)
      );
      dispatch(appendNewItem({ section, data: response.data }));
      // Dispatch fetchUserPortfolio after successfully adding the item
      console.log("Dispatching fetchUserPortfolio");

      dispatch(fetchUserPortfolio({ identifier: userId, token }));

      return response.data;
    } catch (error) {
      console.error(`Error adding item to ${section}:`, error);
    }
  }
);

// Universal Edit Item Thunk
export const editItem = createAsyncThunk(
  "dashboard/editItem",
  async ({ section, itemId, newData }, { dispatch, getState }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.put(
        `${API_URL}/dashboard/${section}/${itemId}`,
        newData,
        getAuthHeaders(token)
      );
      dispatch(
        updateItemById({ section, _id: itemId, newData: response.data })
      );
      return response.data;
    } catch (error) {
      console.error(`Error editing item in ${section}:`, error);
    }
  }
);

// Universal Delete Item Thunk
export const deleteItem = createAsyncThunk(
  "dashboard/deleteItem",
  async ({ section, itemId }, { dispatch, getState }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.delete(
        `${API_URL}/dashboard/${section}/${itemId}`,
        getAuthHeaders(token)
      );
      if (response.status === 200) {
        dispatch(removeItemById({ section, itemId }));
      }
    } catch (error) {
      console.error(`Error deleting item from ${section}:`, error);
    }
  }
);

// Thunk for updating user settings
// Thunk for updating user settings
export const updateSettings = createAsyncThunk(
  "dashboard/updateSettings",
  async (newSettings, { dispatch, getState }) => {
    const token = getState().auth.token;
   

    try {
      const response = await axios.put(
        `${API_URL}/dashboard/settings`,
        newSettings,
        getAuthHeaders(token)
      );
      dispatch(setDashboardData({ ...getState().dashboard, settings: response.data }));
      return response.data;
    } catch (error) {
      console.error("Error updating settings:", error);
    }
  }
);


// Thunk for fetching the user's portfolio
export const fetchUserPortfolio = createAsyncThunk(
  "dashboard/fetchUserPortfolio",
  async ({ identifier, token }, { dispatch }) => {
    try {
      const response = await axios.get(
        `${API_URL}/portfolio/${identifier}`,
        getAuthHeaders(token)
      );
      dispatch(setDashboardData(response.data));
      return response.data;
    } catch (error) {
      console.error("fetchUserPortfolio error:", error);
    }
  }
);

// Similar thunks for other sections like workExperience, skills, etc.

export const userDashboardThunks = {
  editItem,
  deleteItem,
  addItem,

  // ... other thunks ...
};
