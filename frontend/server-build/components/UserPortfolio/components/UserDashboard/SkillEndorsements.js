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
const SkillEndorsements = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_SideNav.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Skill Endorsements"), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-info mt-3"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Building a Community of Recognition!"), /*#__PURE__*/_react.default.createElement("br", null), "Thank you for exploring the Skill Endorsements feature of Devgree. As we are currently in the beta phase, this feature is under active development. We're working hard to create a robust platform where your skills can be recognized and endorsed by peers and professionals alike. Your understanding and feedback during this phase are incredibly valuable. Please stay tuned for further updates, and we're excited to grow and evolve with your participation!")))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = SkillEndorsements;