"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
const NotificationsMenu = () => {
  // Assuming this array represents your notifications
  const notifications = []; // Empty array means no notifications

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-item dropdown flex-nowrap"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "nav-link dropdown-toggle",
    "data-bs-toggle": "dropdown"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-bell me-lg-2"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "d-none d-lg-inline-flex"
  }, "Notification")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
  }, notifications.length === 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-item text-center"
  }, "You have no notifications") :
  // Render notifications if they exist
  notifications.map((notification, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "dropdown-item"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "fw-normal mb-0"
  }, notification.title), /*#__PURE__*/_react.default.createElement("small", null, notification.time)), /*#__PURE__*/_react.default.createElement("hr", {
    className: "dropdown-divider"
  }))), notifications.length > 0 && /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "dropdown-item text-center"
  }, "See all notifications")));
};
var _default = exports.default = NotificationsMenu;