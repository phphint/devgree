import React from 'react';

const MessagesMenu = () => {
  // Assuming this array represents your messages
  const messages = []; // Empty array means no messages

  return (
    <div className="navbar-nav align-items-center ms-auto flex-nowrap">
      {/* Messages Dropdown */}
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i className="fa fa-envelope me-lg-2"></i>
          <span className="d-none d-lg-inline-flex">Message</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
          {/* Check if there are messages */}
          {messages.length === 0 ? (
            <div className="dropdown-item text-center">You have no messages</div>
          ) : (
            // Render messages if they exist
            messages.map((message, index) => (
              <div key={index}>
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" src="https://via.placeholder.com/40" alt="" style={{ width: '40px', height: '40px' }} />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">{message.title}</h6>
                      <small>{message.time}</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
              </div>
            ))
          )}
          {/* Link to see all messages, shown only if messages exist */}
          {messages.length > 0 && (
            <a href="#" className="dropdown-item text-center">See all messages</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesMenu;
