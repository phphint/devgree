"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
const MessagesMenu = () => {
  // Assuming this array represents your messages
  const messages = []; // Empty array means no messages

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-nav align-items-center ms-auto flex-nowrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "nav-link dropdown-toggle",
    "data-bs-toggle": "dropdown"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-envelope me-lg-2"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "d-none d-lg-inline-flex"
  }, "Message")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
  }, messages.length === 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-item text-center"
  }, "You have no messages") :
  // Render messages if they exist
  messages.map((message, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "dropdown-item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "https://via.placeholder.com/40",
    alt: "",
    style: {
      width: '40px',
      height: '40px'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ms-2"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "fw-normal mb-0"
  }, message.title), /*#__PURE__*/_react.default.createElement("small", null, message.time)))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "dropdown-divider"
  }))), messages.length > 0 && /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "dropdown-item text-center"
  }, "See all messages"))));
};
var _default = exports.default = MessagesMenu;