// UserPortfolioContainer.jsx
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userPortfolioThunks } from './userPortfolioThunks';
import UserPortfolioView from './UserPortfolioView'; // Import UserPortfolioView

const UserPortfolioContainer = () => {
  const { id } = useParams(); // This is the UUID from the URL
  const dispatch = useDispatch();
  const portfolioData = useSelector((state) => state.userPortfolio.data); // Get the portfolio data from Redux store

  useEffect(() => {
    if (id) {
      // Dispatch the thunk to fetch portfolio data with the UUID
      dispatch(userPortfolioThunks.fetchUserPortfolio(id));
    }
  }, [id, dispatch]);

  // Render UserPortfolioView and pass the portfolioData as a prop
  return (
    <UserPortfolioView portfolioData={portfolioData} />

  );
};

export default UserPortfolioContainer;
