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
var _EditSkillsForm = _interopRequireDefault(require("./EditSkillsForm"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// SkillsList.js

const SkillsList = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const skills = (0, _reactRedux.useSelector)(state => state.dashboard.resume.skills);
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [selectedSkill, setSelectedSkill] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    console.log('Current skills state:', skills);
  }, [skills]);
  const handleDelete = skillId => {
    if (skillId && window.confirm('Are you sure you want to delete this skill?')) {
      dispatch((0, _dashboardThunks.deleteItem)({
        section: 'skills',
        itemId: skillId
      }));
    } else {
      console.error('Error: skillId is undefined');
    }
  };
  const handleEdit = skill => {
    setSelectedSkill(skill);
    setShowModal(true);
  };
  const handleAddNew = () => {
    setSelectedSkill(null);
    setShowModal(true);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: handleAddNew
  }, "Add New Skill"), skills && skills.length > 0 ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, {
    className: "mt-3"
  }, skills.map((skill, index) => /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, {
    key: skill._id || index,
    className: "d-flex justify-content-between align-items-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ms-2 me-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fw-bold"
  }, skill.name), "Level: ", skill.level, " - Years of Experience: ", skill.yearsOfExperience), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-secondary",
    size: "sm me-2",
    onClick: () => handleEdit(skill)
  }, "Edit"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-danger",
    size: "sm",
    onClick: () => handleDelete(skill._id)
  }, "Delete")))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-info mt-3"
  }, "No skills found."), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: showModal,
    onHide: () => setShowModal(false)
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, selectedSkill ? 'Edit Skill' : 'Add New Skill')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_EditSkillsForm.default, {
    initialData: selectedSkill || {},
    itemId: selectedSkill === null || selectedSkill === void 0 ? void 0 : selectedSkill._id,
    closeModal: () => setShowModal(false)
  }))));
};
var _default = exports.default = SkillsList;