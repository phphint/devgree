import { configureStore, combineReducers } from '@reduxjs/toolkit'; // Corrected import
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer, { logout } from '../reducers/authSlice';
import uiReducer from '../reducers/uiSlice';
import userPortfolioReducer from '../reducers/userPortfolioSlice';
import dashboardReducer from '../reducers/dashboardSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const appReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  userPortfolio: userPortfolioReducer,
  dashboard: dashboardReducer,
});

const rootReducer = (state, action) => {
  if (action.type === logout.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/updateProfile', 'persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      },
    }),
});

export const persistor = persistStore(store);
