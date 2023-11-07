import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSkillsSubMenu } from "../../reducers/uiSlice"; // adjust the import path as necessary

const SideNav = () => {
  const dispatch = useDispatch();
  const isSkillsSubMenuOpen = useSelector(
    (state) => state.ui.isSkillsSubMenuOpen
  );

  const handleToggleSkillsSubMenu = () => {
    dispatch(toggleSkillsSubMenu());
  };

  return (
    <nav
      id="sidebarMenu"
      className="min-vh-100 col-md-3 col-lg-2 d-md-block sidebar collapse bg-dark text-white"
    >
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
            <Link className="nav-link text-white" to="/dashboard/profile">
              <i className="fas fa-user"></i> My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/projects">
              <i className="fas fa-project-diagram"></i> My Projects
            </Link>
          </li>

          {/* Skills Submenu */}
          <li className="nav-item">
            <a
              href="#skillsSubmenu"
              className="nav-link text-white d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              aria-expanded={isSkillsSubMenuOpen.toString()} // aria-expanded expects a string
              onClick={handleToggleSkillsSubMenu} // use the handler function here
            >
              <span>
                <i className="fas fa-layer-group"></i> Skills
              </span>
              <i className="fas fa-caret-down"></i>
            </a>
            <div
              className={`collapse ${isSkillsSubMenuOpen ? "show" : ""}`}
              id="skillsSubmenu"
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small bg-light text-dark">
                <li>
                  <Link
                    className="nav-link text-dark"
                    to="/dashboard/add-skills"
                  >
                    <i className="fas fa-brain"></i> Add Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link text-dark"
                    to="/dashboard/skills-assessment"
                  >
                    <i className="fas fa-brain"></i> Skills Assessment
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link text-dark"
                    to="/dashboard/skill-endorsements"
                  >
                    <i className="fas fa-thumbs-up"></i> Skill Endorsements
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/dashboard/certifications"
            >
              <i className="fas fa-certificate"></i> Certifications & Badges
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/dashboard/portfolio-analytics"
            >
              <i className="fas fa-chart-bar"></i> Portfolio Analytics
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/dashboard/testimonials-references"
            >
              <i className="fas fa-users"></i> Testimonials & References
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/dashboard/unified-code-display"
            >
              <i className="fas fa-code-branch"></i> Unified Code Display
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/settings">
              <i className="fas fa-cog"></i> Settings
            </Link>
          </li>
          <hr />
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/help">
              <i className="fas fa-question-circle"></i> Help & Support
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/faqs">
              <i className="fas fa-file-alt"></i> FAQs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
