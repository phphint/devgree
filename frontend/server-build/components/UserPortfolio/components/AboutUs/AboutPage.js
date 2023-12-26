"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHelmet = require("react-helmet");
var _Navbar = _interopRequireDefault(require("../Navbar"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _Banner = _interopRequireDefault(require("../Banner3"));
// Import the components

const AboutPage = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Devgree",
    url: "https://www.devgree.com",
    logo: "https://www.devgree.com/logo192.png",
    description: "Devgree is dedicated to enabling tech professionals to uniquely showcase their expertise, projects, and accomplishments with innovative portfolio solutions.",
    email: "info@devgree.com"
  };
  const paragraphStyle = {
    fontSize: '1rem'
  }; // Adjust the font size as needed

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Devgree - About us. Learn how we support tech professionals to uniquely showcase their portfolios."
  }), /*#__PURE__*/_react.default.createElement("title", null, "About Devgree - Elevating Tech Portfolios"), /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify(structuredData))), /*#__PURE__*/_react.default.createElement("div", {
    className: "min-h-screen flex flex-col elevate-bg-dark"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Banner.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "flex-grow-1 d-flex align-items-center p-5 "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "mb-4"
  }, "About Devgree"), /*#__PURE__*/_react.default.createElement("p", {
    style: paragraphStyle
  }, "Devgree is dedicated to enabling tech professionals to distinctively showcase their expertise, projects, and accomplishments. Our platform is meticulously crafted, offering innovative solutions for creating a standout presence in the competitive tech landscape."), /*#__PURE__*/_react.default.createElement("p", {
    style: paragraphStyle
  }, "We give you the tools to craft a portfolio that truly encapsulates your personal brand and professional milestones. With Devgree, you take control of your narrative in the tech space."), /*#__PURE__*/_react.default.createElement("p", {
    style: paragraphStyle
  }, "Privacy and customization are at the core of what we offer. You have the autonomy to manage the visibility of your portfolio components, ensuring your work is shared on your terms."), /*#__PURE__*/_react.default.createElement("p", {
    style: paragraphStyle
  }, "Committed to serving the ever-changing needs of tech professionals, Devgree is at the vanguard of the portfolio curation movement. Join us on this journey to professional distinction."))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null)));
};
var _default = exports.default = AboutPage;