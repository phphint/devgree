"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ContactForm = _interopRequireDefault(require("./ContactForm"));
// ContactModal.js

// Adjust the import path if necessary

const ContactModal = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: "contactModal",
    tabIndex: "-1",
    "aria-labelledby": "contactModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title text-dark",
    id: "contactModalLabel"
  }, "Contact Us"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement(_ContactForm.default, null)))));
};
var _default = exports.default = ContactModal;