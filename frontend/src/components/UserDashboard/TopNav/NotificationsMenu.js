import React from 'react';

const NotificationsMenu = () => {
  // Assuming this array represents your notifications
  const notifications = []; // Empty array means no notifications

  return (
    <div className="nav-item dropdown flex-nowrap">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <i className="fa fa-bell me-lg-2"></i>
        <span className="d-none d-lg-inline-flex">Notification</span>
      </a>
      <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
        {/* Check if there are notifications */}
        {notifications.length === 0 ? (
          <div className="dropdown-item text-center">You have no notifications</div>
        ) : (
          // Render notifications if they exist
          notifications.map((notification, index) => (
            <div key={index}>
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">{notification.title}</h6>
                <small>{notification.time}</small>
              </a>
              <hr className="dropdown-divider" />
            </div>
          ))
        )}
        {/* Link to see all notifications, shown only if notifications exist */}
        {notifications.length > 0 && (
          <a href="#" className="dropdown-item text-center">See all notifications</a>
        )}
      </div>
    </div>
  );
};

export default NotificationsMenu;
