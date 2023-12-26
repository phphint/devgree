"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Elevate_Your_Tech_Portfolio = _interopRequireDefault(require("../assets/images/Elevate_Your_Tech_Portfolio.jpg"));
// Adjust the path as necessary

const Banner = () => {
  const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'; // Fallback to localhost if the environment variable is not set

  return /*#__PURE__*/React.createElement("div", {
    className: "text-center py-5 bg-white text-dark mb-0 pb-0"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-4 fw-bold"
  }, "Elevate Your Tech Portfolio"), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6 mx-auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead mb-4"
  }, "Step into a new era of showcasing. Upload your projects and skills on your personalized page today, and let our comprehensive skills assessments feature highlight your technical proficiencies to potential employers and peers."), /*#__PURE__*/React.createElement("div", {
    className: "d-grid gap-2 d-sm-flex justify-content-sm-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "".concat(baseURL, "/portfolio/654bca4fc5b943e712bc2518"),
    className: "btn btn-primary btn-lg px-4 gap-3"
  }, "Example Portfolio"))), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden",
    style: {
      maxHeight: '40vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container col-lg-6 mx-auto"
  }, /*#__PURE__*/React.createElement("img", {
    src: _Elevate_Your_Tech_Portfolio.default,
    className: "img-fluid border rounded-3 shadow-lg mb-4 mx-auto mt-5",
    alt: "Elevate Your Tech Portfolio",
    width: "700",
    height: "500",
    loading: "lazy"
  }))));
};
var _default = exports.default = Banner;