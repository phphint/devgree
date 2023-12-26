"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _formik = require("formik");
var Yup = _interopRequireWildcard(require("yup"));
var _dashboardThunks = require("./dashboardThunks");
var _index = _interopRequireDefault(require("./TopNav/index"));
var _SideNav = _interopRequireDefault(require("./SideNav"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _PortfolioDataFetcher = _interopRequireDefault(require("./hooks/PortfolioDataFetcher.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Create this thunk for updating settings

const SettingsSchema = Yup.object().shape({
  privacy: Yup.string().required("Privacy setting is required"),
  notifications: Yup.boolean(),
  profileSlug: Yup.string()
  // Add other fields as necessary
});
const Settings = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const settings = (0, _reactRedux.useSelector)(state => state.dashboard.settings) || {}; // Add a fallback to an empty object
  const [isSubmitting, setIsSubmitting] = (0, _react.useState)(false);
  const [successMessage, setSuccessMessage] = (0, _react.useState)("");
  const [errorMessage, setErrorMessage] = (0, _react.useState)("");
  const formik = (0, _formik.useFormik)({
    initialValues: {
      privacy: settings.privacy || "private",
      notifications: settings.notifications || false,
      profileSlug: settings.profileSlug || ""
      // Initialize other fields if necessary
    },
    validationSchema: SettingsSchema,
    onSubmit: async values => {
      setIsSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");
      try {
        await dispatch((0, _dashboardThunks.updateSettings)(values)).unwrap(); // Assuming updateSettings is an async thunk
        setSuccessMessage("Settings updated successfully!");
      } catch (error) {
        setErrorMessage("Failed to update settings. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_SideNav.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Settings"), /*#__PURE__*/_react.default.createElement(_PortfolioDataFetcher.default, null), successMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-success"
  }, successMessage), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger"
  }, errorMessage), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "container mt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "privacy",
    className: "form-label"
  }, "Privacy"), /*#__PURE__*/_react.default.createElement("select", {
    id: "privacy",
    name: "privacy",
    onChange: formik.handleChange,
    value: formik.values.privacy,
    className: "form-control"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "public"
  }, "Public"), /*#__PURE__*/_react.default.createElement("option", {
    value: "private"
  }, "Private"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "notifications",
    name: "notifications",
    onChange: formik.handleChange,
    checked: formik.values.notifications,
    className: "form-check-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "notifications",
    className: "form-check-label"
  }, "Enable Notifications")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "profileSlug",
    className: "form-label"
  }, "Profile Slug"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "profileSlug",
    name: "profileSlug",
    onChange: formik.handleChange,
    value: formik.values.profileSlug,
    className: "form-control"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: isSubmitting
  }, isSubmitting ? "Saving..." : "Save Changes"))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};
var _default = exports.default = Settings;