// WebsiteRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import AboutPage from './AboutUs/AboutPage';
import PrivacyPage from './Legal/PrivacyPolicy';
import TermsPage from './Legal/TermsOfService';
import FeaturesPage from './Features/FeaturesPage';
import LoginPage from './LoginPage';

function WebsiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/features" element={<FeaturesPage />} />

            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default WebsiteRoutes;
