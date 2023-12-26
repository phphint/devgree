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
// EditSkillsForm.js

const SkillSchema = Yup.object().shape({
  name: Yup.string().required("Skill name is required"),
  level: Yup.string().required("Skill level is required"),
  yearsOfExperience: Yup.string().nullable().transform(value => isNaN(value) ? undefined : value).test("is-number", "Years of experience must be a valid number", value => !value || !isNaN(value)).required("Years of experience is required")
});
const EditSkillsForm = _ref => {
  let {
    initialData,
    itemId,
    closeModal
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();

  // Skill levels options
  const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const formik = (0, _formik.useFormik)({
    initialValues: {
      name: initialData.name || "",
      level: initialData.level || "",
      yearsOfExperience: initialData.yearsOfExperience || ""
    },
    validationSchema: SkillSchema,
    onSubmit: values => {
      if (itemId) {
        dispatch((0, _dashboardThunks.editItem)({
          section: "skills",
          itemId,
          newData: values
        }));
      } else {
        dispatch((0, _dashboardThunks.addItem)({
          section: "skills",
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
  }, "Skill Name"), /*#__PURE__*/_react.default.createElement("input", {
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
    htmlFor: "level",
    className: "form-label"
  }, "Skill Level"), /*#__PURE__*/_react.default.createElement("select", {
    className: "form-control",
    id: "level",
    name: "level",
    onChange: formik.handleChange,
    value: formik.values.level
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select Skill Level"), skillLevels.map(level => /*#__PURE__*/_react.default.createElement("option", {
    key: level,
    value: level
  }, level))), formik.touched.level && formik.errors.level && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.level)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "yearsOfExperience",
    className: "form-label"
  }, "Years of Experience"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    className: "form-control",
    id: "yearsOfExperience",
    name: "yearsOfExperience",
    onChange: formik.handleChange,
    value: formik.values.yearsOfExperience
  }), formik.touched.yearsOfExperience && formik.errors.yearsOfExperience && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.yearsOfExperience)), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save Changes")));
};
var _default = exports.default = EditSkillsForm;