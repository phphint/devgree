import React from 'react';

import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';

const Billing = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Billing</h1>
            <div className="alert alert-info mt-3">
              <strong>Welcome to Devgree Billing!</strong><br />
              This is where you'll be able to view and manage your billing information. Keep track of your subscriptions, view past invoices, and update payment methods. We're currently working on bringing you the best billing management experience, so some features may not be available yet. Thank you for your patience and understanding!
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Billing;
