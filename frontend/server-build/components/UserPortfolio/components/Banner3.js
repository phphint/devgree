"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _logo = require("../logo4.svg");
var _banner = _interopRequireDefault(require("../assets/images/banner3-2.png"));
// Make sure to import Link

// Ensure the path is correct
// Ensure the path is correct

const Banner3 = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "banner3",
    style: {
      backgroundImage: "url(".concat(_banner.default, ")"),
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
  }, "Empowering Your Tech Identity"), " ", /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginTop: '10px',
      fontSize: '1.5rem'
    }
  }, "Shaping the Future of Tech Portfolios"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/features",
    className: "btn",
    style: {
      marginTop: '20px',
      backgroundColor: '#2a2948',
      color: 'white',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '1.25rem',
      textDecoration: 'none' // Removes underline from link
    }
  }, "Features"));
};
var _default = exports.default = Banner3;