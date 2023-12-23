import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

import { ReactComponent as Logo } from "../logo4.svg"; // Ensure the path is correct
import bannerBackground from '../assets/images/banner3-2.png'; // Ensure the path is correct

const Banner3 = () => {
  return (
    <div 
      className="banner3"
      style={{ 
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '50px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh' // Adjust the height as needed
      }}
    >
        <Logo style={{ width: "100px", height: "100px" }} /> {/* Adjust size as needed */}
      <h1 style={{ marginTop: '20px', fontSize: '3rem' }}>Empowering Your Tech Identity</h1> {/* Enlarged h1 text */}
      <p style={{ marginTop: '10px', fontSize: '1.5rem' }}>Shaping the Future of Tech Portfolios</p>
      <Link to="/features" className="btn" style={{ 
        marginTop: '20px', 
        backgroundColor: '#2a2948', 
        color: 'white', 
        borderRadius: '50px',
        padding: '10px 20px', 
        fontSize: '1.25rem',
        textDecoration: 'none' // Removes underline from link
      }}>
  Features  
</Link>

    </div>
  );
};

export default Banner3;
