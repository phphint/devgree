"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHelmet = require("react-helmet");
var _Banner = _interopRequireDefault(require(".././Banner2"));
var _RegSection = _interopRequireDefault(require(".././RegSection"));
var _Footer = _interopRequireDefault(require(".././Footer"));
var _FeaturesSection = _interopRequireDefault(require(".././Features/FeaturesSection"));
// Import the components

const HomePage = () => {
  const schemaOrgWebSite = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: "https://www.devgree.com/",
    name: "Devgree",
    description: "Devgree - The future of tech portfolios and skill assessments. Create your personalized portfolio page for free today and showcase your skills with our comprehensive assessments.",
    publisher: {
      "@type": "Organization",
      name: "Devgree"
      // You can add more details about your organization here
    }
  };
  return (
    /*#__PURE__*/
    // React Fragment
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/_react.default.createElement("meta", {
      name: "description",
      content: "Devgree - The future of tech portfolios and skill assessments. Create your personalized portfolio page for free today and showcase your skills with our comprehensive assessments."
    }), /*#__PURE__*/_react.default.createElement("title", null, "Devgree - Your Free Tech Portfolio Space & Comprehensive Skill Assessments"), /*#__PURE__*/_react.default.createElement("script", {
      type: "application/ld+json"
    }, JSON.stringify(schemaOrgWebSite))), /*#__PURE__*/_react.default.createElement("div", {
      className: "min-vh-100 flex flex-col bg-dark text-white"
    }, /*#__PURE__*/_react.default.createElement(_Banner.default, null), /*#__PURE__*/_react.default.createElement(_FeaturesSection.default, null), /*#__PURE__*/_react.default.createElement(_RegSection.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null)))
  );
};
var _default = exports.default = HomePage;