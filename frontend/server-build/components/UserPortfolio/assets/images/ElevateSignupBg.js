"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _elevateSignupBg = _interopRequireDefault(require("./elevate-signup-bg.png"));
// BackgroundImage.js

const BackgroundImage = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("section", {
    style: {
      backgroundImage: "url(".concat(_elevateSignupBg.default, ")"),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  }, children);
};
var _default = exports.default = BackgroundImage;