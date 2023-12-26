"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
const ContactForm = () => {
  // Access the Redux state
  const fullName = (0, _reactRedux.useSelector)(state => state.auth.fullName);
  const email = (0, _reactRedux.useSelector)(state => state.auth.email);

  // Add a submit handler if needed
  const handleSubmit = e => {
    e.preventDefault();
    // Handle the form submission
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "p-4 p-md-5 border rounded-3 bg-light text-dark",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "floatingFullName",
    name: "fullName",
    placeholder: "John Doe",
    defaultValue: fullName // Use defaultValue for uncontrolled component
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "floatingFullName"
  }, "Full Name")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "form-control",
    id: "floatingEmail",
    name: "email",
    placeholder: "name@example.com",
    defaultValue: email // Use defaultValue for uncontrolled component
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "floatingEmail"
  }, "Email address")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "floatingSubject",
    name: "subject",
    placeholder: "Subject"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "floatingSubject"
  }, "Subject")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-control",
    id: "floatingMessage",
    name: "message",
    placeholder: "Your message...",
    style: {
      height: '100px'
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "floatingMessage"
  }, "Message")), /*#__PURE__*/_react.default.createElement("button", {
    className: "w-100 btn btn-lg elevate-custom-button text-white",
    type: "submit"
  }, "Send Message"), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-4"
  }), /*#__PURE__*/_react.default.createElement("small", {
    className: "text-muted"
  }, "We respect your privacy and will not share your information."));
};
var _default = exports.default = ContactForm;