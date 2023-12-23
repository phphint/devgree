import React from "react";
import { useLocation } from "react-router-dom";
import rightAngleBg from "../../assets/images/right-angle-bg.png"; // Adjust the path as needed

const FeaturesSection = () => {
  const location = useLocation();

  let bgColor = "custom-bg-white";
  let textColor = "custom-text-dark";

  if (location.pathname === "/") {
    bgColor = "custom-bg-dark";
    textColor = "custom-text-white";
  }

  return (
    <section className={`flex-grow-1 py-5 px-2 px-md-5 ${bgColor} ${textColor}`} id="featuresBlock">

      <div className="container px-2 py-5 px-md-4 ">
        <h4 className="pb-2 -bottom">Features</h4>
        <p className="lead">
          Discover what makes Devgree the preferred choice for tech
          professionals.
        </p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Personalized Portfolio</span>
              <div className="feature-icon">
                <i className="fa fa-user fa-2x"></i>
              </div>
            </div>
            <p>
              Showcase your skills, projects, and accomplishments in a
              customizable and professional layout tailored to your personal
              brand.
            </p>
            <hr className="mb-5 mt-5"></hr>

            <div className="feature-header">
              <span className="fs-5 mb-3">Skills Assessments</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-brain fa-2x"></i>
              </div>
            </div>
            <p>
              Engage in quizzes and assessments to measure your technical
              proficiency and share the results on your portfolio for viewers to
              see.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Privacy Controls</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-shield-alt fa-2x"></i>
              </div>
            </div>
            <p>
              Decide which parts of your portfolio are public, private, or
              accessible only via a shared link.
            </p>
            <hr className="mb-5 mt-5"></hr>

            <div className="feature-header">
              <span className="fs-5 mb-3">Video Integration</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-video fa-2x"></i>
              </div>
            </div>
            <p>
              Embed personal introduction videos or project walkthroughs from
              popular platforms like YouTube, Vimeo, or TikTok, providing a more
              engaging experience for your visitors.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col">
            {/* First Row with Background Image and Quoted Text */}
            <div className="row">
              <div
                className="col right-angle-bg"
                style={{
                  backgroundImage: `url(${rightAngleBg})`,
                }}
              >
                <div className="feature-quote-padding">
                  {" "}
                  {/* Add a class name */}
                  <blockquote className="elevate-blockquote">
                    <p className="pt-3 ps-1">
                      Devgree empowers tech professionals to uniquely showcase
                      their skills and achievements.
                    </p>
                    <footer className="blockquote-footer">Devgree Devs</footer>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Second Row with a Button */}
            <div className="row ">
              {" "}
              {/* mt-3 adds margin-top for spacing */}
              <div className="col text-center">
                <button className="btn elevate-button mt-3">
                  Example Portfolio
                </button>
              </div>
            </div>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Portfolio Analytics</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-chart-bar fa-2x"></i>
              </div>
            </div>
            <p>
              Get a comprehensive view of your portfolio's performance, with
              metrics such as the number of visits and visitor demographics at
              the country level.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Testimonials & References</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-users fa-2x"></i>
              </div>
            </div>
            <p>
              Add a section where mentors, colleagues, or clients can vouch for
              your skills, adding authenticity to your portfolio.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Achievement Badges</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-trophy fa-2x"></i>
              </div>
            </div>
            <p>
              Display badges you've earned from online courses, certifications,
              or other platforms, offering a gamified view of your learning
              journey.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Skill Endorsements</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-thumbs-up fa-2x"></i>
              </div>
            </div>
            <p>
              Allow peers and mentors to endorse specific skills, offering more
              credibility to your proficiencies.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Unified Code Display</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-code-branch fa-2x"></i>
              </div>
            </div>
            <p>
              Aggregate your public repositories from multiple platforms into a
              single, cohesive view on your portfolio.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">
                ATS-Compatible Resume Generation
              </span>
              <div className="feature-icon d-flex">
                <i className="fa fa-file-pdf fa-2x"></i>
              </div>
            </div>
            <p>
              Automatically generate a professional ATS-compatible resume from
              your portfolio data. Our system intelligently formats your skills,
              experiences, and accomplishments into a polished resume, ready for
              download as a PDF.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Direct Contact</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-envelope fa-2x"></i>
              </div>
            </div>
            <p>
              Enable potential employers and collaborators to reach out to you
              directly via your portfolio with a secure contact form, bridging
              the gap between talent and opportunity.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>

          <div className="feature col pe-5">
            <div className="feature-header">
              <span className="fs-5 mb-3">Intelligent Resume Import</span>
              <div className="feature-icon d-flex">
                <i className="fa fa-file-import fa-2x"></i>
              </div>
            </div>
            <p>
              Effortlessly import your resume and let our AI system precisely
              extract and populate your profile, projects, skills, and more.
              Enhance your portfolio with ease, showcasing your professional
              journey effectively.
            </p>
            <hr className="mb-5 mt-5"></hr>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
