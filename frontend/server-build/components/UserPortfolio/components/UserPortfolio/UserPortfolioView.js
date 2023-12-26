"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactHelmet = require("react-helmet");
var _Footer = _interopRequireDefault(require("../Footer"));
var _PortfolioNavbar = _interopRequireDefault(require("./PortfolioNavbar"));
var _PortfolioHeader = _interopRequireDefault(require("./PortfolioHeader"));
var _PortfolioMain = _interopRequireDefault(require("./PortfolioMain"));
// userportfolioview.jsx

const UserPortfolioView = () => {
  const isDebugMode = process.env.REACT_APP_DEBUG === "true";
  const portfolioData = (0, _reactRedux.useSelector)(state => state.userPortfolio.data);
  const loading = (0, _reactRedux.useSelector)(state => state.userPortfolio.loading);
  const error = (0, _reactRedux.useSelector)(state => state.userPortfolio.error);
  const pageTitle = portfolioData ? "".concat(portfolioData.profile.fullName, "'s Portfolio") : "User Portfolio";
  const pageDescription = portfolioData ? portfolioData.profile.bio : "Welcome to my professional portfolio.";
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-center align-items-center vh-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner-border text-primary",
      role: "status"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "visually-hidden"
    }, "Loading...")));
  }
  const prettyData = JSON.stringify(portfolioData, null, 2);
  if (portfolioData) {
    if (portfolioData.isPrivate) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-center align-items-center vh-100 bg-dark text-white"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "alert alert-warning",
        role: "alert"
      }, portfolioData.message || "This portfolio is private but you are the owner, all fields are only visible to you while logged in."), /*#__PURE__*/_react.default.createElement("pre", null, prettyData));
    }
  }
  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-center align-items-center vh-100 bg-dark text-white"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, error.message || "This portfolio is private."));
  }
  if (!portfolioData) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-center align-items-center vh-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "alert alert-warning",
      role: "alert"
    }, "No portfolio data available."));
  }

  // If there's data, render the portfolio view
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, pageTitle), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: pageDescription
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:title",
    content: pageTitle
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:description",
    content: pageDescription
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:type",
    content: "website"
  }), portfolioData.profile.profilePicture && /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:image",
    content: "".concat(process.env.REACT_APP_S3_BASE_URL, "/").concat(portfolioData.profile.profilePicture)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "view container  pt-3"
  }, /*#__PURE__*/_react.default.createElement(_PortfolioNavbar.default, null), /*#__PURE__*/_react.default.createElement(_PortfolioHeader.default, null), /*#__PURE__*/_react.default.createElement(_PortfolioMain.default, null)), /*#__PURE__*/_react.default.createElement(_Footer.default, null), isDebugMode && /*#__PURE__*/_react.default.createElement("pre", {
    className: "bg-white text-dark"
  }, prettyData));
};
var _default = exports.default = UserPortfolioView;