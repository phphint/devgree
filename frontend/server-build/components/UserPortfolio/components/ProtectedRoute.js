"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
// ProtectedRoute.js

const ProtectedRoute = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  const isLoggedIn = (0, _reactRedux.useSelector)(state => state.auth.isLoggedIn);
  return isLoggedIn ? children : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
    to: "/login"
  });
};
var _default = exports.default = ProtectedRoute;