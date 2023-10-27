import React from 'react';
import { Helmet } from 'react-helmet';

// Import the components
import Navbar from '.././Navbar';
import Banner from '.././Banner';
import RegSection from '.././RegSection';
import Footer from '.././Footer';

const HomePage = () => {
    return (
        // React Fragment
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Devgree - The future of tech portfolios and certifications. Create your personalized portfolio page for free today and stay tuned for our upcoming certifications feature." />
                <title>Devgree - Your Free Tech Portfolio Space & Future of Certifications</title>
                {/* Add other meta tags or head elements if needed */}
            </Helmet>

            <div className="min-h-screen flex flex-col bg-dark text-white">
                <Navbar />
                <Banner />
                <RegSection />
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
