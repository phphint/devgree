import React from "react";
import { useLocation } from "react-router-dom";

const FeaturesSection = () => {
  const location = useLocation();

  let bgColor = "bg-white";
  let textColor = "text-dark";

  if (location.pathname === "/") {
    bgColor = "bg-dark";
    textColor = "text-white";
  }

  return (
    <section className={`flex-grow-1 p-5 ${bgColor} ${textColor}`}>
      <div className="container px-4 py-5 ">
        <h2 className="pb-2 -bottom">Features</h2>
        <p className="lead">
          Discover what makes Devgree the preferred choice for tech
          professionals.
        </p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col ">
            <div className="feature-icon d-flex">
              <i className="fa fa-user fa-3x"></i>
            </div>
            <h2>Personalized Portfolio</h2>
            <p>
              Showcase your skills, projects, and accomplishments in a
              customizable and professional layout tailored to your personal
              brand.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-brain fa-3x"></i>
            </div>
            <h2>Skills Assessments</h2>
            <p>
              Engage in quizzes and assessments to measure your technical
              proficiency and share the results on your portfolio for viewers to
              see.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-shield-alt fa-3x"></i>
            </div>
            <h2>Privacy Controls</h2>
            <p>
              Decide which parts of your portfolio are public, private, or
              accessible only via a shared link.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-video fa-3x"></i>
            </div>
            <h2>Video Integration</h2>
            <p>
              Embed personal introduction videos or project walkthroughs from
              popular platforms like YouTube, Vimeo, or TikTok, providing a more
              engaging experience for your visitors.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-chart-bar fa-3x"></i>
            </div>
            <h2>Portfolio Analytics</h2>
            <p>
              Get a comprehensive view of your portfolio's performance, with
              metrics such as the number of visits and visitor demographics at
              the country level.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-users fa-3x"></i>
            </div>
            <h2>Testimonials & References</h2>
            <p>
              Add a section where mentors, colleagues, or clients can vouch for
              your skills, adding authenticity to your portfolio.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-trophy fa-3x"></i>
            </div>
            <h2>Achievement Badges</h2>
            <p>
              Display badges you've earned from online courses, certifications,
              or other platforms, offering a gamified view of your learning
              journey.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-thumbs-up fa-3x"></i>
            </div>
            <h2>Skill Endorsements</h2>
            <p>
              Allow peers and mentors to endorse specific skills, offering more
              credibility to your proficiencies.
            </p>
          </div>

          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-code-branch fa-3x"></i>
            </div>
            <h2>Unified Code Display</h2>
            <p>
              Aggregate your public repositories from multiple platforms into a
              single, cohesive view on your portfolio.
            </p>
          </div>

          {/* New feature block for Resume */}

          <div className="feature col">
  <div className="feature-icon d-flex">
    <i className="fa fa-file-pdf fa-3x"></i>
  </div>
  <h2>ATS-Compatible Resume Generation</h2>
  <p>
    Automatically generate a professional ATS-compatible resume from your portfolio data. Our system intelligently formats your skills, experiences, and accomplishments into a polished resume, ready for download as a PDF.
  </p>
</div>


          {/* New feature block for Direct Contact */}
          <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-envelope fa-3x"></i>
            </div>
            <h2>Direct Contact</h2>
            <p>
              Enable potential employers and collaborators to reach out to you
              directly via your portfolio with a secure contact form, bridging
              the gap between talent and opportunity.
            </p>
          </div>

         {/* Intelligent Resume Import Feature */}
         <div className="feature col">
            <div className="feature-icon d-flex">
              <i className="fa fa-file-import fa-3x"></i>
            </div>
            <h2>Intelligent Resume Import</h2>
            <p>
              Effortlessly import your resume and let our AI system precisely
              extract and populate your profile, projects, skills, and more.
              Enhance your portfolio with ease, showcasing your professional
              journey effectively.
            </p>
          </div>

          {/* ... other features can be added similarly ... */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
