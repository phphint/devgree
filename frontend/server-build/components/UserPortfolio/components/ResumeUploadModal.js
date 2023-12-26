"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _reactRedux = require("react-redux");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ResumeUploadModal = () => {
  const [show, setShow] = (0, _react.useState)(false);
  const [message, setMessage] = (0, _react.useState)('');
  const token = (0, _reactRedux.useSelector)(state => state.auth.token); // Retrieve the token from the auth slice

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFileUpload = async e => {
    e.preventDefault();
    const file = e.target.elements.resumeFile.files[0];
    if (!file) {
      console.error("No file selected");
      setMessage("Please select a file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("resume", file);
    try {
      const response = await fetch("".concat(process.env.REACT_APP_API_URL, "/import-resume"), {
        method: "POST",
        body: formData,
        headers: {
          'Authorization': "Bearer ".concat(token) // Include the token in the request headers
        }
      });
      if (!response.ok) {
        throw new Error("HTTP error! Status: ".concat(response.status));
      }
      const result = await response.json();
      console.log("Upload successful:", result);
      setMessage("Resume successfully uploaded.");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed: ".concat(error.message));
    }
  };
  try {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      variant: "primary",
      onClick: handleShow
    }, "Import R\xE9sum\xE9"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
      show: show,
      onHide: handleClose,
      animation: false
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, "Import Resume")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, {
      onSubmit: handleFileUpload
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
      className: "mb-3"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
      htmlFor: "resumeFile"
    }, "Upload your r\xE9sum\xE9"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
      type: "file",
      id: "resumeFile",
      accept: ".pdf,.doc,.docx"
    })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      variant: "primary",
      type: "submit"
    }, "Upload")), message && /*#__PURE__*/_react.default.createElement("div", {
      className: "alert alert-info mt-3"
    }, message))));
  } catch (error) {
    console.error(error);
  }
};
var _default = exports.default = ResumeUploadModal;