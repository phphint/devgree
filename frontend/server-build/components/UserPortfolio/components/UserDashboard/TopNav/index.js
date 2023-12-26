"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _MessagesMenu = _interopRequireDefault(require("./MessagesMenu"));
var _NotificationsMenu = _interopRequireDefault(require("./NotificationsMenu"));
var _AvatarMenu = _interopRequireDefault(require("./AvatarMenu"));
var _logo = require("../../../logo4.svg");
const TopNav = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark text-white sticky-top px-4 py-0 flex-nowrap"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "navbar-brand d-flex me-4",
    to: "/"
  }, "          ", /*#__PURE__*/_react.default.createElement(_logo.ReactComponent, {
    style: {
      width: 'auto',
      height: '33px',
      marginRight: '5px'
    }
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "mb-0"
  }, "Devgree")), /*#__PURE__*/_react.default.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#sidebarMenu",
    "aria-controls": "sidebarMenu",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-grow-1 flex-nowrap",
    id: "navbarSupportedContents"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-nav align-items-center ms-auto"
  }, /*#__PURE__*/_react.default.createElement(_MessagesMenu.default, null), /*#__PURE__*/_react.default.createElement(_NotificationsMenu.default, null), /*#__PURE__*/_react.default.createElement(_AvatarMenu.default, null)))));
};
var _default = exports.default = TopNav;