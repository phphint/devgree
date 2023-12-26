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
//editeducationform.js

// Import the universal thunks

// Validation Schema
const EducationSchema = Yup.object().shape({
  institution: Yup.string().required("Institution is required"),
  degree: Yup.string(),
  // Made optional
  fieldOfStudy: Yup.string(),
  // Made optional
  startDate: Yup.date(),
  // Made optional
  endDate: Yup.date(),
  description: Yup.string()
});
const EditEducationForm = _ref => {
  let {
    initialData,
    itemId,
    closeModal
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const formik = (0, _formik.useFormik)({
    initialValues: {
      institution: initialData.institution || "",
      degree: initialData.degree || "",
      fieldOfStudy: initialData.fieldOfStudy || "",
      startDate: initialData.startDate || "",
      endDate: initialData.endDate || "",
      description: initialData.description || ""
    },
    validationSchema: EducationSchema,
    onSubmit: values => {
      // Dispatch the editEducation thunk with the item ID and new data
      if (itemId) {
        // If itemId is present, update the existing education entry
        dispatch((0, _dashboardThunks.editItem)({
          section: "education",
          itemId,
          newData: values
        }));
      } else {
        // Add a new education entry
        dispatch((0, _dashboardThunks.addItem)({
          section: "education",
          newData: values
        }));
      }

      // Call the closeModal function after dispatch
      closeModal(); // This will close the modal
    }
  });
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "container mt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "institution",
    className: "form-label"
  }, "Institution"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "institution",
    name: "institution",
    onChange: formik.handleChange,
    value: formik.values.institution,
    placeholder: "Institution"
  }), formik.touched.institution && formik.errors.institution && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.institution)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "degree",
    className: "form-label"
  }, "Degree"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "degree",
    name: "degree",
    onChange: formik.handleChange,
    value: formik.values.degree,
    placeholder: "Degree"
  }), formik.touched.degree && formik.errors.degree && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.degree)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "fieldOfStudy",
    className: "form-label"
  }, "Field of Study"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "fieldOfStudy",
    name: "fieldOfStudy",
    onChange: formik.handleChange,
    value: formik.values.fieldOfStudy,
    placeholder: "Field of Study"
  }), formik.touched.fieldOfStudy && formik.errors.fieldOfStudy && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.fieldOfStudy)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "startDate",
    className: "form-label"
  }, "Start Date"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "form-control",
    id: "startDate",
    name: "startDate",
    onChange: formik.handleChange,
    value: formik.values.startDate
  }), formik.touched.startDate && formik.errors.startDate && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.startDate)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "endDate",
    className: "form-label"
  }, "End Date"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "form-control",
    id: "endDate",
    name: "endDate",
    onChange: formik.handleChange,
    value: formik.values.endDate
  }), formik.touched.endDate && formik.errors.endDate && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.endDate)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "description",
    className: "form-label"
  }, "Description"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-control",
    id: "description",
    name: "description",
    onChange: formik.handleChange,
    value: formik.values.description,
    placeholder: "Description"
  }), formik.touched.description && formik.errors.description && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save Changes")));
};
var _default = exports.default = EditEducationForm;