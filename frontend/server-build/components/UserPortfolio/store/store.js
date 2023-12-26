"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.persistor = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reduxPersist = require("redux-persist");
var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));
var _authSlice = _interopRequireDefault(require("../reducers/authSlice"));
var _uiSlice = _interopRequireDefault(require("../reducers/uiSlice"));
var _userPortfolioSlice = _interopRequireDefault(require("../reducers/userPortfolioSlice"));
var _dashboardSlice = _interopRequireDefault(require("../reducers/dashboardSlice"));
// defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage: _storage.default
  // Add other configurations if needed
};
const rootReducer = (0, _toolkit.combineReducers)({
  auth: _authSlice.default,
  ui: _uiSlice.default,
  userPortfolio: _userPortfolioSlice.default,
  dashboard: _dashboardSlice.default // Adding the dashboard reducer
});
const persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);
const store = exports.store = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['auth/updateProfile', 'persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER']
    }
  })
  // Add any other middleware or enhancers if needed
});
const persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);