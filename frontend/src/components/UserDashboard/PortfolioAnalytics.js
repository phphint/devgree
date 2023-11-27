import React from 'react';

import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';

const PortfolioAnalytics = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Analytics</h1>
            <div className="alert alert-info mt-3">
              <strong>Welcome to Devgree Analytics!</strong><br />
              Please note that Devgree is currently in its beta phase. As such, our Analytics feature is actively under development and will be available soon. We are working hard to provide you with detailed insights into your portfolio's performance. Stay tuned for updates, and thank you for being part of our beta testing phase!
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioAnalytics;
