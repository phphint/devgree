"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
const UserInfo = () => {
  const email = (0, _reactRedux.useSelector)(state => state.userPortfolio.data.email);
  const profile = (0, _reactRedux.useSelector)(state => state.userPortfolio.data.profile);
  const languages = (0, _reactRedux.useSelector)(state => {
    var _state$userPortfolio$, _state$userPortfolio$2;
    return (_state$userPortfolio$ = (_state$userPortfolio$2 = state.userPortfolio.resume) === null || _state$userPortfolio$2 === void 0 || (_state$userPortfolio$2 = _state$userPortfolio$2.languages) === null || _state$userPortfolio$2 === void 0 ? void 0 : _state$userPortfolio$2.map(lang => "".concat(lang.language, " (").concat(lang.proficiency, ")")).join(', ')) !== null && _state$userPortfolio$ !== void 0 ? _state$userPortfolio$ : 'Languages not available';
  });
  const location = (profile === null || profile === void 0 ? void 0 : profile.location) || 'Location not available';
  const phone = (profile === null || profile === void 0 ? void 0 : profile.phone) || 'Phone not available';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container shadow-wrapper  "
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: " "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row navbar-height bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-map-marker-alt me-2"
  }), /*#__PURE__*/_react.default.createElement("span", null, location)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-envelope me-2"
  }), /*#__PURE__*/_react.default.createElement("span", null, email)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-phone me-2"
  }), /*#__PURE__*/_react.default.createElement("span", null, phone)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-3 d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-language me-2"
  }), /*#__PURE__*/_react.default.createElement("span", null, languages)))));
};
var _default = exports.default = UserInfo;