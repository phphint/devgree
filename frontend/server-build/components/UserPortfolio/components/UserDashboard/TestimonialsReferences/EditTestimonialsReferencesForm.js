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
const TestimonialSchema = Yup.object().shape({
  authorName: Yup.string().required("Author name is required"),
  relationship: Yup.string().required("Relationship is required"),
  testimonial: Yup.string().required("Testimonial is required"),
  dateGiven: Yup.date().required("Date is required")
});
const EditTestimonialsReferencesForm = _ref => {
  let {
    initialData,
    itemId,
    closeModal
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const formik = (0, _formik.useFormik)({
    initialValues: {
      authorName: initialData.authorName || "",
      relationship: initialData.relationship || "",
      testimonial: initialData.testimonial || "",
      dateGiven: initialData.dateGiven || ""
    },
    validationSchema: TestimonialSchema,
    onSubmit: values => {
      if (itemId) {
        dispatch((0, _dashboardThunks.editItem)({
          section: "testimonials",
          itemId,
          newData: values
        }));
      } else {
        dispatch((0, _dashboardThunks.addItem)({
          section: "testimonials",
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
    htmlFor: "authorName",
    className: "form-label"
  }, "Author Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "authorName",
    name: "authorName",
    onChange: formik.handleChange,
    value: formik.values.authorName
  }), formik.touched.authorName && formik.errors.authorName && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.authorName)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "relationship",
    className: "form-label"
  }, "Relationship"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "relationship",
    name: "relationship",
    onChange: formik.handleChange,
    value: formik.values.relationship
  }), formik.touched.relationship && formik.errors.relationship && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.relationship)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "testimonial",
    className: "form-label"
  }, "Testimonial"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-control",
    id: "testimonial",
    name: "testimonial",
    onChange: formik.handleChange,
    value: formik.values.testimonial
  }), formik.touched.testimonial && formik.errors.testimonial && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.testimonial)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "dateGiven",
    className: "form-label"
  }, "Date Given"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "form-control",
    id: "dateGiven",
    name: "dateGiven",
    onChange: formik.handleChange,
    value: formik.values.dateGiven
  }), formik.touched.dateGiven && formik.errors.dateGiven && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.dateGiven)), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save Changes")));
};
var _default = exports.default = EditTestimonialsReferencesForm;