"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _reactRedux = require("react-redux");
var _formik = require("formik");
var Yup = _interopRequireWildcard(require("yup"));
var _profileThunks = require("../profileThunks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// myprofilemain.js

// Adjust path as necessary

const ProfileSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  bio: Yup.string().required("Bio is required"),
  roleTitle: Yup.string().required("Role Title is required"),
  location: Yup.string(),
  phone: Yup.string(),
  videoIntro: Yup.object().shape({
    platform: Yup.string(),
    url: Yup.string().url("Enter a valid URL")
  })
});
const MyProfileMain = () => {
  var _formik$values$videoI, _formik$values$videoI2, _formik$values$videoI3, _formik$touched$video, _formik$errors$videoI, _formik$touched$video2, _formik$errors$videoI2;
  const dispatch = (0, _reactRedux.useDispatch)();
  const userProfile = (0, _reactRedux.useSelector)(state => state.auth); // Access the Redux state
  const [selectedFile, setSelectedFile] = (0, _react.useState)(null);
  const [isSubmitting, setIsSubmitting] = (0, _react.useState)(false);
  const [successMessage, setSuccessMessage] = (0, _react.useState)("");
  const [errorMessage, setErrorMessage] = (0, _react.useState)("");
  // Log Redux state
  console.log("Redux State (userProfile):", userProfile);
  (0, _react.useEffect)(() => {
    console.log("Component Mounted/Updated");
    console.log("Current UserProfile from Redux:", userProfile);
  }, [userProfile]); // Debug: Log when component mounts or userProfile updates

  const formik = (0, _formik.useFormik)({
    initialValues: {
      fullName: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.fullName) || "",
      profilePicture: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.profilePicture) || "",
      bio: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.bio) || "",
      roleTitle: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.roleTitle) || "",
      location: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.location) || "",
      phone: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.phone) || "",
      videoIntro: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.videoIntro) || {
        platform: "",
        url: ""
      }
    },
    validationSchema: ProfileSchema,
    onSubmit: async values => {
      console.log("Form values before processing:", values); // Debug: Inspect initial form values

      if (values.videoIntro.url && !values.videoIntro.platform) {
        formik.setFieldError("videoIntro.platform", "Platform is required when URL is provided");
        return;
      }
      setIsSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");
      const formData = new FormData();
      Object.entries(values).forEach(_ref => {
        let [key, value] = _ref;
        if (key === "videoIntro") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });
      if (selectedFile) {
        formData.append("profilePicture", selectedFile);
      }

      // Debug: Log FormData content (for browsers that support it)
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      try {
        console.log("Dispatching updateProfile action with formData"); // Debug: Log before dispatching
        const actionResult = await dispatch((0, _profileThunks.updateProfileAsync)(formData)).unwrap();
        console.log("updateProfile action result:", actionResult); // Debug: Log the result of the action
        setSuccessMessage("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        setErrorMessage("Failed to update profile. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    enableReinitialize: true // Add this line
  });
  console.log("Formik Initial Values:", formik.values); // Debug: Log Formik initial values
  console.log("Formik Initial videoIntro Values:", formik.values.videoIntro); // Debug: Log Formik initial values

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "pt-3"
  }, "Profile"), successMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-success"
  }, successMessage), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger"
  }, errorMessage), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "fullName",
    className: "form-label"
  }, "Full Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "fullName",
    name: "fullName",
    value: formik.values.fullName,
    onChange: formik.handleChange
  }), formik.touched.fullName && formik.errors.fullName && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.fullName)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "bio",
    className: "form-label"
  }, "Bio"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-control",
    id: "bio",
    name: "bio",
    value: formik.values.bio,
    onChange: formik.handleChange
  }), formik.touched.bio && formik.errors.bio && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.bio)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "roleTitle",
    className: "form-label"
  }, "Role Title"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "roleTitle",
    name: "roleTitle",
    value: formik.values.roleTitle,
    onChange: formik.handleChange
  }), formik.touched.roleTitle && formik.errors.roleTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.roleTitle)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "location",
    className: "form-label"
  }, "Location"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "location",
    name: "location",
    value: formik.values.location,
    onChange: formik.handleChange
  }), formik.touched.location && formik.errors.location && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.location)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "phone",
    className: "form-label"
  }, "Phone"), /*#__PURE__*/_react.default.createElement("input", {
    type: "tel",
    className: "form-control",
    id: "phone",
    name: "phone",
    value: formik.values.phone,
    onChange: formik.handleChange
  }), formik.touched.phone && formik.errors.phone && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.phone)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "platform",
    className: "form-label"
  }, "Video Intro Platform"), /*#__PURE__*/_react.default.createElement("select", {
    className: "form-control",
    id: "platform",
    name: "videoIntro.platform",
    value: (_formik$values$videoI = formik.values.videoIntro) === null || _formik$values$videoI === void 0 ? void 0 : _formik$values$videoI.platform // Access platform safely
    ,
    onChange: formik.handleChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select a platform"), /*#__PURE__*/_react.default.createElement("option", {
    value: "YouTube"
  }, "YouTube"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Vimeo"
  }, "Vimeo"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Dailymotion"
  }, "Dailymotion"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Twitch"
  }, "Twitch"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "url",
    className: "form-label"
  }, "Video Intro URL"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    id: "url",
    name: "videoIntro.url",
    value: (_formik$values$videoI2 = (_formik$values$videoI3 = formik.values.videoIntro) === null || _formik$values$videoI3 === void 0 ? void 0 : _formik$values$videoI3.url) !== null && _formik$values$videoI2 !== void 0 ? _formik$values$videoI2 : "" // Access url safely
    ,
    onChange: formik.handleChange
  }), ((_formik$touched$video = formik.touched.videoIntro) === null || _formik$touched$video === void 0 ? void 0 : _formik$touched$video.url) && ((_formik$errors$videoI = formik.errors.videoIntro) === null || _formik$errors$videoI === void 0 ? void 0 : _formik$errors$videoI.url) && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.videoIntro.url), ((_formik$touched$video2 = formik.touched.videoIntro) === null || _formik$touched$video2 === void 0 ? void 0 : _formik$touched$video2.platform) && ((_formik$errors$videoI2 = formik.errors.videoIntro) === null || _formik$errors$videoI2 === void 0 ? void 0 : _formik$errors$videoI2.platform) && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger"
  }, formik.errors.videoIntro.platform), "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "profilePicture",
    className: "form-label"
  }, "Profile Picture"), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    className: "form-control",
    id: "profilePicture",
    name: "profilePicture",
    onChange: handleFileChange
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary mb-3",
    disabled: isSubmitting
  }, isSubmitting ? "Updating..." : "Update Profile")));
};
var _default = exports.default = MyProfileMain;