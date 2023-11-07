import React from 'react';

const MessagesMenu = () => {
  return (
    <div className="navbar-nav align-items-center ms-auto flex-nowrap">
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



  </div>
  );
};

export default MessagesMenu;
