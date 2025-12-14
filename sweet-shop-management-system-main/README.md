# Sweet Shop Management System

A production-ready full-stack application built using Test-Driven Development (TDD) principles.

---

## 📁 Project Structure

```
quickStart/
├── sweet-shop-backend/      # Spring Boot + MySQL Backend
│   ├── src/
│   ├── pom.xml
│   ├── README.md           # Complete documentation
│   └── PROJECT_SUMMARY.md  # Implementation details
│
└── sweet-shop-frontend/     # React Frontend
    ├── src/
    ├── package.json
    └── (see backend README for setup)
```

---

## 🚀 Quick Start

### Backend

```bash
cd sweet-shop-backend
.\mvnw.cmd spring-boot:run
```

Server runs on:

```
http://localhost:8080
```

---

### Frontend

```bash
cd sweet-shop-frontend
npm start
```

Application runs on:

```
http://localhost:3000
```

---

## 📚 Documentation

* **Primary documentation:** `sweet-shop-backend/README.md`
* **Detailed implementation:** `sweet-shop-backend/PROJECT_SUMMARY.md`

---

## 🔑 Key Features

* JWT Authentication
* Role-Based Access Control (USER, ADMIN)
* Full CRUD APIs for sweets
* Inventory management
* Search and filter functionality
* Responsive React-based UI
* MySQL database integration
* Test-Driven Development workflow

---

## 🎯 Next Steps

1. Configure MySQL credentials in:
   `sweet-shop-backend/src/main/resources/application.properties`
2. Start the backend server
3. Start the frontend application
4. Open the application at `http://localhost:3000`
5. Register a new user or log in

---

For complete setup and configuration details, refer to:
`sweet-shop-backend/README.md`
