"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrap = require("react-bootstrap");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NavMenu = () => {
  const [isNavOpen, setIsNavOpen] = (0, _react.useState)(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleCloseNav = () => {
    setIsNavOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    expand: "md",
    className: "d-none d-md-flex"
  }, " ", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "me-auto"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.NavLink,
    to: "/",
    onClick: () => setIsNavOpen(false)
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.NavLink,
    to: "/features",
    onClick: () => setIsNavOpen(false)
  }, "Features"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.NavLink,
    to: "/about",
    onClick: () => setIsNavOpen(false)
  }, "About"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#",
    "data-bs-toggle": "modal",
    "data-bs-target": "#contactModal",
    onClick: () => setIsNavOpen(false)
  }, "Contact"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    expand: "md",
    className: "d-flex d-md-none"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "responsive-navbar-nav",
    onClick: handleToggleNav
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "full-screen-nav ".concat(isNavOpen ? 'active' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "full-screen-nav-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.NavLink,
    to: "/",
    onClick: handleCloseNav
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.NavLink,
    to: "/features",
    onClick: handleCloseNav
  }, "Features"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.NavLink,
    to: "/about",
    onClick: handleCloseNav
  }, "About"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#",
    "data-bs-toggle": "modal",
    "data-bs-target": "#contactModal",
    onClick: handleCloseNav
  }, "Contact"), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary mt-3",
    onClick: handleCloseNav
  }, "Close"))));
};
var _default = exports.default = NavMenu;