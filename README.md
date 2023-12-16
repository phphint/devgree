# devgree.com - Technical Design Document

## Introduction
Devgree.com is an innovative platform for tech enthusiasts, offering capabilities to showcase portfolios and earn tech certifications.

## Project Overview
Core functionalities of Devgree.com include:
- Portfolio management.
- Acquisition and display of tech certifications.
- Token-based service access for enhanced features.

## System Architecture

### 1. Front-end:
- **Framework**: React.js within a Node.js environment.
- **State Management**: Redux.
- **ORM**: Mongoose (for MongoDB operations and schema validation).

### 2. Back-end:
- **Runtime**: Node.js.
- **Framework**: Express.js with Passport.js for authentication.
- **API Strategy**: REST
- **Libraries**:
  - stripe-node for payment processing
  - Twilio SDK for communications
  - bcrypt for password hashing
  - jsonwebtoken for JWT handling
  - express-rate-limit for rate limiting
  - express-mongo-sanitize for data sanitization
  - RabbitMQ for message queuing
  - rest-rate-limit for API rate limiting

### 3. Database:
- **System**: MongoDB.

## Technical Specifications
- **Primary Language**: JavaScript (ES6+).
- **Form Management**: Formik and Yup.
- **Tools**: npm, Webpack.
- **Version Control**: Git with GitHub repositories.

## API Operations  

### 4. User Operations:
- Registration, authentication, directory listing.
- Payment detail management.
- Portfolio item management.

### 5. Payment Operations:
- Token purchase and redemption.

## Authentication Flow
- Passport.js with JWT for secure authentication and token management.

## Deployment Strategy
**For MVP:**
- `docker-compose up -d` for launching the application.
- Docker Containers for frontend, backend, MinIO, and Cron jobs.

**Future Scaling:**
- AWS S3 for frontend hosting.
- AWS Lambda for backend processing.
- MongoDB Atlas for the database.
- Amazon S3 for file management.

## Testing Strategy
- Jest for unit testing.
- Postman or Apollo Client for integration testing.
- Cypress for E2E testing, especially with React apps.

## Error Handling
1. **Detailed Logging** with `winston`.
2. **User-Friendly Error Messages**.
3. **Retries and Failovers**.
4. **Monitoring and Alerts** with `Prometheus`.

## Security Measures
1. **Data Encryption** with MongoDB encryption and HTTPS/SSL.
2. **Input Validation and Sanitization** with `express-mongo-sanitize`.
3. **Rate Limiting** with `express-rate-limit`.
4. **Secure Dependencies** using `npm audit`.
5. **Authentication and Authorization** with secure token storage and RBAC.
6. **CORS** for specific domain access.
7. **Security Headers and CSP** with `helmet`.
8. **Backup Strategy** for regular database backups.

## Portfolio Sharing and Control
- **Share Tokens**: Users can share their portfolios via shareable links, generated using tokens.
- **Data Control**: Users select which data to display on their shared portfolio.
- **Default Portfolio View**: Configurable default view settings for non-customized portfolios.

## Structured Data Implementation
- Front-end and portfolio pages to use structured data (Schema.org, JSON-LD) for better SEO and data representation.

## Performance Testing and Optimization
- React build performance testing and optimizations.
- Back-end performance enhancements, including efficient database queries and caching strategies.

## Payment Token Redemption System
- Users redeem tokens to access premium services like the share token portfolio feature and skill assessment certifications.
- Services provided include AI-driven features by QueryCortex.com for AI resume candidate interviewing.
