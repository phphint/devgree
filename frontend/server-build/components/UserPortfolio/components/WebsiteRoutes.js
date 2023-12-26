"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _HomePage = _interopRequireDefault(require("./HomePage/HomePage"));
var _AboutPage = _interopRequireDefault(require("./AboutUs/AboutPage"));
var _PrivacyPolicy = _interopRequireDefault(require("./Legal/PrivacyPolicy"));
var _TermsOfService = _interopRequireDefault(require("./Legal/TermsOfService"));
var _FeaturesPage = _interopRequireDefault(require("./Features/FeaturesPage"));
var _LoginPage = _interopRequireDefault(require("./LoginPage"));
// WebsiteRoutes.js

function WebsiteRoutes() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_HomePage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/_react.default.createElement(_AboutPage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/privacy",
    element: /*#__PURE__*/_react.default.createElement(_PrivacyPolicy.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/terms",
    element: /*#__PURE__*/_react.default.createElement(_TermsOfService.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/features",
    element: /*#__PURE__*/_react.default.createElement(_FeaturesPage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/_react.default.createElement(_LoginPage.default, null)
  }));
}
var _default = exports.default = WebsiteRoutes;