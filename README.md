# Scalable Web App with Authentication & Dashboard

## Overview
This project is a full-stack web application built using **React.js** and **Node.js**. It includes secure authentication, protected routes, and a responsive dashboard with CRUD functionality. The backend provides REST APIs secured with JWT, and the frontend consumes these APIs.

---

## Tech Stack

**Frontend:** React.js, Tailwind CSS, Axios  
**Backend:** Node.js, Express.js, MongoDB  
**Authentication:** JWT, bcrypt  

---

## Features

- User Signup & Login
- JWT-based Authentication
- Protected Dashboard
- Profile Fetch & Update
- CRUD Operations (Tasks)
- Search & Filter
- Responsive UI
- Secure Password Hashing
- Error Handling

---

## Setup

### Backend
```bash
cd backend
npm install
node server.js
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
### API Documentation
```bash
VITE_API_URL=**http://localhost:5000/api**
```

### API Endpoints Overview
### **Auth**
| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | /auth/register | Register user |
| POST   | /auth/login    | Login user    |
| GET    | /auth/profile  | Get profile   |
| GET    | /tasks         | Get all tasks |
| POST   | /tasks         | Create task   |
| PUT    | /tasks/:id     | Update task   |
| DELETE | /tasks/:id     | Delete task   |
---

### Deployment

Frontend deployed on Vercel
Link: **web-app-gray-five.vercel.app**

Backend deployed on Render
Link: **https://web-app-yv15.onrender.com**
---
 ### Scalability

This project follows a modular structure, reusable components, middleware-based authentication, and environment-based configuration for easy scalability.
---
Author

Your Name – Frontend Developer Intern Priyanka sharma MCA

GitHub Repository:**https://github.com/Psharma6141/web-app**

