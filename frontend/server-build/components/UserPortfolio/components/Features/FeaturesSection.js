"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _rightAngleBg = _interopRequireDefault(require("../../assets/images/right-angle-bg.png"));
// Adjust the path as needed

const FeaturesSection = () => {
  const location = (0, _reactRouterDom.useLocation)();
  let bgColor = "custom-bg-white";
  let textColor = "custom-text-dark";
  if (location.pathname === "/") {
    bgColor = "custom-bg-dark";
    textColor = "custom-text-white";
  }
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "flex-grow-1 py-5 px-2 px-md-5 ".concat(bgColor, " ").concat(textColor),
    id: "featuresBlock"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container px-2 py-5 px-md-4 "
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "pb-2 -bottom"
  }, "Features"), /*#__PURE__*/_react.default.createElement("p", {
    className: "lead"
  }, "Discover what makes Devgree the preferred choice for tech professionals."), /*#__PURE__*/_react.default.createElement("div", {
    className: "row g-4 py-5 row-cols-1 row-cols-lg-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Personalized Portfolio"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-user fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Showcase your skills, projects, and accomplishments in a customizable and professional layout tailored to your personal brand."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Skills Assessments"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-brain fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Engage in quizzes and assessments to measure your technical proficiency and share the results on your portfolio for viewers to see."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Privacy Controls"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shield-alt fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Decide which parts of your portfolio are public, private, or accessible only via a shared link."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Video Integration"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-video fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Embed personal introduction videos or project walkthroughs from popular platforms like YouTube, Vimeo, or TikTok, providing a more engaging experience for your visitors."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col right-angle-bg",
    style: {
      backgroundImage: "url(".concat(_rightAngleBg.default, ")")
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-quote-padding"
  }, " ", /*#__PURE__*/_react.default.createElement("blockquote", {
    className: "elevate-blockquote"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "pt-3 ps-1"
  }, "Devgree empowers tech professionals to uniquely showcase their skills and achievements."), /*#__PURE__*/_react.default.createElement("footer", {
    className: "blockquote-footer"
  }, "Devgree Devs"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row "
  }, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn elevate-button mt-3"
  }, "Example Portfolio")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Portfolio Analytics"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-chart-bar fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Get a comprehensive view of your portfolio's performance, with metrics such as the number of visits and visitor demographics at the country level."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Testimonials & References"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-users fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Add a section where mentors, colleagues, or clients can vouch for your skills, adding authenticity to your portfolio."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Achievement Badges"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-trophy fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Display badges you've earned from online courses, certifications, or other platforms, offering a gamified view of your learning journey."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Skill Endorsements"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-thumbs-up fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Allow peers and mentors to endorse specific skills, offering more credibility to your proficiencies."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Unified Code Display"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-code-branch fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Aggregate your public repositories from multiple platforms into a single, cohesive view on your portfolio."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "ATS-Compatible Resume Generation"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-file-pdf fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Automatically generate a professional ATS-compatible resume from your portfolio data. Our system intelligently formats your skills, experiences, and accomplishments into a polished resume, ready for download as a PDF."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Direct Contact"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-envelope fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Enable potential employers and collaborators to reach out to you directly via your portfolio with a secure contact form, bridging the gap between talent and opportunity."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature col pe-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fs-5 mb-3"
  }, "Intelligent Resume Import"), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-icon d-flex"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-file-import fa-2x"
  }))), /*#__PURE__*/_react.default.createElement("p", null, "Effortlessly import your resume and let our AI system precisely extract and populate your profile, projects, skills, and more. Enhance your portfolio with ease, showcasing your professional journey effectively."), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-5 mt-5"
  })))));
};
var _default = exports.default = FeaturesSection;