import React from 'react';
import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';
import WorkHistoryList from './WorkHistory/WorkHistoryList';

const WorkHistory = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Work History</h1>
            <WorkHistoryList />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkHistory;
