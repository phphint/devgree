import React from 'react';
import { Helmet } from 'react-helmet';

// Import the components
import Navbar from '../Navbar';
import Footer from '../Footer';
import RegSection from '../RegSection';

const AboutPage = () => {
    return (
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

                <section className="flex-grow-1 d-flex flex-column justify-content-center p-5 bg-white text-dark">
                    <div className="container">
                        <h2 className="mb-4">About Devgree</h2>
                        <p>
                            At Devgree, we believe in empowering tech professionals to showcase their skills, projects, and achievements in a way that truly reflects their personal brand and professional journey. Our platform is thoughtfully designed to provide an innovative solution for tech professionals looking to differentiate themselves in the competitive tech industry.
                        </p>
                        <p>
                            Our AI-Powered Skills Assessment feature is a testament to our commitment to innovation. By utilizing cutting-edge AI technology, we provide an objective and accurate measure of your technical proficiency, giving you the confidence to showcase your skills to potential employers or clients.
                        </p>
                        <p>
                            In addition to our unique features, we prioritize user privacy and control. Our platform gives you the flexibility to decide which parts of your portfolio are public, private, or accessible only via a shared link. This level of customization ensures that you have full control over how you present yourself to the world.
                        </p>
                        <p>
                            At Devgree, we are constantly evolving and adapting to the needs of the tech community. We are proud to be at the forefront of the tech portfolio revolution, and we are excited to support you in your journey to achieving professional excellence.
                        </p>
                    </div>
                </section>

                <RegSection />
                <Footer />
            </div>
        </>
    );
}

export default AboutPage
