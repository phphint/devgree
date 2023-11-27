// PortfolioDataFetcher.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPortfolio } from '../../UserDashboard/dashboardThunks.js';

const PortfolioDataFetcher = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const token = useSelector(state => state.auth.token);
  const authEmail = useSelector(state => state.auth.email); // Get the email from auth state
  const dashboardEmail = useSelector(state => state.dashboard.email); // Get the email from dashboard state

  useEffect(() => {
    // Check if the user is authenticated and either dashboard email is empty or doesn't match auth email
    if (userId && token && (dashboardEmail === "" || authEmail !== dashboardEmail)) {
      // Dispatch the thunk to fetch the user's portfolio
      dispatch(fetchUserPortfolio({ identifier: userId, token }));
    }
  }, [userId, token, authEmail, dashboardEmail, dispatch]); // Dependencies for useEffect



  return null; // Component does not render anything
};

export default PortfolioDataFetcher;
