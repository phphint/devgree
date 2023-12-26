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
var _CertificationsList = _interopRequireDefault(require("./Certifications/CertificationsList"));
var _PortfolioDataFetcher = _interopRequireDefault(require("./hooks/PortfolioDataFetcher.js"));
const Certifications = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_SideNav.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Certifications"), /*#__PURE__*/_react.default.createElement(_PortfolioDataFetcher.default, null), /*#__PURE__*/_react.default.createElement(_CertificationsList.default, null)))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = Certifications;