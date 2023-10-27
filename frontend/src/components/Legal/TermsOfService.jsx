import React from 'react';
import { Helmet } from 'react-helmet';

// Import the components
import Navbar from '.././Navbar';
import Footer from '.././Footer';
import RegSection from '.././RegSection';


const TermsOfServicePage = () => {
    return (
        // React Fragment
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Devgree - Terms of Service. Read our terms and understand your rights and responsibilities when using Devgree." />
                <title>Devgree Terms of Service</title>
                {/* Add other meta tags or head elements if needed */}
            </Helmet>

            <div className="min-h-screen flex flex-col bg-dark text-white">
                <Navbar />

                {/* Updated section with flexbox properties */}
                <section className="flex-grow-1 d-flex flex-column justify-content-center p-5 bg-white text-dark">
                    <div className="container">
                        <h2 className="mb-4">Terms of Service</h2>
                        <p className="lead">
                            Welcome to Devgree! These terms and conditions outline the rules and regulations for the use of Devgree's platform.
                        </p>
                        <p>
                            By accessing this website, you accept these terms and conditions in full. Do not continue to use Devgree's platform if you do not accept all of the terms and conditions stated on this page.
                        </p>
                        <p>
                            The following terminology applies to these Terms and Conditions: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company, Devgree.
                        </p>
                        <p>
                            Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to the same.
                        </p>
                        <p>
                            // ... Add more details about your terms here ...
                        </p>
                    </div>
                </section>
                <RegSection />
                <Footer />
            </div>
        </>
    );
}

export default TermsOfServicePage;
