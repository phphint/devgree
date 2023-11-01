// ProtectedRoute.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
