"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ProtectedRoute = _interopRequireDefault(require("./ProtectedRoute"));
var _Dashboard = _interopRequireDefault(require("./UserDashboard/Dashboard"));
var _Certifications = _interopRequireDefault(require("./UserDashboard/Certifications"));
var _Settings = _interopRequireDefault(require("./UserDashboard/Settings"));
var _SkillEndorsements = _interopRequireDefault(require("./UserDashboard/SkillEndorsements"));
var _FAQs = _interopRequireDefault(require("./UserDashboard/FAQs"));
var _SkillsAssessment = _interopRequireDefault(require("./UserDashboard/SkillsAssessment"));
var _HelpSupport = _interopRequireDefault(require("./UserDashboard/HelpSupport"));
var _TestimonialsReferences = _interopRequireDefault(require("./UserDashboard/TestimonialsReferences"));
var _MyProfile = _interopRequireDefault(require("./UserDashboard/MyProfile"));
var _MyProjects = _interopRequireDefault(require("./UserDashboard/MyProjects"));
var _UnifiedCodeDisplay = _interopRequireDefault(require("./UserDashboard/UnifiedCodeDisplay"));
var _PortfolioAnalytics = _interopRequireDefault(require("./UserDashboard/PortfolioAnalytics"));
var _Education = _interopRequireDefault(require("./UserDashboard/Education"));
var _Skills = _interopRequireDefault(require("./UserDashboard/Skills"));
var _Billing = _interopRequireDefault(require("./UserDashboard/Billing"));
var _WorkHistory = _interopRequireDefault(require("./UserDashboard/WorkHistory"));
// DashboardRoutes.js

// ... import other components ...

function DashboardRoutes() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_Dashboard.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/certifications",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_Certifications.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/settings",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_Settings.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/skills",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_Skills.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/skill-endorsements",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_SkillEndorsements.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/faqs",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_FAQs.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/skills-assessment",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_SkillsAssessment.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/help",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_HelpSupport.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/testimonials-references",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_TestimonialsReferences.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/profile",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_MyProfile.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/projects",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_MyProjects.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/unified-code-display",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_UnifiedCodeDisplay.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "//portfolio-analytics",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_PortfolioAnalytics.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "//education",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_Education.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/billing",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_Billing.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/work-history",
    element: /*#__PURE__*/_react.default.createElement(_ProtectedRoute.default, null, /*#__PURE__*/_react.default.createElement(_WorkHistory.default, null))
  }));
}
var _default = exports.default = DashboardRoutes;