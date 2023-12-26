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
const SkillsAssessment = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_SideNav.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Skills Assessments"), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-info mt-3"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Exploring Your Potential with Devgree!"), /*#__PURE__*/_react.default.createElement("br", null), "We're excited about our Skills Assessments feature, but please be aware that Devgree is currently in beta. This means our Skills Assessments are still being fine-tuned to offer you the most accurate and helpful insights. We appreciate your patience as we perfect this tool. Your experience and feedback during this phase are invaluable to us. Stay tuned for more updates, and thanks for joining us on this journey!")))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = SkillsAssessment;