import React from 'react';
import { Helmet } from 'react-helmet';

// Import the components
import Navbar from '../Navbar';
import Footer from '../Footer';
import RegSection from '../RegSection';
import aboutImage from '../../assets/images/About_Devgree.jpg';


const AboutPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Devgree - About us. Learn how we support tech professionals to uniquely showcase their portfolios." />
                <title>About Devgree - Elevating Tech Portfolios</title>
                {/* Add other meta tags or head elements if needed */}
            </Helmet>

            <div className="min-h-screen flex flex-col bg-dark text-white">
                <Navbar />

                <section className="flex-grow-1 d-flex align-items-center p-5 bg-white text-dark vh-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="mb-4">About Devgree</h2>
                                <p>
                                    Devgree is dedicated to enabling tech professionals to distinctively showcase their expertise, projects, and accomplishments. Our platform is meticulously crafted, offering innovative solutions for creating a standout presence in the competitive tech landscape.
                                </p>
                                <p>
                                    We give you the tools to craft a portfolio that truly encapsulates your personal brand and professional milestones. With Devgree, you take control of your narrative in the tech space.
                                </p>
                                <p>
                                    Privacy and customization are at the core of what we offer. You have the autonomy to manage the visibility of your portfolio components, ensuring your work is shared on your terms.
                                </p>
                                <p>
                                    Committed to serving the ever-changing needs of tech professionals, Devgree is at the vanguard of the portfolio curation movement. Join us on this journey to professional distinction.
                                </p>
                            </div>
                            <div className="col-md-6">
                                {/* Placeholder for an image or any other visual content */}
                                <img src={aboutImage} alt="Visual representation of Devgree's impact" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <RegSection />
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;
