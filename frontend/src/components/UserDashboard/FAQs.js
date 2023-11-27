import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';

const FAQs = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Devgree - Frequently Asked Questions</h1>
            <p>Discover what makes Devgree the preferred choice for tech professionals.</p>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Personalized Portfolio</Accordion.Header>
                <Accordion.Body>
                  <strong>FAQ:</strong> How can I customize my portfolio layout?<br/>
                  Showcase your skills, projects, and accomplishments in a customizable and professional layout.
                </Accordion.Body>
              </Accordion.Item>
              
              {/* Repeat for other sections */}
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>Skills Assessments</Accordion.Header>
                <Accordion.Body>
                  <strong>FAQ:</strong> Where can I share my assessment results?<br/>
                  Engage in quizzes and assessments to measure your technical proficiency.
                </Accordion.Body>
              </Accordion.Item>

              {/* ... other accordion items ... */}

            </Accordion>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
