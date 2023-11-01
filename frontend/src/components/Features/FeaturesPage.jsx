// src/components/Features/FeaturesPage.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FeaturesSection from "./FeaturesSection";

import RegSection from ".././RegSection";

const FeaturesPage = () => {
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
