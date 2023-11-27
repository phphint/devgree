import React from 'react';

import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';

const SkillsAssessment = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Skills Assessments</h1>
            <div className="alert alert-info mt-3">
              <strong>Exploring Your Potential with Devgree!</strong><br />
              We're excited about our Skills Assessments feature, but please be aware that Devgree is currently in beta. This means our Skills Assessments are still being fine-tuned to offer you the most accurate and helpful insights. We appreciate your patience as we perfect this tool. Your experience and feedback during this phase are invaluable to us. Stay tuned for more updates, and thanks for joining us on this journey!
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillsAssessment;
