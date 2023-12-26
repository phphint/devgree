"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactBootstrap = require("react-bootstrap");
var _EditWorkHistoryForm = _interopRequireDefault(require("./EditWorkHistoryForm"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WorkHistoryList = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const workHistory = (0, _reactRedux.useSelector)(state => state.dashboard.resume.workExperience);
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [selectedWork, setSelectedWork] = (0, _react.useState)(null);
  const handleDelete = workId => {
    // Dispatch an action to delete work history (to be implemented)
  };
  const handleEdit = work => {
    setSelectedWork(work);
    setShowModal(true);
  };
  const handleAddNew = () => {
    setSelectedWork(null);
    setShowModal(true);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: handleAddNew
  }, "Add New Work History"), workHistory.length > 0 ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, {
    className: "mt-3"
  }, workHistory.map((work, index) => /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, {
    key: work._id || index,
    className: "d-flex justify-content-between align-items-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ms-2 me-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fw-bold"
  }, work.title, " at ", work.company), work.description), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm",
    onClick: () => handleEdit(work)
  }, "Edit"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-danger",
    size: "sm",
    onClick: () => handleDelete(work._id)
  }, "Delete")))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-info mt-3"
  }, "No work history found."), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: showModal,
    onHide: () => setShowModal(false)
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, selectedWork ? 'Edit Work History' : 'Add New Work History')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_EditWorkHistoryForm.default, {
    initialData: selectedWork || {},
    itemId: selectedWork === null || selectedWork === void 0 ? void 0 : selectedWork._id,
    closeModal: () => setShowModal(false)
  }))));
};
var _default = exports.default = WorkHistoryList;