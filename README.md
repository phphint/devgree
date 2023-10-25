# devgree.com - Technical Design Document

## Table of Contents
- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [System Architecture](#system-architecture)
- [Technical Specifications](#technical-specifications)
- [Database Schema](#database-schema)
- [API Operations (GraphQL)](#api-operations-graphql)
- [Frontend Components](#frontend-components)
- [Authentication Flow](#authentication-flow)
- [Deployment Strategy](#deployment-strategy)
- [Testing Strategy](#testing-strategy)

## Introduction
Devgree.com is an innovative platform targeting tech enthusiasts. It offers them the capability to showcase portfolios, earn and display tech certifications, and optionally list themselves in a directory for potential employment opportunities.

## Project Overview
Core functionalities of Devgree.com encompass:
- Portfolio management.
- Tech certification acquisition and exhibition.
- User authentication & management.
- Listing option in a hiring directory.
- Real-time chat between users.

## System Architecture
### 3.1 Front-end:
- Framework: React.js within a Node.js environment.
- State Management: Redux.
- Chat Functionality: React Chat UI.
- SSL Configuration: greenlock-express.

### 3.2 Back-end:
- Runtime: Node.js.
- Framework: Express.js integrated with Passport.js for authentication.
- Chat: Socket.io in conjunction with Express.
- API Strategy: GraphQL facilitated through apollo-server-express.
- Libraries:
  - dockerode
  - stripe-node
  - Twilio SDK
  - bcrypt
  - jsonwebtoken
  - express-rate-limit
  - express-mongo-sanitize
  - RabbitMQ
  - graphql-rate-limit
  - greenlock-express

### 3.3 Database:
- System: MongoDB.

## Technical Specifications
- Primary Language: JavaScript (ES6 and above).
- Form Management: Formik.
- Tools: npm, Webpack (for React component bundling).
- Version Control: Git (repositories hosted on GitHub).

## Database Schema
### 5.1 Users Collection:
| Field           | Type     | Description                           |
|-----------------|----------|---------------------------------------|
| _id             | ObjectId | Unique user identifier.               |
| username        | String   | User's chosen name.                   |
| password        | String   | Encrypted password.                   |
| portfolio       | Array    | Collection of user projects.          |
| certifications  | Array    | Earned tech certifications.           |
| isInDirectory   | Boolean  | Directory listing status.             |
| phoneNumber     | String   | For SMS notifications.                |
| paymentDetails  | Object   | Pertinent Stripe data.                |

## API Operations (Transitioning to GraphQL)
### 6.1 User Operations:
- User registration.
- User authentication.
- User directory listing.
- Payment detail updates.
- Portfolio item additions.

### 6.2 Notification Operations:
- SMS sending to users.

### 6.3 Payment Operations:
- User payment processing.

## Frontend Components
- LoginComponent: Manages user authentication.
- PortfolioComponent: User portfolio presentation & modification.
- CertificationComponent: Certification display & management.
- DirectoryListComponent: Displays users for potential hiring.
- PaymentComponent: Handles Stripe payments.
- SMSNotificationComponent: Offers SMS notifications through Twilio.
- ChatComponent: Facilitates real-time user chat.
- ServerStatusComponent: Displays GraphQL server, Cron server, and S3 server status.

## Authentication Flow
Utilizing Passport.js with JWT:
- User initiates login.
- Upon verification, the server returns a JWT.
- JWT is stored client-side (e.g., local storage) for subsequent requests.
- Passport middleware validates JWT on each protected route.

## Deployment Strategy
**For MVP:**
- Full-stack application can be launched using docker-compose up -d.
- Docker Containers:
  - Frontend
  - Backend
  - MinIO (for S3-compatible storage).
  - Cron (managing scheduled tasks).

**Future Aspirations:**
- Frontend: AWS S3.
- Backend: AWS Lambda.
- Database: MongoDB Atlas.
- File Management: Amazon S3.

## Testing Strategy
- Unit Testing: Implementing Jest suitable for both React and Node.js.
- Integration Testing: GraphQL operations testing with either Postman or Apollo Client.
- E2E Testing: Employing Cypress for a modern testing approach, especially with React apps.

- ## Error Handling

### 1. Detailed Logging
- **Tool**: `winston`
    - Capture error messages, stack traces, user actions, and other relevant metadata.
    - Ensure no sensitive user data is logged.

### 2. User-Friendly Error Messages
- Mask system errors with user-friendly messages.

### 3. Retries and Failovers
- Implement retries or backup processes for transient failures.

### 4. Monitoring and Alerts
- **Tool**: `Prometheus`
    - Detect anomalies or errors.
    - Notify stakeholders through alerting mechanisms.

## Security Measures

### 1. Data Encryption
- Utilize MongoDB's native encryption for data at rest.
- Ensure data in transit, including API calls, is encrypted using HTTPS/SSL.

### 2. Input Validation and Sanitization
- Protect against SQL Injection, Cross-Site Scripting (XSS), and more.
- **Library**: `express-mongo-sanitize` for MongoDB injection prevention.

### 3. Rate Limiting
- **Library**: `express-rate-limit` 
    - Protect against brute force attacks.
    - Manage system request load.

### 4. Secure Dependencies
- Conduct regular audits using `npm audit`.

### 5. Authentication and Authorization
- Securely store tokens using HttpOnly cookies.
- Implement Role-based access controls (RBAC) for permissions.

### 6. Cross-Origin Resource Sharing (CORS)
- Ensure only specific, trusted domains can access the backend.

### 7. Security Headers and Content Security Policy (CSP)
- **Library**: `helmet`
    - Mitigate risks from clickjacking and potential code injection threats.

### 8. Backup Strategy
- Regularly backup the database and store securely for recovery.

