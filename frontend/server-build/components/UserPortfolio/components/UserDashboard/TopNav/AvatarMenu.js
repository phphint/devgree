"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _authSlice = require("../../../reducers/authSlice.js");
var _ResumeUploadModal = _interopRequireDefault(require("../../ResumeUploadModal"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Import useEffect

// In AvatarMenu.js

const AvatarMenu = () => {
  const {
    fullName,
    profilePicture
  } = (0, _reactRedux.useSelector)(state => state.auth);
  const dispatch = (0, _reactRedux.useDispatch)();

  // Use useEffect to log the state
  (0, _react.useEffect)(() => {
    console.log("Auth State in AvatarMenu:", {
      fullName,
      profilePicture
    });
  }, [fullName, profilePicture]); // Dependencies array ensures this runs when fullName or profilePicture changes

  const baseURL = process.env.REACT_APP_S3_BASE_URL || "http://localhost:9000/";
  const profilePicURL = profilePicture ? "".concat(baseURL, "/").concat(profilePicture) : "https://via.placeholder.com/40";
  const handleLogout = () => {
    dispatch((0, _authSlice.logout)());
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-item dropdown flex-nowrap"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn nav-link dropdown-toggle",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle me-lg-2",
    src: profilePicURL,
    alt: "Profile",
    style: {
      width: "40px",
      height: "40px"
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "d-none d-lg-inline-flex"
  }, fullName || "Your Name")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item",
    to: "/dashboard/profile"
  }, "My Profile"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item",
    to: "/dashboard/settings"
  }, "Settings"), /*#__PURE__*/_react.default.createElement("button", {
    className: "dropdown-item",
    onClick: handleLogout
  }, "Log Out"), /*#__PURE__*/_react.default.createElement(_ResumeUploadModal.default, null)));
};
var _default = exports.default = AvatarMenu;