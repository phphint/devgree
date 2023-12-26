"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _reactRedux = require("react-redux");
var _authSlice = require("../reducers/authSlice");
var _reactRouterDom = require("react-router-dom");
var _jsCookie = _interopRequireDefault(require("js-cookie"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Location: /src/components/LoginForm.jsx

// Import the action
// Import useNavigate hook

const LoginForm = _ref => {
  let {
    handleClose
  } = _ref;
  const [email, setEmail] = (0, _react.useState)("");
  const [password, setPassword] = (0, _react.useState)("");
  const [remember, setRemember] = (0, _react.useState)(false);
  const [errorMessage, setErrorMessage] = (0, _react.useState)(null);
  const [successMessage, setSuccessMessage] = (0, _react.useState)(null); // New success message state
  const dispatch = (0, _reactRedux.useDispatch)();
  const navigate = (0, _reactRouterDom.useNavigate)(); // Initialize useNavigate hook

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await _axios.default.post("".concat(process.env.REACT_APP_API_URL, "/login"), {
        email,
        password
      });

      // Destructure the response to get all required fields
      const {
        token,
        userId,
        fullName,
        profilePicture,
        email: userEmail,
        bio,
        roleTitle,
        location,
        phone,
        videoIntro
      } = response.data;

      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      // Set the cookie
      // Cookie.set("authToken", token, { expires: 33 }); // Expires in 7 days

      // Dispatch the login action with all the fields
      dispatch((0, _authSlice.login)({
        token,
        userId,
        fullName,
        profilePicture,
        email: userEmail,
        // Rename to avoid shadowing the email state
        bio,
        roleTitle,
        location,
        phone,
        videoIntro
      }));
      setSuccessMessage("Logged in successfully!"); // Set success message on successful login

      document.querySelector(".modal button.btn-close").click();
      navigate("/dashboard"); // Redirect to /dashboard on successful login

      setSuccessMessage("Logged in successfully!"); // Set success message on successful login

      document.querySelector(".modal button.btn-close").click();
      navigate("/dashboard"); // Redirect to /dashboard on successful login
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Unauthorized: Incorrect email or password.");
      } else if (error.response && error.response.data) {
        console.error("Error logging in:", error.response.data.message);
        setErrorMessage(error.response.data.message);
      } else {
        console.error("Error logging in:", error.message);
        setErrorMessage("There was an unexpected error. Please try again.");
      }
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
  }, successMessage), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "form-control",
    id: "loginFloatingInput",
    placeholder: "name@example.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "loginFloatingInput"
  }, "Email address")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "form-control",
    id: "loginFloatingPassword",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "loginFloatingPassword"
  }, "Password")), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    value: "remember-me",
    checked: remember,
    onChange: () => setRemember(prev => !prev)
  }), "Remember me")), /*#__PURE__*/_react.default.createElement("button", {
    className: "w-100 btn btn-lg elevate-custom-button text-white",
    type: "submit"
  }, "Login"), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-4"
  }), /*#__PURE__*/_react.default.createElement("small", {
    className: "text-muted"
  }, "By logging in, you agree to our terms of use."));
};
var _default = exports.default = LoginForm;