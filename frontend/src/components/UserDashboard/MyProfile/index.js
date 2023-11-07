// index.js
import React from 'react';
import TopNav from '.././TopNav/index';
import SideNav from '.././SideNav';
import Footer from '../../Footer';
import MyProfileMain from './MyProfileMain';

const MyProfile = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid bg-light text-dark">
        <div className="row">
          <SideNav />
          <MyProfileMain />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
