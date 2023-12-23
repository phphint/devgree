import React from "react";
import { Helmet } from "react-helmet";

// Import the components
import Navbar from "../Navbar";
import Footer from "../Footer";
 import Banner3 from "../Banner3";

const AboutPage = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Devgree",
    url: "https://www.devgree.com",
    logo: "https://www.devgree.com/logo192.png",
    description:
      "Devgree is dedicated to enabling tech professionals to uniquely showcase their expertise, projects, and accomplishments with innovative portfolio solutions.",
    email: "info@devgree.com",
  };
  const paragraphStyle = { fontSize: '1rem' }; // Adjust the font size as needed

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Devgree - About us. Learn how we support tech professionals to uniquely showcase their portfolios."
        />
        <title>About Devgree - Elevating Tech Portfolios</title>
        {/* Add other meta tags or head elements if needed */}
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col elevate-bg-dark">
        <Navbar />
<Banner3/> 
        <section className="flex-grow-1 d-flex align-items-center p-5 ">
          <div className="container">
            <div className="row">
              <div className="">
                <h1 className="mb-4">About Devgree</h1>
                <p style={paragraphStyle}>

                  Devgree is dedicated to enabling tech professionals to
                  distinctively showcase their expertise, projects, and
                  accomplishments. Our platform is meticulously crafted,
                  offering innovative solutions for creating a standout presence
                  in the competitive tech landscape.
                </p>
                <p style={paragraphStyle}>

                  We give you the tools to craft a portfolio that truly
                  encapsulates your personal brand and professional milestones.
                  With Devgree, you take control of your narrative in the tech
                  space.
                </p>
                <p style={paragraphStyle}>

                  Privacy and customization are at the core of what we offer.
                  You have the autonomy to manage the visibility of your
                  portfolio components, ensuring your work is shared on your
                  terms.
                </p>
                <p style={paragraphStyle}>

                  Committed to serving the ever-changing needs of tech
                  professionals, Devgree is at the vanguard of the portfolio
                  curation movement. Join us on this journey to professional
                  distinction.
                </p>
              </div>
          
            </div>
          </div>
        </section>

      
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
