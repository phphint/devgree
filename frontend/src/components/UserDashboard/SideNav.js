import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
<nav id="sidebarMenu" className="min-vh-100 col-md-3 col-lg-2 d-md-block sidebar collapse">
          <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white active"
                    aria-current="page"
                    to="/dashboard"
                  >
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">
                    <i className="fas fa-user"></i> My Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/projects">
                    <i className="fas fa-project-diagram"></i> My Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/skills-assessment">
                    <i className="fas fa-brain"></i> Skills Assessment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/certifications">
                    <i className="fas fa-certificate"></i> Certifications &
                    Badges
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/portfolio-analytics"
                  >
                    <i className="fas fa-chart-bar"></i> Portfolio Analytics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/testimonials-references"
                  >
                    <i className="fas fa-users"></i> Testimonials & References
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/skill-endorsements"
                  >
                    <i className="fas fa-thumbs-up"></i> Skill Endorsements
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/code-display">
                    <i className="fas fa-code-branch"></i> Unified Code Display
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-white" to="/settings">
                    <i className="fas fa-cog"></i> Settings
                  </Link>
                </li>
                <hr></hr>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/help">
                    <i className="fas fa-question-circle"></i> Help & Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/faqs">
                    <i className="fas fa-file-alt"></i> FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
  );
};

export default SideNav;
