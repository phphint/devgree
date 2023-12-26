"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _uiSlice = require("../../reducers/uiSlice");
require("./SideNav.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// adjust the import path as necessary

// Importing your CSS file

const SideNav = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const isSkillsSubMenuOpen = (0, _reactRedux.useSelector)(state => state.ui.isSkillsSubMenuOpen);
  const handleToggleSkillsSubMenu = () => {
    dispatch((0, _uiSlice.toggleSkillsSubMenu)());
  };
  return /*#__PURE__*/_react.default.createElement("nav", {
    id: "sidebarMenu",
    className: "min-vh-100 col-md-3 col-lg-2 d-md-block sidebar collapse bg-dark text-white"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "position-sticky pt-3"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav flex-column"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    "aria-current": "page",
    to: "/dashboard"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-tachometer-alt"
  }), " Dashboard")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/profile"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-user"
  }), " My Profile")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/projects"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-project-diagram"
  }), " My Projects")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/certifications"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-certificate"
  }), " Certifications & Badges")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/testimonials-references"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-users"
  }), " Testimonials & References")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/unified-code-display"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-code-branch"
  }), " Unified Code Display")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/work-history"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-history"
  }), " Work History")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/education"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-code-branch"
  }), " Education")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#skillsSubmenu",
    className: "nav-link text-white d-flex justify-content-between align-items-center",
    "data-bs-toggle": "collapse",
    "aria-expanded": isSkillsSubMenuOpen.toString() // aria-expanded expects a string
    ,
    onClick: handleToggleSkillsSubMenu // use the handler function here
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-layer-group"
  }), " Skills"), /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-caret-down"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse ".concat(isSkillsSubMenuOpen ? "show" : ""),
    id: "skillsSubmenu"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "btn-toggle-nav list-unstyled fw-normal pb-1 small bg-light text-dark"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    to: "/dashboard/skills"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-brain"
  }), " Add/Edit Skills")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    to: "/dashboard/skills-assessment"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-brain"
  }), " Skill Assessments")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    to: "/dashboard/skill-endorsements"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-thumbs-up"
  }), " Skill Endorsements"))))), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/billing"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-file-invoice-dollar"
  }), " Billing")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/settings"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-cog"
  }), " Settings")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/help"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-question-circle"
  }), " Help & Support")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/faqs"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-file-alt"
  }), " FAQs"), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-white",
    to: "/dashboard/portfolio-analytics"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chart-bar"
  }), " Portfolio Analytics"))))));
};
var _default = exports.default = SideNav;