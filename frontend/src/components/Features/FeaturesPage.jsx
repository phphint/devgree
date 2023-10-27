// src/components/Features/FeaturesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RegSection from '.././RegSection';

const FeaturesPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Devgree - Explore the innovative features that set Devgree apart in the tech portfolio landscape." />
                <title>Devgree Features - Elevate Your Tech Portfolio</title>
            </Helmet>

            <div className="min-h-screen flex flex-col bg-dark text-white">
                <Navbar />

                <section className="flex-grow-1 p-5 bg-white text-dark">
                    <div className="container px-4 py-5">
                        <h2 className="pb-2 -bottom">Features</h2>
                        <p className="lead">
                            Discover what makes Devgree the preferred choice for tech professionals.
                        </p>
                        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                            <div className="feature col">
                                <div className="feature-icon d-flex    ">
                                    <i className="fa fa-portfolio fa-3x"></i>
                                </div>
                                <h2>Personalized Portfolio</h2>
                                <p>Showcase your skills and projects in a customizable and professional layout.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex    ">
                                    <i className="fa fa-certificate fa-3x "></i>
                                </div>
                                <h2>Certifications</h2>
                                <p>Stay ahead with our upcoming certifications feature, giving you a competitive edge in the tech world.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex    ">
                                    <i className="fa fa-plug fa-3x"></i>
                                </div>
                                <h2>Seamless Integration</h2>
                                <p>Easily integrate with popular tools and platforms, allowing you to bring all your work under one roof.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex    ">
                                    <i className="fa fa-mobile fa-3x"></i>
                                </div>
                                <h2>Mobile Friendly</h2>
                                <p>Access and manage your portfolio on-the-go with our mobile-responsive design.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex">
                                    <i className="fa fa-question-circle fa-3x"></i>
                                </div>
                                <h2>Skill Assessment Tests</h2>
                                <p>Take periodic tests to assess your technical skills, with results that can be showcased on your portfolio.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex">
                                    <i className="fa fa-shield-alt fa-3x"></i>
                                </div>
                                <h2>Privacy Controls</h2>
                                <p>Decide which parts of your portfolio are public, private, or accessible only via a shared link.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex">
                                    <i className="fa fa-video fa-3x"></i>
                                </div>
                                <h2>Video Integration</h2>
                                <p>Embed personal introduction videos or project walkthroughs, providing a more engaging experience for your visitors.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex">
                                    <i className="fa fa-chart-bar fa-3x"></i>
                                </div>
                                <h2>Portfolio Analytics Dashboard</h2>
                                <p>Get a comprehensive view of your portfolio's performance, including visitor demographics, engagement metrics, and feedback analytics.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex">
                                    <i className="fa fa-users fa-3x"></i>
                                </div>
                                <h2>Testimonials & References</h2>
                                <p>Add a section where mentors, colleagues, or clients can vouch for your skills, adding authenticity to your portfolio.</p>
                            </div>

                            <div className="feature col">
                                <div className="feature-icon d-flex">
                                    <i className="fa fa-brain fa-3x"></i>
                                </div>
                                <h2>AI-Powered Skills Assessment</h2>
                                <p>Undertake AI-driven quizzes and assessments to gauge your technical proficiency, and display the results on your portfolio.</p>
                            </div>

                            {/* ... other features can be added similarly ... */}
                            
                        </div>
                    </div>
                </section>

                <RegSection />
                <Footer />
            </div>
        </>
    );
}

export default FeaturesPage;
