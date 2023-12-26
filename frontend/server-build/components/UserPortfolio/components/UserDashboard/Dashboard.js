"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _DashboardTemplateModule = _interopRequireDefault(require("./DashboardTemplate.module.css"));
var _index = _interopRequireDefault(require("./TopNav/index.js"));
var _SideNav = _interopRequireDefault(require("./SideNav"));
var _Footer = _interopRequireDefault(require("../Footer"));
// Import CSS module

const Dashboard = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_SideNav.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Dashboard"), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-info mt-3",
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Beta Version:"), " Degree.com is currently in beta. Please check back in the coming months for a more functional release. We appreciate your patience and feedback as we work to improve our platform!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "my-3"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Portfolio Completion Status"), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: '4%'
    },
    "aria-valuenow": "4",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, "4% Complete")), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-muted mt-2"
  }, "Complete your profile to 100% to maximize visibility and opportunities.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "my-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 col-lg-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Profile Overview"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "Update and view your professional profile to showcase your skills and experience."), /*#__PURE__*/_react.default.createElement("a", {
    href: "/dashboard/profile",
    className: "btn btn-primary"
  }, "View Profile")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 col-lg-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Skills Assessment"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "Take assessments to validate your skills and improve your portfolio's credibility."), /*#__PURE__*/_react.default.createElement("a", {
    href: "/dashboard/skills-assessment",
    className: "btn btn-success"
  }, "Start Assessment")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 col-lg-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Portfolio Projects"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "Showcase your projects, contributions, and technological expertise."), /*#__PURE__*/_react.default.createElement("a", {
    href: "/dashboard/projects",
    className: "btn btn-info"
  }, "Manage Projects")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 col-lg-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Billing Overview"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "Check your subscription status and view your billing history."), /*#__PURE__*/_react.default.createElement("a", {
    href: "/dashboard/billing",
    className: "btn btn-warning"
  }, "Manage Billing")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 col-lg-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Work History"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "View and update your professional work history."), /*#__PURE__*/_react.default.createElement("a", {
    href: "/dashboard/work-history",
    className: "btn btn-secondary"
  }, "View Work History")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 col-lg-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Education & Certifications"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "Document your educational background and certifications."), /*#__PURE__*/_react.default.createElement("a", {
    href: "/dashboard/education",
    className: "btn btn-dark"
  }, "View Education")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Need Help?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "Access FAQs, user guides, and support resources."), /*#__PURE__*/_react.default.createElement("a", {
    href: "/dashboard/help",
    className: "btn btn-light"
  }, "Get Support")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "analytics-section"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Portfolio Analytics"), /*#__PURE__*/_react.default.createElement("p", null, "Track the impact and reach of your portfolio with detailed analytics."), /*#__PURE__*/_react.default.createElement("div", {
    className: "row g-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card h-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Project Views"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "An overview of how many times your projects have been viewed.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card h-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Skill Endorsements"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "A summary of endorsements received for your skills.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Interaction Overview"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "Insights into interactions on your portfolio, such as likes, shares, and comments."))))))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = Dashboard;