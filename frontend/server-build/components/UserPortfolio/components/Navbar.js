"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _authSlice = require("../reducers/authSlice.js");
var _logo = require("../logo4.svg");
var _NavMenuResponsive = _interopRequireDefault(require("./NavMenuResponsive"));
var _AuthModals = _interopRequireDefault(require("./AuthModals"));
// Import at the top
// Import your logout action creator from your auth slice

// Import NavBar component
// Import AuthModals component

const Navbar = () => {
  const isLoggedIn = (0, _reactRedux.useSelector)(state => state.auth.isLoggedIn); // Access isLoggedIn from the state
  const dispatch = (0, _reactRedux.useDispatch)(); // Create a dispatch function

  // Handler function for logout button
  const handleLogout = () => {
    dispatch((0, _authSlice.logout)()); // Dispatch the logout action
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "devgree-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-logo",
    style: {
      paddingLeft: "15px",
      paddingRight: "0px",
      padding: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "d-flex align-items-center text-white text-decoration-none"
  }, /*#__PURE__*/React.createElement(_logo.ReactComponent, {
    style: {
      width: "auto",
      height: "44px",
      marginRight: "10px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "display-6 fw-bold"
  }, "Devgree"))), /*#__PURE__*/React.createElement("div", {
    className: "nav-menu d-flex align-items-center justify-content-between",
    style: {
      paddingRight: "15px",
      padding: "20px 0"
    }
  }, " ", /*#__PURE__*/React.createElement(_NavMenuResponsive.default, null), /*#__PURE__*/React.createElement("div", {
    className: "text-end"
  }, isLoggedIn ?
  /*#__PURE__*/
  // Show dashboard and logout buttons when logged in
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/dashboard",
    className: "btn me-2",
    style: {
      backgroundColor: "#e14549",
      // Change background color
      color: "white",
      // Assuming you want white text
      borderRadius: "50px" // Very round corners
    }
  }, "Dashboard"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-outline-light me-4",
    style: {
      color: "#292c4f",
      // Font color
      borderColor: "#292c4f",
      // Outline color
      borderRadius: "50px" // Very round corners
    },
    onClick: handleLogout
  }, "Logout")) :
  /*#__PURE__*/
  // Show login and signup buttons when not logged in
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-outline-light me-2",
    style: {
      color: "#292c4f",
      // Font color
      borderColor: "#292c4f",
      // Outline color
      borderRadius: "50px" // Very round corners
    },
    "data-bs-toggle": "modal",
    "data-bs-target": "#loginModal"
  }, "Login"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn me-4 d-none d-md-inline-block" // Added classes to hide on mobile
    ,
    style: {
      backgroundColor: "#e14549",
      // Change background color
      color: "white",
      // Assuming you want white text
      borderRadius: "50px" // Very round corners
    },
    "data-bs-toggle": "modal",
    "data-bs-target": "#signupModal"
  }, "Sign-up"))))), /*#__PURE__*/React.createElement(_AuthModals.default, null));
};
var _default = exports.default = Navbar;