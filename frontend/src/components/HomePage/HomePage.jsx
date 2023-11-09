import React from 'react';
import { Helmet } from 'react-helmet';

// Import the components
import Navbar from '.././Navbar';
import Banner from '.././Banner';
import RegSection from '.././RegSection';
import Footer from '.././Footer';
import FeaturesSection from ".././Features/FeaturesSection";


const HomePage = () => {
    return (
        // React Fragment
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Devgree - The future of tech portfolios and skill assessments. Create your personalized portfolio page for free today and showcase your skills with our comprehensive assessments." />
            <title>Devgree - Your Free Tech Portfolio Space & Comprehensive Skill Assessments</title>
            {/* Add other meta tags or head elements if needed */}
        </Helmet>
    
        <div className="min-vh-100 flex flex-col bg-dark text-white">
            <Navbar />
            <Banner />
            <FeaturesSection />
            <RegSection />
            <Footer />
        </div>
    </>
    );
}

export default HomePage;
