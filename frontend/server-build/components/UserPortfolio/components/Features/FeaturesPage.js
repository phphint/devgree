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
var _FeaturesSection = _interopRequireDefault(require("./FeaturesSection"));
var _Banner = _interopRequireDefault(require("../Banner4"));
// src/components/Features/FeaturesPage.jsx

const FeaturesPage = () => {
  const schemaOrgService = {
    "@context": "http://schema.org",
    "@type": "Service",
    "serviceType": "Tech Portfolio Platform",
    "provider": {
      "@type": "Organization",
      "name": "Devgree",
      "url": "https://www.devgree.com"
    },
    "description": "Devgree offers an innovative tech portfolio platform with features like personalized portfolio creation, skills assessments, privacy controls, and more.",
    "image": "https://www.devgree.com/logo512.png",
    // URL to an image representing the service
    "url": "https://www.devgree.com/features"
    // Add more properties relevant to the service if needed
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Devgree - Explore the innovative features that set Devgree apart in the tech portfolio landscape."
  }), /*#__PURE__*/_react.default.createElement("title", null, "Devgree Features - Elevate Your Tech Portfolio"), /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify(schemaOrgService))), /*#__PURE__*/_react.default.createElement("div", {
    className: "min-h-screen flex flex-col bg-dark text-white"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Banner.default, null), /*#__PURE__*/_react.default.createElement(_FeaturesSection.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null)));
};
var _default = exports.default = FeaturesPage;