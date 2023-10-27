import React from 'react';
import { Helmet } from 'react-helmet';

// Import the components
import Navbar from '.././Navbar';
import Footer from '.././Footer';
import RegSection from '.././RegSection';

const PrivacyPolicyPage = () => {
    return (
        // React Fragment
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Devgree - Privacy Policy. Understand how we handle and protect your data when you use our platform." />
                <title>Devgree Privacy Policy</title>
                {/* Add other meta tags or head elements if needed */}
            </Helmet>

            <div className="min-h-screen flex flex-col bg-dark text-white">
                <Navbar />

                {/* Privacy Policy content section */}
                <section className="flex-grow-1 d-flex flex-column justify-content-center p-5 bg-white text-dark">
                    <div className="container">
                        <h2 className="mb-4">Privacy Policy</h2>
                        <p className="lead">
                            Your privacy is important to us. It is Devgree's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, Devgree, and other sites we own and operate.
                        </p>
                        <p>
                            This policy explains what data we collect, how we use and store that data, who we might share it with, and your rights and choices regarding your information.
                        </p>
                        <p>
                            By using our platform, you agree to the terms of this policy and to our practices for collecting, using, and sharing your information.
                        </p>
                        <p>
                            We may update our privacy policy from time to time by publishing a new version on our website. It's important to review our privacy policy periodically.
                        </p>
                        <p>
                            // ... Include more details about your privacy practices here, such as how you handle cookies, third-party data sharing, etc. ...
                        </p>
                    </div>
                </section>
                <RegSection />
                <Footer />
            </div>
        </>
    );
}

export default PrivacyPolicyPage;
