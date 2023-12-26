"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _LoginForm = _interopRequireDefault(require("./LoginForm"));
var _Footer = _interopRequireDefault(require("./Footer"));
// LoginPage.js

// Import your LoginForm component

const Login = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "form-signin mx-auto p-4"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-user-circle fa-3x mb-4 mx-auto d-block text-center"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "h3 mb-3 fw-normal text-center"
  }, "Please sign in"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-md-8 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_LoginForm.default, null)))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = Login;