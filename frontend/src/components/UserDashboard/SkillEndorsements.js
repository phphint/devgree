import React from 'react';

import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';

const SkillEndorsements = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Skill Endorsements</h1>
            <div className="alert alert-info mt-3">
              <strong>Building a Community of Recognition!</strong><br />
              Thank you for exploring the Skill Endorsements feature of Devgree. As we are currently in the beta phase, this feature is under active development. We're working hard to create a robust platform where your skills can be recognized and endorsed by peers and professionals alike. Your understanding and feedback during this phase are incredibly valuable. Please stay tuned for further updates, and we're excited to grow and evolve with your participation!
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillEndorsements;
