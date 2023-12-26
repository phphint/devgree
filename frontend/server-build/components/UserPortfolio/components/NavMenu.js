"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrap = require("react-bootstrap");
// Import NavLink

const NavMenu = () => {
  const activeStyle = {
    textDecoration: "underline",
    // Style for active link
    color: "#fff" // You can set the active link color if you want
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "justify-content-center "
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Item, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/",
    className: "nav-link text-white",
    style: _ref => {
      let {
        isActive
      } = _ref;
      return isActive ? activeStyle : undefined;
    }
  }, "Home")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Item, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/features",
    className: "nav-link text-white",
    style: _ref2 => {
      let {
        isActive
      } = _ref2;
      return isActive ? activeStyle : undefined;
    }
  }, "Features")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Item, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about",
    className: "nav-link text-white",
    style: _ref3 => {
      let {
        isActive
      } = _ref3;
      return isActive ? activeStyle : undefined;
    }
  }, "About")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Item, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "nav-link text-white btn btn-link p-0 align-baseline",
    "data-bs-toggle": "modal",
    "data-bs-target": "#contactModal",
    style: {
      backgroundColor: 'transparent',
      border: 'none',
      marginTop: '8px',
      marginLeft: '8px',
      textDecoration: 'none',
      display: 'block',
      width: '100%'
    }
  }, "Contact"))));
};
var _default = exports.default = NavMenu;