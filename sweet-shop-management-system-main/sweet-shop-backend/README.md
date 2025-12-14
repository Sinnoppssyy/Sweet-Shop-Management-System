
Sweet Shop Management System
A Secure, Test-Driven Full-Stack Web Application

PROJECT SUMMARY
The Sweet Shop Management System is a full-stack web application developed to demonstrate secure backend design, RESTful API development, and modern frontend practices. The system allows customers to browse and purchase sweets, while administrators manage inventory through protected endpoints.

The project focuses on Test-Driven Development (TDD), JWT-based authentication, and role-based access control, making it suitable for academic evaluation and professional portfolios.

CORE FEATURES

Backend (Spring Boot + MySQL)
- JWT-based authentication and authorization
- Role-based access control (USER and ADMIN)
- RESTful API design
- MySQL database integration using JPA/Hibernate
- Transaction-safe inventory operations
- Comprehensive unit and integration testing
- Code coverage reporting using JaCoCo

Frontend (React)
- Responsive and user-friendly interface
- JWT token handling
- Protected routes
- Sweet search and filtering
- Inventory updates in real time
- Admin dashboard for stock management

TECHNOLOGY STACK

Backend
- Java 21
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- MySQL 8
- JWT (io.jsonwebtoken)
- Maven
- JUnit 5 and Mockito
- JaCoCo

Frontend
- React 18
- React Router
- Axios
- Modern CSS

SYSTEM REQUIREMENTS
- Java JDK 21 or above
- MySQL 8 or above
- Node.js 18+ and npm
- Git

LOCAL SETUP

Database Setup
1. Start MySQL Server
2. Create database (optional):
   CREATE DATABASE sweetshop_db;
3. Configure credentials in application.properties

Backend Setup
- Clone repository
- Run mvn clean install
- Run mvn test
- Start application using mvn spring-boot:run
Backend runs on http://localhost:8080

Frontend Setup
- Navigate to frontend directory
- Run npm install
- Start using npm start
Frontend runs on http://localhost:3000

API OVERVIEW

Public APIs
- User registration
- User login and JWT generation

Protected APIs
- View sweets
- Search sweets
- Purchase sweets

Admin APIs
- Add sweets
- Update sweets
- Delete sweets
- Restock inventory

All protected endpoints require Authorization header with JWT token.

TESTING APPROACH
The project follows Test-Driven Development:
1. Write failing tests
2. Implement logic
3. Refactor and optimize

Test coverage exceeds 80 percent and includes:
- Repository tests
- Service layer tests
- Controller tests
- Security tests
- Integration tests

RESPONSIBLE AI USAGE
AI tools were used only to assist development, not to replace manual implementation.

AI assistance included:
- Boilerplate code suggestions
- Test case structure ideas
- DTO scaffolding
- Documentation formatting

All AI-generated content was manually reviewed, modified, and tested.

PROJECT STRUCTURE

sweet-shop-backend/
- config
- controller
- dto
- entity
- repository
- security
- service

sweet-shop-frontend/
- components
- context
- services
- App.jsx

SECURITY IMPLEMENTATION
- BCrypt password encryption
- Stateless JWT authentication
- Role-based authorization
- Secure CORS configuration
- SQL injection prevention via JPA
- Token expiration handling

DEVELOPMENT METHODOLOGY
The project strictly follows the RED-GREEN-REFACTOR cycle of Test-Driven Development to ensure reliable and maintainable code.

ACADEMIC DECLARATION
This project is an original implementation created for educational and portfolio purposes. AI tools were used responsibly as development assistants.
