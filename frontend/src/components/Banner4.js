import React from 'react';
import { ReactComponent as Logo } from "../logo4.svg"; // Ensure the path is correct
import bannerBackground from '../assets/images/elevate-signup-bg.png'; // Ensure the path is correct

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
      <h1 style={{ marginTop: '20px', fontSize: '3rem' }}>Unlocking the Power of Your Professional Portfolio</h1> {/* Enlarged h1 text */}
      <p style={{ marginTop: '10px', fontSize: '1.5rem' }}>Revolutionizing Portfolio Presentation in Tech</p>
      <button 
      data-bs-toggle="modal"
      data-bs-target="#signupModal"
  className="btn" 
  style={{ 
    marginTop: '20px', 
    backgroundColor: '#2a2948', 
    color: 'white', 
    borderRadius: '50px', // Very rounded corners
    padding: '10px 20px', // Increased padding for larger size
    fontSize: '1.25rem' // Larger font size
  }}>
  Join Now {/* Updated button text */}
</button>

    </div>
  );
};

export default Banner3;
