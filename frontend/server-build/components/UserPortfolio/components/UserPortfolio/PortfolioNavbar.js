"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
require("./portfolio.css");
var _Elevate_Your_Tech_Portfolio = _interopRequireDefault(require("./Elevate_Your_Tech_Portfolio.png"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CustomNavbar = () => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const profile = (0, _reactRedux.useSelector)(state => state.userPortfolio.data.profile);
  const userName = (profile === null || profile === void 0 ? void 0 : profile.fullName) || "No Name";
  const userRole = (profile === null || profile === void 0 ? void 0 : profile.roleTitle) || "No Role";
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "portfolio-top d-flex justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-column pl-1 pt-1"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "mb-0"
  }, userName), /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0 pb-0"
  }, userRole)), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "top-row d-flex justify-content-end"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown ".concat(isOpen ? "show" : "")
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "dropdownMenuButton",
    "aria-expanded": isOpen,
    onClick: toggleDropdown
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-list"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-menu ".concat(isOpen ? "show" : ""),
    "aria-labelledby": "dropdownMenuButton"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "/about"
  }, "About Devgree")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "/dashboard"
  }, "Return to Dashboard"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-area logo-bg pt-1 pl-1",
    onClick: toggleDropdown
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "pr-1 "
  }, "Devgree"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-row",
    style: {
      backgroundImage: "url(".concat(_Elevate_Your_Tech_Portfolio.default, ")")
    }
  })));
};
var _default = exports.default = CustomNavbar;