"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Accordion = _interopRequireDefault(require("react-bootstrap/Accordion"));
var _index = _interopRequireDefault(require("./TopNav/index"));
var _SideNav = _interopRequireDefault(require("./SideNav"));
var _Footer = _interopRequireDefault(require("../Footer"));
const FAQs = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_SideNav.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Devgree - Frequently Asked Questions"), /*#__PURE__*/_react.default.createElement("p", null, "Discover what makes Devgree the preferred choice for tech professionals."), /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    defaultActiveKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default.Item, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default.Header, null, "Personalized Portfolio"), /*#__PURE__*/_react.default.createElement(_Accordion.default.Body, null, /*#__PURE__*/_react.default.createElement("strong", null, "FAQ:"), " How can I customize my portfolio layout?", /*#__PURE__*/_react.default.createElement("br", null), "Showcase your skills, projects, and accomplishments in a customizable and professional layout.")), /*#__PURE__*/_react.default.createElement(_Accordion.default.Item, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default.Header, null, "Skills Assessments"), /*#__PURE__*/_react.default.createElement(_Accordion.default.Body, null, /*#__PURE__*/_react.default.createElement("strong", null, "FAQ:"), " Where can I share my assessment results?", /*#__PURE__*/_react.default.createElement("br", null), "Engage in quizzes and assessments to measure your technical proficiency.")))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = FAQs;