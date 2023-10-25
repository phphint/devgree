# Technical Design Document: Site Structure for Devgree.com

## Overview

Devgree.com is conceptualized as a dual-purpose platform allowing developers to showcase their portfolios and certifications and employers to scout and test potential talent. The main menu structure is pivotal for a seamless user journey, catering to both developers and employers. This document outlines the refined main menu structure, incorporating feedback regarding the testing capabilities for employers.

## Main Menu Links

### 1. Home
- **Purpose**: Directs users to the main landing page, introducing them to the platform's core offerings.

### For Developers Section:

### 2. Portfolios
- **Purpose**: Showcases a gallery or listing of developer portfolios, whether they're featured or recently updated.

### 3. Certifications
- **Purpose**: Offers a deep dive into available certifications, the examination process, and the resultant benefits.

### 4. Dashboard
- **Purpose**: Central hub for developers to oversee profiles, portfolios, and certifications.

### For Employers Section:

### 5. Directory
- **Purpose**: A platform for employers to meticulously search for developers. Features include filtering by skills, certifications, and availability.

### 6. Post a Job
- **Purpose**: Enables employers to advertise job vacancies or project listings.

### 7. Test Candidates
- **Purpose**: Offers employers the tools to initiate and manage skill tests for potential hires.

### 8. Employer Portal
- **Purpose**: A dedicated space for employers to handle job postings, peruse applications, and manage candidate testing.

### 9. Pricing
- **Purpose**: Presents a clear outline of any associated costs, especially highlighting charges related to certifications or employer listings.

### General Links:

### 10. About
- **Purpose**: Delivers insights into the platform's vision, its driving team, and its evolution.

### 11. Blog/Articles
- **Purpose**: Acts as a knowledge base with articles, tutorials, and news touching on relevant sectors like technology and career advancement.

### 12. Testimonials
- **Purpose**: Spotlights success stories from both the developers and employers who have engaged with the platform.

### 13. Help & FAQs
- **Purpose**: Provides a helping hand to users with common inquiries and extends support.

### 14. Contact Us
- **Purpose**: Paves the way for users to establish a line of communication with the platform's support or administrative team.

### 15. Login/Register
- **Purpose**: Directs user actions regarding registration and login. Depending on a user's current status, this will toggle between "Login/Register" and "Profile/Logout".

## Conclusion

The menu structure for Devgree.com is meticulously designed to optimize the user experience for both developers and employers. The inclusion of the "Test Candidates" section further emphasizes the platform's commitment to ensuring quality hires for employers. As the platform matures, this structure will remain open to refinement based on user feedback and emerging business needs.



# React Component Structure for Devgree.com

React components encapsulate UI pieces, allowing for efficient modularity and reusability. Given the design requirements and feedback for Devgree.com, here's the proposed component breakdown:

## **1. Home Page**
- **Component:** 
  - `<HomePage />`

## **2. User Profile**
- **Component:** 
  - `<UserProfile />`
- **Sub-components:** 
  - `<PortfolioSection />`
  - `<CertificationSection />`
  - `<UserBio />`

## **3. Login/Register**
- **Components:** 
  - `<Login />`
  - `<Register />`

## **4. User Dashboard**
- **Component:** 
  - `<Dashboard />`
- **Sub-components:** 
  - `<PortfolioManager />`
  - `<CertificationManager />`
  - `<Settings />`

## **5. Certification Test**
- **Main Component:** 
  - `<CertificationTestLayout />` *(handles overall test UI)*
- **Sub-components:** 
  - `<Question />`
  - `<Timer />`
  - `<TestResults />`

## **6. Certification Display**
- **Component:** 
  - `<CertificationBadge />`

## **7. Directory**
- **Component:** 
  - `<Directory />`
- **Sub-components:** 
  - `<DeveloperCard />`
  - `<DirectorySearch />` *(handles search filters and can be reused elsewhere)*

## **8. Chat Interface**
- **Component:** 
  - `<ChatInterface />`
- **Sub-components:** 
  - `<ChatHeader />`
  - `<ChatMessage />`
  - `<ChatInput />`

## **9. Payment Process**
- **Component:** 
  - `<PaymentPage />`
- **Sub-components:** 
  - `<BillingDetails />`
  - `<PaymentOverview />`

## **10. FAQs/Help**
- **Component:** 
  - `<FAQ />`
- **Sub-components:** 
  - `<QuestionAnswerPair />`

## **11. About Us**
- **Component:** 
  - `<AboutPage />`

## **12. Legal**
- **Components:** 
  - `<TermsOfService />`
  - `<PrivacyPolicy />`

## **13. Contact**
- **Component:** 
  - `<ContactForm />`

## **14. Blog/Content**
- **Main Component:** 
  - `<BlogPage />`
- **Sub-components:** 
  - `<ArticleSnippet />`
  - `<CompleteArticleView />`

## **15. Testimonials/Feedback**
- **Component:** 
  - `<TestimonialsPage />`
- **Sub-components:** 
  - `<FeedbackCard />`

## **16. Employer's Space**
- **Component:** 
  - `<EmployerDashboard />`
- **Sub-components:** 
  - `<JobPostingForm />`
  - `<PotentialCandidateSearch />`

