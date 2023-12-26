"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _formik = require("formik");
var Yup = _interopRequireWildcard(require("yup"));
var _reactRedux = require("react-redux");
var _dashboardThunks = require("../dashboardThunks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CertificationSchema = Yup.object().shape({
  name: Yup.string().required("Certification name is required"),
  authority: Yup.string().required("Issuing authority is required"),
  dateObtained: Yup.date().required("Date obtained is required"),
  validUntil: Yup.date(),
  credentialID: Yup.string(),
  credentialURL: Yup.string().url("Invalid URL format")
});
const EditCertificationsForm = _ref => {
  let {
    initialData,
    itemId,
    closeModal
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const formik = (0, _formik.useFormik)({
    initialValues: {
      name: initialData.name || "",
      authority: initialData.authority || "",
      dateObtained: initialData.dateObtained || "",
      validUntil: initialData.validUntil || "",
      credentialID: initialData.credentialID || "",
      credentialURL: initialData.credentialURL || ""
    },
    validationSchema: CertificationSchema,
    onSubmit: values => {
      if (itemId) {
        dispatch((0, _dashboardThunks.editItem)({
          section: "certifications",
          itemId,
          newData: values
        }));
      } else {
        dispatch((0, _dashboardThunks.addItem)({
          section: "certifications",
          newData: values
        }));
      }
      closeModal();
    }
  });
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "container mt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "name",
    className: "form-label"
  }, "Certification Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "name",
    name: "name",
    onChange: formik.handleChange,
    value: formik.values.name
  }), formik.touched.name && formik.errors.name && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "authority",
    className: "form-label"
  }, "Issuing Authority"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "authority",
    name: "authority",
    onChange: formik.handleChange,
    value: formik.values.authority
  }), formik.touched.authority && formik.errors.authority && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.authority)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "dateObtained",
    className: "form-label"
  }, "Date Obtained"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "form-control",
    id: "dateObtained",
    name: "dateObtained",
    onChange: formik.handleChange,
    value: formik.values.dateObtained
  }), formik.touched.dateObtained && formik.errors.dateObtained && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.dateObtained)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "validUntil",
    className: "form-label"
  }, "Valid Until (optional)"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "form-control",
    id: "validUntil",
    name: "validUntil",
    onChange: formik.handleChange,
    value: formik.values.validUntil
  }), formik.touched.validUntil && formik.errors.validUntil && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.validUntil)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "credentialID",
    className: "form-label"
  }, "Credential ID (optional)"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "credentialID",
    name: "credentialID",
    onChange: formik.handleChange,
    value: formik.values.credentialID
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "credentialURL",
    className: "form-label"
  }, "Credential URL (optional)"), /*#__PURE__*/_react.default.createElement("input", {
    type: "url",
    className: "form-control",
    id: "credentialURL",
    name: "credentialURL",
    onChange: formik.handleChange,
    value: formik.values.credentialURL
  }), formik.touched.credentialURL && formik.errors.credentialURL && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.credentialURL)), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save Changes")));
};
var _default = exports.default = EditCertificationsForm;