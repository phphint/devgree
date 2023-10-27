import React from 'react';
import { Helmet } from 'react-helmet';

// Import the components
import Navbar from '.././Navbar';
import Footer from '.././Footer';
import RegSection from '.././RegSection';


const AboutPage = () => {
    return (
        // React Fragment
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Devgree - About us. Discover the mission and vision of Devgree and learn about how we are revolutionizing tech portfolios." />
                <title>About Devgree - Revolutionizing Tech Portfolios</title>
                {/* Add other meta tags or head elements if needed */}
            </Helmet>

            <div className="min-h-screen flex flex-col bg-dark text-white">
                <Navbar />

                {/* Updated section with flexbox properties */}
                <section className="flex-grow-1 d-flex flex-column justify-content-center p-5 bg-white text-dark">
        <div className="container">
            <h2 className="mb-4">About Devgree</h2>
            <p className="lead">
                At Devgree, our mission is to empower tech professionals around the world. We believe that showcasing one's skills, projects, and accomplishments should be straightforward, modern, and free.
            </p>
            <p>
                In today's digital age, having a strong online presence is essential for tech professionals. Devgree provides a platform where developers can create a personalized portfolio, showcasing their projects and skills in an elegant and professional manner.
            </p>
            <p>
                But we're not just about portfolios. We're looking forward to the future, aiming to integrate a certifications feature that will revolutionize how tech professionals showcase their expertise.
            </p>
            <p>
                Born out of a passion for technology and a vision for a more connected and skilled tech community, Devgree is more than just a platform; it's a movement. Join us in reshaping the future of tech portfolios and certifications.
            </p>
        </div>
    </section>
    <RegSection />
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;
