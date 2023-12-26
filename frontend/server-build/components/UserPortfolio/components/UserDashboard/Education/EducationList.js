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
var _EditEducationForm = _interopRequireDefault(require("./EditEducationForm"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// educationlist.js

const EducationList = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const education = (0, _reactRedux.useSelector)(state => state.dashboard.resume.education);
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [selectedEducation, setSelectedEducation] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    console.log('Current education state:', education);
  }, [education]);
  const handleDelete = itemId => {
    if (itemId && window.confirm('Are you sure you want to delete this item?')) {
      dispatch((0, _dashboardThunks.deleteItem)({
        section: 'education',
        itemId
      }));
    } else {
      console.error('Error: itemId is undefined');
    }
  };
  const handleEdit = educationEntry => {
    setSelectedEducation(educationEntry);
    setShowModal(true);
  };
  const handleAddNew = () => {
    setSelectedEducation(null);
    setShowModal(true);
  };
  if (!education.length) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "alert alert-info"
    }, "No education records found.");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: handleAddNew
  }, "Add New"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, {
    className: "mt-3"
  }, education.map(entry => /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, {
    key: entry._id,
    className: "d-flex justify-content-between align-items-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ms-2 me-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fw-bold"
  }, entry.institution), entry.degree), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm me-2",
    onClick: () => handleEdit(entry)
  }, "Edit"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-danger",
    size: "sm",
    onClick: () => handleDelete(entry._id)
  }, "Delete")))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: showModal,
    onHide: () => setShowModal(false)
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, selectedEducation ? 'Edit Education' : 'Add New Education')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_EditEducationForm.default, {
    initialData: selectedEducation || {},
    itemId: selectedEducation === null || selectedEducation === void 0 ? void 0 : selectedEducation._id,
    closeModal: () => setShowModal(false)
  }))));
};
var _default = exports.default = EducationList;