"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactGoogleRecaptcha = _interopRequireDefault(require("react-google-recaptcha"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RegForm = () => {
  const [fullName, setFullName] = (0, _react.useState)("");
  const [email, setEmail] = (0, _react.useState)("");
  const [password, setPassword] = (0, _react.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, _react.useState)("");
  const [errorMessage, setErrorMessage] = (0, _react.useState)(null);
  const [successMessage, setSuccessMessage] = (0, _react.useState)(null); // State for success message

  // Ref for the invisible reCAPTCHA
  const recaptchaRef = (0, _react.useRef)(null);

  // Generate unique IDs for each form field
  const uniqueId = (0, _react.useMemo)(() => Math.random().toString(36).substr(2, 9), []);
  const fullNameId = "floatingFullName-".concat(uniqueId);
  const emailId = "floatingInput-".concat(uniqueId);
  const passwordId = "floatingPassword-".concat(uniqueId);
  const confirmPasswordId = "floatingConfirmPassword-".concat(uniqueId);
  const handleSubmit = async event => {
    event.preventDefault();
    // Clear any existing messages
    setErrorMessage(null);
    setSuccessMessage(null);
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Execute reCAPTCHA and get the token
    const recaptchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    const user = {
      email,
      password,
      profile: {
        fullName // This places fullName inside the profile object, as expected by your Mongoose model.
      },
      recaptchaToken // Add this line to include the token
    };
    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';
      const response = await fetch("".concat(API_BASE_URL, "/register"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user) // Send the structured user object
      });
      const data = await response.json();
      if (response.ok) {
        // Handle success
        setSuccessMessage(data.message || "Registered successfully!"); // Set success message
        document.querySelector('.modal button.btn-close').click();
      } else {
        setErrorMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Failed to register:", error);
      setErrorMessage("Something went wrong! Please try again later.");
    }
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: "p-4 p-md-5 border rounded-3 bg-light text-dark"
  }, errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, errorMessage), successMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-success",
    role: "alert"
  }, " ", successMessage), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: fullNameId,
    placeholder: "John Doe",
    value: fullName,
    onChange: e => setFullName(e.target.value),
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: fullNameId
  }, "Full Name")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "form-control",
    id: emailId,
    placeholder: "name@example.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: emailId
  }, "Email address")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "form-control",
    id: passwordId,
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: passwordId
  }, "Password")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "form-control",
    id: confirmPasswordId,
    placeholder: "Confirm Password",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value),
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: confirmPasswordId
  }, "Confirm Password")), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    value: "remember-me"
  }), " Remember me")), /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptcha.default, {
    ref: recaptchaRef,
    size: "invisible",
    sitekey: process.env.REACT_APP_RECAPTCHA_SITE_KEY // Replace with your reCAPTCHA site key
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "w-100 btn btn-lg elevate-custom-button text-white",
    type: "submit"
  }, "Sign Up for Free"), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-4"
  }), /*#__PURE__*/_react.default.createElement("small", {
    className: "text-muted"
  }, "By clicking Sign up, you agree to the terms of use."));
};
var _default = exports.default = RegForm;