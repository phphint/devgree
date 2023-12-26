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
// editworkhistoryform.js 

// Adjust path as necessary

const WorkHistorySchema = Yup.object().shape({
  company: Yup.string().required('Company name is required'),
  title: Yup.string().required('Title is required'),
  location: Yup.string().required('Location is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date(),
  current: Yup.boolean(),
  description: Yup.string()
});
const EditWorkHistoryForm = _ref => {
  let {
    initialData,
    itemId,
    closeModal
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const formik = (0, _formik.useFormik)({
    initialValues: {
      company: initialData.company || '',
      title: initialData.title || '',
      location: initialData.location || '',
      startDate: initialData.startDate ? initialData.startDate.substring(0, 10) : '',
      endDate: initialData.endDate ? initialData.endDate.substring(0, 10) : '',
      current: initialData.current || false,
      description: initialData.description || ''
    },
    validationSchema: WorkHistorySchema,
    onSubmit: values => {
      if (itemId) {
        dispatch((0, _dashboardThunks.editItem)({
          section: 'workExperience',
          itemId,
          newData: values
        }));
      } else {
        dispatch((0, _dashboardThunks.addItem)({
          section: 'workExperience',
          newData: values
        }));
      }
      closeModal();
    }
  });
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "company",
    className: "form-label"
  }, "Company"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "company",
    name: "company",
    onChange: formik.handleChange,
    value: formik.values.company
  }), formik.touched.company && formik.errors.company && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.company)), /*#__PURE__*/_react.default.createElement("div", {
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
    htmlFor: "location",
    className: "form-label"
  }, "Location"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "location",
    name: "location",
    onChange: formik.handleChange,
    value: formik.values.location
  }), formik.touched.location && formik.errors.location && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.location)), /*#__PURE__*/_react.default.createElement("div", {
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
    value: formik.values.endDate,
    disabled: formik.values.current
  }), formik.touched.endDate && formik.errors.endDate && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.endDate)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "current",
    name: "current",
    onChange: formik.handleChange,
    checked: formik.values.current
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "form-check-label",
    htmlFor: "current"
  }, "Current")), /*#__PURE__*/_react.default.createElement("div", {
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
  }, formik.errors.description)), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save Changes"));
};
var _default = exports.default = EditWorkHistoryForm;