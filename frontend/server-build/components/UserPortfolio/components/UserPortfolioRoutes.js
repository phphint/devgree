"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _UserPortfolio = require("./UserPortfolio");
// UserPortfolioRoutes.jsx

const UserPortfolioRoutes = () => {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: ":id",
    element: /*#__PURE__*/_react.default.createElement(_UserPortfolio.UserPortfolioContainer, null)
  }));
};
var _default = exports.default = UserPortfolioRoutes;