"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
const UserInfo = () => {
  var _resume$languages$map, _resume$languages, _profile$fullName, _profile$bio, _profile$roleTitle, _resume$skills, _resume$projects, _resume$workExperienc;
  const getPlatformIcon = platform => {
    const icons = {
      GitHub: "fab fa-github",
      GitLab: "fab fa-gitlab",
      Bitbucket: "fab fa-bitbucket",
      "Azure DevOps": "fas fa-code-branch",
      // Default to a generic code-related icon
      "AWS CodeCommit": "fab fa-aws",
      "Google Cloud Source Repositories": "fab fa-google",
      "Atlassian Stash": "fab fa-bitbucket" // Now known as Bitbucket Server
      // Add more platforms and corresponding icons here
    };
    return icons[platform] || "fas fa-code-branch"; // Default icon for platforms without a specific icon
  };
  const {
    profile,
    resume,
    repositories
  } = (0, _reactRedux.useSelector)(state => state.userPortfolio.data);
  const languages = (_resume$languages$map = resume === null || resume === void 0 || (_resume$languages = resume.languages) === null || _resume$languages === void 0 ? void 0 : _resume$languages.map(lang => "".concat(lang.language, " (").concat(lang.proficiency, ")")).join(", ")) !== null && _resume$languages$map !== void 0 ? _resume$languages$map : "Languages not available";
  const fullName = (_profile$fullName = profile === null || profile === void 0 ? void 0 : profile.fullName) !== null && _profile$fullName !== void 0 ? _profile$fullName : "Name not available";
  const bio = (_profile$bio = profile === null || profile === void 0 ? void 0 : profile.bio) !== null && _profile$bio !== void 0 ? _profile$bio : "Bio not available";
  const roleTitle = (_profile$roleTitle = profile === null || profile === void 0 ? void 0 : profile.roleTitle) !== null && _profile$roleTitle !== void 0 ? _profile$roleTitle : "Role not specified";
  const profilePictureUrl = profile !== null && profile !== void 0 && profile.profilePicture ? "".concat(process.env.REACT_APP_S3_BASE_URL, "/").concat(profile.profilePicture) : null;
  const formatDate = date => {
    if (!date) return "Present";
    return new Date(date).toLocaleDateString();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container bg-grey"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " justify-content-between w-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-md d-flex flex-column align-items-end ps-0 ",
    style: {
      marginBottom: "-2px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body mb-0 pb-3"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "card-title"
  }, "About"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, bio)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-md d-flex flex-column align-items-end ps-0 pe-1",
    style: {
      marginBottom: "-2px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body mt-0 pt-3 pb-0"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "card-title "
  }, "Skills"), /*#__PURE__*/_react.default.createElement("div", null, resume === null || resume === void 0 || (_resume$skills = resume.skills) === null || _resume$skills === void 0 ? void 0 : _resume$skills.map(skill => /*#__PURE__*/_react.default.createElement("span", {
    key: skill._id,
    className: "badge bg-primary me-2"
  }, skill.name))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 mt-2"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "card-title"
  }, "Repos"), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, repositories === null || repositories === void 0 ? void 0 : repositories.map(repo => /*#__PURE__*/_react.default.createElement("span", {
    key: repo._id,
    className: "badge bg-secondary me-2 mb-2"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(getPlatformIcon(repo.platform), " me-2")
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: repo.repoUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-decoration-none text-white"
  }, repo.platform))))), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-secondary w-100"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-download me-2"
  }), " Download Resume")))))), (profile === null || profile === void 0 ? void 0 : profile.profilePicture) && /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-md d-flex flex-column align-items-start pe-0 ps-2",
    style: {
      marginBottom: "-2px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body text-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: profilePictureUrl,
    alt: "Profile",
    className: "img-fluid mb-3"
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-primary w-100 mt-3"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-envelope me-2 "
  }), " Message"))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "row bg-dark text-white p-3 small gx-2",
    style: {
      marginLeft: "-16px",
      marginRight: "-16px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-certificate me-2"
  }), " Devgree Ethical Hacker Assessment", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-check-circle me-1"
  }), "Passed on 01/01/2021")), /*#__PURE__*/_react.default.createElement("div", {
    class: "col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-certificate me-2"
  }), " Devgree Network Associate Assessment", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-check-circle me-1"
  }), "Passed on 02/01/2021")), /*#__PURE__*/_react.default.createElement("div", {
    class: "col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-certificate me-2"
  }), " Devgree: Data Analyst Assessment", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-check-circle me-1"
  }), "Passed on 03/01/2021")), /*#__PURE__*/_react.default.createElement("div", {
    class: "col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-certificate me-2"
  }), " Devgree Solutions Assessment", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-check-circle me-1"
  }), "Passed on 04/01/2021"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row  bg-dark"
  }, (resume === null || resume === void 0 ? void 0 : resume.education) && resume.education.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 ps-0 pe-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "card-title"
  }, "Projects"), resume === null || resume === void 0 || (_resume$projects = resume.projects) === null || _resume$projects === void 0 ? void 0 : _resume$projects.map(project => /*#__PURE__*/_react.default.createElement("div", {
    key: project._id
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-green",
    href: ""
  }, project.title), /*#__PURE__*/_react.default.createElement("p", null, " ", /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "JavaScript"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "ReactJS"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "Node.js"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "PHP"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "MySQL"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "MongoDB"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "AWS Lambda"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "Laravel"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "MVC"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "OOP"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "Bootstrap"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "Express.js"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "REST"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "SQLite"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "GraphQL"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "passport.js"), /*#__PURE__*/_react.default.createElement("span", {
    class: "badge bg-primary me-2"
  }, "APIs"))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "card-title"
  }, "Education"), resume.education.map(edu => /*#__PURE__*/_react.default.createElement("div", {
    key: edu._id
  }, /*#__PURE__*/_react.default.createElement("b", null, edu.institution), /*#__PURE__*/_react.default.createElement("p", null, edu.degree), /*#__PURE__*/_react.default.createElement("hr", null)))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "responsive-iframe"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    src: "https://www.youtube.com/embed/gyFaBZ_BQhc",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6  pe-0 ps-0 mt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-green text-white"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "card-title"
  }, "Employment History"), resume === null || resume === void 0 || (_resume$workExperienc = resume.workExperience) === null || _resume$workExperienc === void 0 ? void 0 : _resume$workExperienc.map(exp => /*#__PURE__*/_react.default.createElement("div", {
    key: exp._id,
    className: "border-bottom pb-3 mb-3"
  }, /*#__PURE__*/_react.default.createElement("b", null, exp.title, " at ", exp.company), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-small my-0"
  }, formatDate(exp.startDate), " -", " ", exp.current ? "Present" : formatDate(exp.endDate)), /*#__PURE__*/_react.default.createElement("p", {
    className: "my-0 small"
  }, exp.description)))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col bg-dark text-white"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-center my-4"
  }, "Testimonials"), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex justify-content-center align-items-start flex-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card m-2",
    style: {
      width: "18rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "Jane Doe"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "card-subtitle mb-2 text-success"
  }, "Verified Reference"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "\"Their professionalism and attention to detail are unmatched. Fantastic work!\""), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-warning"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card m-2",
    style: {
      width: "18rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, "John Smith"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, "\"I had a great experience working with this team. Their creativity is top-notch!\"")))))));
};
var _default = exports.default = UserInfo;