"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; } // RegSection.js
const BackgroundImage = /*#__PURE__*/(0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(require('../assets/images/ElevateSignupBg'))));
const RegForm = /*#__PURE__*/(0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(require('./RegForm'))));
const RegSection = () => {
  const isLoggedIn = (0, _reactRedux.useSelector)(state => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement("div", null, "Loading...")
  }, /*#__PURE__*/_react.default.createElement(BackgroundImage, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container mx-auto py-5 text-center text-lg-start text-white"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row align-items-center g-lg-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-7"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "display-4 fw-bold lh-1 mb-3"
  }, "Ready to Begin?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "col-lg-10 fs-4"
  }, "Start your journey with Devgree today and enhance your profile with our AI-powered skills assessments and certifications.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-10 mx-auto col-lg-5"
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement("div", null, "Loading Form...")
  }, /*#__PURE__*/_react.default.createElement(RegForm, null)))))));
};
var _default = exports.default = RegSection;