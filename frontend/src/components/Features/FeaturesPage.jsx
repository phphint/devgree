// src/components/Features/FeaturesPage.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FeaturesSection from "./FeaturesSection";

import RegSection from ".././RegSection";

const FeaturesPage = () => {

  const schemaOrgService = {
    "@context": "http://schema.org",
    "@type": "Service",
    "serviceType": "Tech Portfolio Platform",
    "provider": {
      "@type": "Organization",
      "name": "Devgree",
      "url": "https://www.devgree.com"
    },
    "description": "Devgree offers an innovative tech portfolio platform with features like personalized portfolio creation, skills assessments, privacy controls, and more.",
    "image": "https://www.devgree.com/logo512.png", // URL to an image representing the service
    "url": "https://www.devgree.com/features"
    // Add more properties relevant to the service if needed
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Devgree - Explore the innovative features that set Devgree apart in the tech portfolio landscape."
        />
        <title>Devgree Features - Elevate Your Tech Portfolio</title>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgService)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-dark text-white">
        <Navbar />

        <FeaturesSection /> 

        <RegSection />
        <Footer />
      </div>
    </>
  );
};

export default FeaturesPage;
