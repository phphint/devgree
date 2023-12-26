"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ContactModal = _interopRequireDefault(require("./Contact/ContactModal"));
var _Copyright = _interopRequireDefault(require("./Copyright"));
var _devgreeFooterBg = _interopRequireDefault(require("../assets/images/devgree-footer-bg.png"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Footer = () => {
  const [bgLoaded, setBgLoaded] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const img = new Image();
    img.src = _devgreeFooterBg.default;
    img.onload = () => setBgLoaded(true);
  }, []);
  const footerStyle = bgLoaded ? {
    backgroundImage: "url(".concat(_devgreeFooterBg.default, ")"),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom"
  } : {};
  return /*#__PURE__*/_react.default.createElement("footer", {
    style: footerStyle,
    className: "text-white py-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-links me-5 ms-5"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/privacy",
    className: "text-white me-4"
  }, "Privacy Policy"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/terms",
    className: "text-white me-4"
  }, "Terms of Use"), /*#__PURE__*/_react.default.createElement("button", {
    className: "text-white btn btn-link p-0 m-0 align-baseline",
    "data-bs-toggle": "modal",
    "data-bs-target": "#contactModal"
  }, "Contact")), /*#__PURE__*/_react.default.createElement("div", {
    className: "copyright-footer"
  }, /*#__PURE__*/_react.default.createElement(_Copyright.default, null))), /*#__PURE__*/_react.default.createElement(_ContactModal.default, null));
};
var _default = exports.default = Footer;