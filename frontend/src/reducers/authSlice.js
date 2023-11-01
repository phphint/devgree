// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: !!localStorage.getItem('authToken')
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('authToken', action.payload);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.removeItem('authToken');
      state.isLoggedIn = false;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
