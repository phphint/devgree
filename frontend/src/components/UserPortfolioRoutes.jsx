// UserPortfolioRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserPortfolioContainer } from './UserPortfolio';

const UserPortfolioRoutes = () => {
  return (
    <Routes>
           <Route path=":id" element={<UserPortfolioContainer />} />

      {/* If you have other portfolio-related routes, they can be added here */}
      {/* ... */}
    </Routes>
  );
};

export default UserPortfolioRoutes;
