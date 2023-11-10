import React from "react";
import { useSelector } from "react-redux";
import PortfolioFooter from "./PortfolioFooter";
import PortfolioNavbar from "./PortfolioNavbar";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioMain from "./PortfolioMain";

const UserPortfolioView = () => {
  const portfolioData = useSelector((state) => state.userPortfolio.data);
  const loading = useSelector((state) => state.userPortfolio.loading);
  const error = useSelector((state) => state.userPortfolio.error);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const prettyData = JSON.stringify(portfolioData, null, 2);
  if (portfolioData) {
    if (portfolioData.isPrivate) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
          <div className="alert alert-warning" role="alert">
            {portfolioData.message ||
              "This portfolio is private but you are the owner, all fields are only visible to you while logged in."}
          </div>
          <pre>{prettyData}</pre>
        </div>
      );
    }
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
        <div className="alert alert-danger" role="alert">
          {error.message || "This portfolio is private."}
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-warning" role="alert">
          No portfolio data available.
        </div>
      </div>
    );
  }

  // If there's data, render the portfolio view
  return (
    <>
      <div className="container">
        <PortfolioNavbar />
        <PortfolioHeader />
        <PortfolioMain />
        {/* Your portfolio data rendering logic */}
     
      </div>
      <PortfolioFooter />   <pre>{prettyData}</pre>
    </>
  );
};

export default UserPortfolioView;
