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
// EditMyProjectsForm.js

// Validation schema for the project form
const ProjectSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  role: Yup.string().required('Role is required'),
  technologies: Yup.array().of(Yup.string()).required('Technologies are required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date(),
  url: Yup.string().url('Enter a valid URL').nullable()
});
const EditMyProjectsForm = _ref => {
  let {
    initialData,
    itemId,
    closeModal
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const formik = (0, _formik.useFormik)({
    initialValues: {
      title: initialData.title || '',
      description: initialData.description || '',
      role: initialData.role || '',
      technologies: initialData.technologies || [],
      startDate: initialData.startDate ? initialData.startDate.substring(0, 10) : '',
      // YYYY-MM-DD
      endDate: initialData.endDate ? initialData.endDate.substring(0, 10) : '',
      url: initialData.url || ''
    },
    validationSchema: ProjectSchema,
    onSubmit: values => {
      if (itemId) {
        dispatch((0, _dashboardThunks.editItem)({
          section: 'projects',
          itemId,
          newData: values
        }));
      } else {
        dispatch((0, _dashboardThunks.addItem)({
          section: 'projects',
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
    htmlFor: "title",
    className: "form-label"
  }, "Title"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "title",
    name: "title",
    onChange: formik.handleChange,
    value: formik.values.title
  }), formik.touched.title && formik.errors.title && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "description",
    className: "form-label"
  }, "Description"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-control",
    id: "description",
    name: "description",
    onChange: formik.handleChange,
    value: formik.values.description
  }), formik.touched.description && formik.errors.description && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "role",
    className: "form-label"
  }, "Role"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "role",
    name: "role",
    onChange: formik.handleChange,
    value: formik.values.role
  }), formik.touched.role && formik.errors.role && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.role)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "technologies",
    className: "form-label"
  }, "Technologies"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "technologies",
    name: "technologies",
    onChange: formik.handleChange,
    value: formik.values.technologies.join(', '),
    placeholder: "Enter technologies separated by commas"
  }), formik.touched.technologies && formik.errors.technologies && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.technologies)), /*#__PURE__*/_react.default.createElement("div", {
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
    htmlFor: "url",
    className: "form-label"
  }, "URL"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "url",
    name: "url",
    onChange: formik.handleChange,
    value: formik.values.url
  }), formik.touched.url && formik.errors.url && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.url)), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save Changes")));
};
var _default = exports.default = EditMyProjectsForm;