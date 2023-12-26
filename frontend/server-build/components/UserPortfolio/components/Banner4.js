"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logo = require("../logo4.svg");
var _elevateSignupBg = _interopRequireDefault(require("../assets/images/elevate-signup-bg.png"));
// Ensure the path is correct
// Ensure the path is correct

const Banner3 = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "banner3",
    style: {
      backgroundImage: "url(".concat(_elevateSignupBg.default, ")"),
      backgroundSize: 'cover',
      textAlign: 'center',
      padding: '50px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh' // Adjust the height as needed
    }
  }, /*#__PURE__*/_react.default.createElement(_logo.ReactComponent, {
    style: {
      width: "100px",
      height: "100px"
    }
  }), " ", /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      marginTop: '20px',
      fontSize: '3rem'
    }
  }, "Unlocking the Power of Your Professional Portfolio"), " ", /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginTop: '10px',
      fontSize: '1.5rem'
    }
  }, "Revolutionizing Portfolio Presentation in Tech"), /*#__PURE__*/_react.default.createElement("button", {
    "data-bs-toggle": "modal",
    "data-bs-target": "#signupModal",
    className: "btn",
    style: {
      marginTop: '20px',
      backgroundColor: '#2a2948',
      color: 'white',
      borderRadius: '50px',
      // Very rounded corners
      padding: '10px 20px',
      // Increased padding for larger size
      fontSize: '1.25rem' // Larger font size
    }
  }, "Join Now "));
};
var _default = exports.default = Banner3;