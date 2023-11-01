import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark text-white sticky-top px-4 py-0">
      <Link className="navbar-brand d-flex me-4" to="/">
        <h2 className="mb-0"><i className="fa fa-hashtag"></i>Devgree</h2>
      </Link>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav align-items-center ms-auto">
        {/* Messages Dropdown */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-envelope me-lg-2"></i>
            <span className="d-none d-lg-inline-flex">Message</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            {/* Message items */}
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" src="https://via.placeholder.com/40" alt="" style={{ width: '40px', height: '40px' }} />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">Jhon sent you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
              </div>
            ))}
            {/* More message items */}
            <a href="#" className="dropdown-item text-center">See all messages</a>
          </div>
        </div>

        {/* Notifications Dropdown */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-bell me-lg-2"></i>
            <span className="d-none d-lg-inline-flex">Notification</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            {/* Notification items */}
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
              </div>
            ))}
            {/* More notification items */}
            <a href="#" className="dropdown-item text-center">See all notifications</a>
          </div>
        </div>

        {/* User Avatar Dropdown */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="rounded-circle me-lg-2" src="https://via.placeholder.com/40" alt="" style={{ width: '40px', height: '40px' }} />
            <span className="d-none d-lg-inline-flex">John Doe</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <Link className="dropdown-item" to="#">My Profile</Link>
            <Link className="dropdown-item" to="#">Settings</Link>
            <Link className="dropdown-item" to="#">Log Out</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
