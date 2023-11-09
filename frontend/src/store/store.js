import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from '../reducers/authSlice';
import uiReducer from '../reducers/uiSlice';
import userPortfolioReducer from '../reducers/userPortfolioSlice'; // Make sure this path is correct

const persistConfig = {
  key: 'root',
  storage,
  // Add other configurations if needed
};

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  userPortfolio: userPortfolioReducer, // Added userPortfolio reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      },
    }),
  // Add any other middleware or enhancers if needed
});

export const persistor = persistStore(store);
