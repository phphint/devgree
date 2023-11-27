// Education.js
import React, { useState } from 'react';

import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';
import EducationList from './Education/EducationList';
import  PortfolioDataFetcher  from "./hooks/PortfolioDataFetcher.js";




const Education = () => {
  return (
    <>
        <TopNav />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
       <h1>Education</h1>
       <PortfolioDataFetcher/>
       <EducationList/>
            </main>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Education;
