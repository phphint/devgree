"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _dashboardThunks = require("../dashboardThunks");
var _reactBootstrap = require("react-bootstrap");
var _EditMyProjectsForm = _interopRequireDefault(require("./EditMyProjectsForm"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// MyProjectsList.js

const MyProjectsList = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const projects = (0, _reactRedux.useSelector)(state => state.dashboard.resume.projects);
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [selectedProject, setSelectedProject] = (0, _react.useState)(null);
  const handleDelete = projectId => {
    if (projectId && window.confirm('Are you sure you want to delete this project?')) {
      dispatch((0, _dashboardThunks.deleteItem)({
        section: 'projects',
        itemId: projectId
      }));
    } else {
      console.error('Error: projectId is undefined');
    }
  };
  const handleEdit = project => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const handleAddNew = () => {
    setSelectedProject(null);
    setShowModal(true);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: handleAddNew
  }, "Add New Project"), projects && projects.length > 0 ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, {
    className: "mt-3"
  }, projects.map((project, index) => /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, {
    key: project._id || index,
    className: "d-flex justify-content-between align-items-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ms-2 me-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fw-bold"
  }, project.title)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: () => handleEdit(project),
    style: {
      marginRight: '.5rem'
    }
  }, "Edit"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-danger",
    size: "sm",
    onClick: () => handleDelete(project._id)
  }, "Delete")))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-info mt-3"
  }, "No projects found."), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: showModal,
    onHide: () => setShowModal(false)
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, selectedProject ? 'Edit Project' : 'Add New Project')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_EditMyProjectsForm.default, {
    initialData: selectedProject || {},
    itemId: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject._id,
    closeModal: () => setShowModal(false)
  }))));
};
var _default = exports.default = MyProjectsList;