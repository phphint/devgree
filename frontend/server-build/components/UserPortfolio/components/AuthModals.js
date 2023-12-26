"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _LoginForm = _interopRequireDefault(require("./LoginForm"));
var _RegForm = _interopRequireDefault(require("./RegForm"));
// Adjust the path as needed
// Adjust the path as needed

const AuthModals = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: "loginModal",
    tabIndex: "-1",
    "aria-labelledby": "loginModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title text-dark",
    id: "loginModalLabel"
  }, "Login"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement(_LoginForm.default, null))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: "signupModal",
    tabIndex: "-1",
    "aria-labelledby": "signupModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title text-dark",
    id: "signupModalLabel"
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement(_RegForm.default, null))))));
};
var _default = exports.default = AuthModals;