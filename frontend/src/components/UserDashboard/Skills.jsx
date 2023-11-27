// skills.jsx
import React from 'react';
import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';
import SkillsList from './Skills/SkillsList';
import PortfolioDataFetcher from "./hooks/PortfolioDataFetcher.js";

const Skills = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Skills</h1>
            <PortfolioDataFetcher/>
            <SkillsList/>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
 
export default Skills;
