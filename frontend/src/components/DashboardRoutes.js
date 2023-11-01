// DashboardRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Dashboard from './UserDashboard/Dashboard';
import CertificationsBadges from './UserDashboard/CertificationsBadges';
import Settings from './UserDashboard/Settings';

import SkillEndorsements from './UserDashboard/SkillEndorsements';
import FAQs from './UserDashboard/FAQs';
import SkillsAssessment from './UserDashboard/SkillsAssessment';
import HelpSupport from './UserDashboard/HelpSupport';
import TestimonialsReferences from './UserDashboard/TestimonialsReferences';
import MyProfile from './UserDashboard/MyProfile';
import MyProjects from './UserDashboard/MyProjects';
import UnifiedCodeDisplay from './UserDashboard/UnifiedCodeDisplay';
import PortfolioAnalytics from './UserDashboard/PortfolioAnalytics';
// ... import other components ...

function DashboardRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/certifications-badges"
        element={
          <ProtectedRoute>
            <CertificationsBadges />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    
      <Route
        path="/skill-endorsements"
        element={
          <ProtectedRoute>
            <SkillEndorsements />
          </ProtectedRoute>
        }
      />
      <Route
        path="/faqs"
        element={
          <ProtectedRoute>
            <FAQs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/skills-assessment"
        element={
          <ProtectedRoute>
            <SkillsAssessment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/help-support"
        element={
          <ProtectedRoute>
            <HelpSupport />
          </ProtectedRoute>
        }
      />
      <Route
        path="/testimonials-references"
        element={
          <ProtectedRoute>
            <TestimonialsReferences />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-profile"
        element={
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <MyProjects />
          </ProtectedRoute>
        }
      />
      <Route
        path="/unified-code-display"
        element={
          <ProtectedRoute>
            <UnifiedCodeDisplay />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio-analytics"
        element={
          <ProtectedRoute>
            <PortfolioAnalytics />
          </ProtectedRoute>
        }
      />
      {/* ... other dashboard routes ... */}
    </Routes>
  );
}

export default DashboardRoutes;
