import React from 'react';

import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';

const HelpSupport = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Help & Support</h1>
            <p>Welcome to Devgree Help & Support. Find answers, guidance, and assistance to make the most of our platform.</p>
            
            <section>
              <h2>Getting Started</h2>
              <p>Need help with starting your journey on Devgree? Check out our comprehensive guide for new users.</p>
              <ul>
                <li><a href="#!">Beginner's Guide to Devgree</a></li>
                <li><a href="#!">Setting Up Your Profile</a></li>
                <li><a href="#!">Navigating the Dashboard</a></li>
              </ul>
            </section>

            <section>
              <h2>Common Issues</h2>
              <p>Encountering a problem? Here are some quick solutions to common issues faced by our users.</p>
              <ul>
                <li><a href="#!">Troubleshooting Login Issues</a></li>
                <li><a href="#!">Resolving Portfolio Display Errors</a></li>
                <li><a href="#!">Managing Notification Settings</a></li>
              </ul>
            </section>

            <section>
              <h2>FAQs</h2>
              <p>Have questions? Find quick answers to frequently asked questions.</p>
              <ul>
                <li><a href="#!">How to Customize Your Portfolio</a></li>
                <li><a href="#!">Updating Skills and Endorsements</a></li>
                <li><a href="#!">Privacy Settings and Controls</a></li>
              </ul>
            </section>

            <section>
              <h2>Contact Support</h2>
              <p>If you need more help, our support team is here for you. Reach out to us through the following channels:</p>
              <ul>
                <li>Email: <a href="mailto:support@devgree.com">support@devgree.com</a></li>
                <li>Phone: +1 800 123 4567 (Mon-Fri, 9am-5pm)</li>
                <li><a href="#!">Online Support Form</a></li>
              </ul>
            </section>

            <section>
              <h2>Community Forum</h2>
              <p>Join the Devgree community forum to discuss with fellow users, share experiences, and gain insights.</p>
              <ul>
                <li><a href="#!">Access the Community Forum</a></li>
              </ul>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpSupport;
