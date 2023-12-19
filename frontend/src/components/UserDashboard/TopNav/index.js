import React from "react";
import { Link } from "react-router-dom";
import MessagesMenu from "./MessagesMenu";
import NotificationsMenu from "./NotificationsMenu";
import AvatarMenu from "./AvatarMenu";
import { ReactComponent as Logo } from '../../../logo4.svg';


const TopNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-white sticky-top px-4 py-0 flex-nowrap">
        <Link className="navbar-brand d-flex me-4" to="/">          <Logo style={{ width: 'auto', height: '33px', marginRight: '5px' }} />

          <h2 className="mb-0">
 Devgree
          </h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="d-flex flex-grow-1 flex-nowrap"
          id="navbarSupportedContents"
        >
          <div className="navbar-nav align-items-center ms-auto">
            <MessagesMenu />
            <NotificationsMenu />
            <AvatarMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
