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
//editrepositoryform.js

const RepositorySchema = Yup.object().shape({
  platform: Yup.string().required("Platform is required"),
  repoUrl: Yup.string().required("Repository URL is required").url("Enter a valid URL") // Adding URL validation
});

// List of git repository platforms
const platforms = ['GitHub', 'GitLab', 'Bitbucket', 'SourceForge', 'Azure DevOps', 'AWS CodeCommit', 'Google Cloud Source Repositories', 'Atlassian Stash', 'Beanstalk', 'Codebase', 'Assembla', 'Gitea', 'Gogs', 'Perforce Helix Core', 'Phabricator', 'Rational Team Concert', 'Subversion (SVN)', 'Mercurial', 'Fossil', 'Other' // Keeping 'Other' as an option for any not listed
];
const EditRepositoryForm = _ref => {
  let {
    initialData,
    itemId,
    closeModal
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const formik = (0, _formik.useFormik)({
    initialValues: {
      platform: initialData.platform || "",
      repoUrl: initialData.repoUrl || ""
    },
    validationSchema: RepositorySchema,
    onSubmit: values => {
      if (itemId) {
        dispatch((0, _dashboardThunks.editItem)({
          section: "repositories",
          itemId,
          newData: values
        }));
      } else {
        dispatch((0, _dashboardThunks.addItem)({
          section: "repositories",
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
    htmlFor: "platform",
    className: "form-label"
  }, "Platform"), /*#__PURE__*/_react.default.createElement("select", {
    className: "form-select",
    id: "platform",
    name: "platform",
    onChange: formik.handleChange,
    value: formik.values.platform
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select a platform"), platforms.map(platform => /*#__PURE__*/_react.default.createElement("option", {
    key: platform,
    value: platform
  }, platform))), formik.touched.platform && formik.errors.platform && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.platform)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "repoUrl",
    className: "form-label"
  }, "Repository URL"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "repoUrl",
    name: "repoUrl",
    onChange: formik.handleChange,
    value: formik.values.repoUrl,
    placeholder: "Repository URL"
  }), formik.touched.repoUrl && formik.errors.repoUrl && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.repoUrl)), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save Changes")));
};
var _default = exports.default = EditRepositoryForm;