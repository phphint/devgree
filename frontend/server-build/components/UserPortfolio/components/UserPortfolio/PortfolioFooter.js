"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
// PortfolioFooter.jsx

const PortfolioFooter = () => {
  // console.log('Rendering PortfolioFooter');

  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer mt-auto py-3 bg-light text-dark"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-muted"
  }, "Place sticky footer content here.")));
};
var _default = exports.default = PortfolioFooter;