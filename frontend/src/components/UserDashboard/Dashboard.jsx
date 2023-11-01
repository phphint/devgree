import React from 'react';
import { Link } from 'react-router-dom';


import styles from './DashboardTemplate.module.css'; // Import CSS module

import TopNav from './TopNav';
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
            </main>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Dashboard;
