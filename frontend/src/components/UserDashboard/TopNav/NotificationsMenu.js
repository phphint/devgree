import React from 'react';

const NotificationsMenu = () => {
  return (
    
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

  );
};

export default NotificationsMenu;
