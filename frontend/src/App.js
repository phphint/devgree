import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.jsx';
import AboutPage from './components/AboutUs/AboutPage';
import PrivacyPage from './components/Legal/PrivacyPolicy'; // assuming you have these components
import TermsPage from './components/Legal/TermsOfService'; // assuming you have these components
import FeaturesPage from './components/Features/FeaturesPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-dark text-white">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
