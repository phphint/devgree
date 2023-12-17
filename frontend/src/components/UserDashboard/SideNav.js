import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSkillsSubMenu } from "../../reducers/uiSlice"; // adjust the import path as necessary

import "./SideNav.css"; // Importing your CSS file

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
            <NavLink
              className="nav-link text-white"
              aria-current="page"
              to="/dashboard"
            >
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/dashboard/profile">
              <i className="fas fa-user"></i> My Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/dashboard/projects">
              <i className="fas fa-project-diagram"></i> My Projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link text-white"
              to="/dashboard/certifications"
            >
              <i className="fas fa-certificate"></i> Certifications & Badges
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link text-white"
              to="/dashboard/testimonials-references"
            >
              <i className="fas fa-users"></i> Testimonials & References
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-white"
              to="/dashboard/unified-code-display"
            >
              <i className="fas fa-code-branch"></i> Unified Code Display
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link text-white"
              to="/dashboard/work-history"
            >
              <i className="fas fa-history"></i> Work History
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/dashboard/education">
              <i className="fas fa-code-branch"></i> Education
            </NavLink>
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
                  <NavLink
                    className="nav-link text-dark"
                    to="/dashboard/skills"
                  >
                    <i className="fas fa-brain"></i> Add/Edit Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link text-dark"
                    to="/dashboard/skills-assessment"
                  >
                    <i className="fas fa-brain"></i> Skill Assessments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link text-dark"
                    to="/dashboard/skill-endorsements"
                  >
                    <i className="fas fa-thumbs-up"></i> Skill Endorsements
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <hr />
          <li>
            <NavLink className="nav-link text-white" to="/dashboard/billing">
              <i className="fas fa-file-invoice-dollar"></i> Billing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/dashboard/settings">
              <i className="fas fa-cog"></i> Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/dashboard/help">
              <i className="fas fa-question-circle"></i> Help & Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/dashboard/faqs">
              <i className="fas fa-file-alt"></i> FAQs
            </NavLink>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/dashboard/portfolio-analytics"
              >
                <i className="fas fa-chart-bar"></i> Portfolio Analytics
              </NavLink>
            </li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
