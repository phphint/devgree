import React from 'react';
import { Link } from 'react-router-dom';


import styles from './DashboardTemplate.module.css'; // Import CSS module

import TopNav from './TopNav/index.js';
import SideNav from './SideNav';
import Footer from '../Footer';


const Dashboard = () => {
    return (
      <>
        <TopNav />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
  <h1>Dashboard</h1>

   {/* Portfolio Completion Progress Bar */}
   <div className="my-3">
    <h4>Portfolio Completion Status</h4>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: '4%' }} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100">4% Complete</div>
    </div>
    <p className="text-muted mt-2">Complete your profile to 100% to maximize visibility and opportunities.</p>
  </div>

  <div className="my-4">
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Profile Overview</h5>
            <p className="card-text">Update and view your professional profile to showcase your skills and experience.</p>
            <a href="/dashboard/profile" className="btn btn-primary">View Profile</a>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Skills Assessment</h5>
            <p className="card-text">Take assessments to validate your skills and improve your portfolio's credibility.</p>
            <a href="/dashboard/skills-assessment" className="btn btn-success">Start Assessment</a>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Portfolio Projects</h5>
            <p className="card-text">Showcase your projects, contributions, and technological expertise.</p>
            <a href="/dashboard/projects" className="btn btn-info">Manage Projects</a>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-3">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Billing Overview</h5>
      <p className="card-text">Check your subscription status and view your billing history.</p>
      <a href="/dashboard/billing" className="btn btn-warning">Manage Billing</a>
    </div>
  </div>
</div>

<div className="col-md-6 col-lg-4 mb-3">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Work History</h5>
      <p className="card-text">View and update your professional work history.</p>
      <a href="/dashboard/work-history" className="btn btn-secondary">View Work History</a>
    </div>
  </div>
</div>

<div className="col-md-6 col-lg-4 mb-3">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Education & Certifications</h5>
      <p className="card-text">Document your educational background and certifications.</p>
      <a href="/dashboard/education" className="btn btn-dark">View Education</a>
    </div>
  </div>
</div>

<div className="col-12 mb-3">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Need Help?</h5>
      <p className="card-text">Access FAQs, user guides, and support resources.</p>
      <a href="/dashboard/help" className="btn btn-light">Get Support</a>
    </div>
  </div>
</div>




    </div>
  </div>

  <div className="analytics-section">
  <h2>Portfolio Analytics</h2>
  <p>Track the impact and reach of your portfolio with detailed analytics.</p>

  <div className="row g-4">
    <div className="col-md-6">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Project Views</h5>
          <p className="card-text">An overview of how many times your projects have been viewed.</p>
          {/* Placeholder for Project Views Chart */}
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Skill Endorsements</h5>
          <p className="card-text">A summary of endorsements received for your skills.</p>
          {/* Placeholder for Skill Endorsements Chart */}
        </div>
      </div>
    </div>

    

    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Interaction Overview</h5>
          <p className="card-text">Insights into interactions on your portfolio, such as likes, shares, and comments.</p>
          {/* Placeholder for Interaction Chart */}
        </div>
      </div>
    </div>

 

  </div>
</div>

</main>

          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Dashboard;
