"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./TopNav/index"));
var _SideNav = _interopRequireDefault(require("./SideNav"));
var _Footer = _interopRequireDefault(require("../Footer"));
const PortfolioAnalytics = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_SideNav.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Analytics"), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-info mt-3"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Welcome to Devgree Analytics!"), /*#__PURE__*/_react.default.createElement("br", null), "Please note that Devgree is currently in its beta phase. As such, our Analytics feature is actively under development and will be available soon. We are working hard to provide you with detailed insights into your portfolio's performance. Stay tuned for updates, and thank you for being part of our beta testing phase!")))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = PortfolioAnalytics;