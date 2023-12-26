"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _authSlice = require("../reducers/authSlice.js");
var _reactBootstrap = require("react-bootstrap");
var _bannerBackground = _interopRequireDefault(require("../assets/images/banner-background.png"));
var _logo = require("../logo4.svg");
var _arrow_page_down_banner = _interopRequireDefault(require("../assets/images/arrow_page_down_banner.png"));
var _NavMenu = _interopRequireDefault(require("./NavMenu"));
var _AuthModals = _interopRequireDefault(require("./AuthModals"));
// Adjust the import path as necessary

// Import the image
// Logo import
// Import the arrow image
// Import NavBar component

// Import AuthModals component

const FullHeightBanner = () => {
  const isLoggedIn = (0, _reactRedux.useSelector)(state => state.auth.isLoggedIn); // Access isLoggedIn from the state
  const dispatch = (0, _reactRedux.useDispatch)(); // Create a dispatch function

  // Handler function for logout button
  const handleLogout = () => {
    dispatch((0, _authSlice.logout)()); // Dispatch the logout action
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "100vh",
      backgroundImage: "url(".concat(_bannerBackground.default, ")"),
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: 6,
    className: "text-end"
  }, " "), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: 6,
    style: {
      backgroundColor: "#1e293f",
      padding: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_NavMenu.default, null), /*#__PURE__*/_react.default.createElement(_AuthModals.default, null))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "align-items-center my-4 justify-content-between"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "d-flex flex-column align-items-start text-decoration-none"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement(_logo.ReactComponent, {
    style: {
      width: "auto",
      height: "60px",
      marginRight: "10px"
    } // Increased logo height
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "display-6 fw-bold",
    style: {
      color: "#33dbbd",
      fontSize: "3.85rem"
    } // Increased font size for logo text
  }, "Devgree")), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "#b24957",
      fontSize: "1.60rem",
      marginTop: "5px"
    } // Increased font size for subtitle
  }, "Innovative Portfolio Platform"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: 6,
    className: "text-end"
  }, isLoggedIn ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/dashboard",
    className: "btn btn-warning me-2",
    style: {
      backgroundColor: "#65eae1",
      borderRadius: "25px",
      border: " #65eae1"
    }
  }, "Dashboard"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-light",
    style: {
      borderRadius: "25px"
    },
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-light me-2",
    "data-bs-toggle": "modal",
    "data-bs-target": "#loginModal",
    style: {
      borderRadius: "25px"
    }
  }, "Login"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-warning",
    "data-bs-toggle": "modal",
    "data-bs-target": "#signupModal",
    style: {
      backgroundColor: "#65eae1",
      borderRadius: "25px",
      border: "#65eae1"
    }
  }, "Sign-up")))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "elevate-text",
    style: {
      fontSize: "8rem",
      color: "#6d8896"
    }
  }, "Elevate"), " ", /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: "2rem"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#fbc6c6"
    }
  }, "Your"), " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#a7ad78"
    }
  }, " Tech "), " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#fbc6c6"
    }
  }, "Portfolio")), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "#fbc6c6"
    }
  }, "Step into a new era of showcasing")))), /*#__PURE__*/_react.default.createElement("a", {
    href: "#featuresBlock",
    className: "scroll-down-arrow",
    "aria-label": "Scroll down to features"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _arrow_page_down_banner.default,
    alt: "Scroll down to see features"
  })));
};
var _default = exports.default = FullHeightBanner;