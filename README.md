# Sweet Shop Management System

A full-stack web application built using **Spring Boot**, **React**, and **MySQL**, following **Test-Driven Development (TDD)** principles. This project demonstrates secure authentication, role-based access control, clean API design, and a modern frontend.

---

## 📌 Project Overview

The Sweet Shop Management System allows users to browse, search, and purchase sweets, while administrators manage inventory through secured APIs. The application is suitable for academic submission, portfolio use, and full-stack demonstrations.

---

## 🧩 Project Structure

```
quickStart/
├── sweet-shop-backend/      # Spring Boot + MySQL backend
│   ├── src/
│   ├── pom.xml
│   ├── README.md           # Backend documentation
│   └── PROJECT_SUMMARY.md  # Design & implementation details
│
└── sweet-shop-frontend/     # React frontend
    ├── src/
    └── package.json
```

---

## ✨ Key Features

* JWT-based authentication
* Role-Based Access Control (USER, ADMIN)
* RESTful CRUD APIs for sweets
* Inventory purchase and restock management
* Search and filter functionality
* Responsive React user interface
* MySQL database integration
* Test-Driven Development with high test coverage

---

## 🛠️ Technology Stack

**Backend:** Java 21, Spring Boot, Spring Security, JPA, MySQL, JWT, Maven
**Frontend:** React 18, React Router, Axios, CSS
**Testing:** JUnit 5, Mockito, JaCoCo

---

## 🚀 Quick Start

### Backend

```bash
cd sweet-shop-backend
.\mvnw.cmd spring-boot:run
```

Runs on: `http://localhost:8080`

### Frontend

```bash
cd sweet-shop-frontend
npm install
npm start
```

Runs on: `http://localhost:3000`

---

## 🔐 Security Highlights

* BCrypt password hashing
* Stateless JWT authentication
* Role-based endpoint protection
* CORS configuration
* SQL injection prevention via JPA

---

## 🧪 Development Methodology

This project follows **Test-Driven Development (TDD)**:

1. Write failing tests (RED)
2. Implement minimal logic (GREEN)
3. Refactor for quality (REFACTOR)

---

## 🤖 Responsible AI Usage

AI tools were used only for assistance such as boilerplate generation, test structure suggestions, and documentation formatting. All code was manually reviewed, modified, and tested to ensure correctness, originality, and security.

---

## 📄 Documentation

* Detailed setup and API usage: `sweet-shop-backend/README.md`
* Design and implementation notes: `sweet-shop-backend/PROJECT_SUMMARY.md`

---

## 📜 License

This project is developed for educational purposes only.
