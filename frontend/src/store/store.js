// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import uiReducer from '../reducers/uiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer, // add this line
  }
});

export default store;
