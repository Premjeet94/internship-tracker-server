# 🚀 Internship Tracker – Backend

Backend for an **Internship Tracker app** that helps users securely track and manage their internship applications.

Built to understand **real backend concepts** like authentication, protected routes, and API design — not just CRUD.

---

## ✨ Features

- 🔐 JWT authentication
- 🛡️ Protected routes with middleware
- 📝 CRUD APIs for internship applications
- 👤 User-specific data access
- 🗄️ MongoDB + Mongoose

---

## 🛠️ Tech Stack

Node.js · Express.js · MongoDB · JWT

---

## 📂 Folder Structure

controllers/
models/
routes/
middleware/
utils/
config/
server.js

---

## 🔑 Auth Flow (Quick)

1. User logs in / registers
2. JWT token is generated
3. Token is sent in headers for protected APIs


---

## 📡 API Routes

**Auth**
- POST `/api/auth/register`
- POST `/api/auth/login`

**Applications (Protected)**
- POST `/api/applications`
- GET `/api/applications`
- PUT `/api/applications/:id`
- DELETE `/api/applications/:id`

---

## 🚀 Run Locally

```bash
git clone https://github.com/Premjeet94/internship-tracker-server.git
cd internship-tracker-server
npm install
npm run dev

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

Server runs on 👉 http://localhost:5000

🧪 Testing
    Test APIs using Postman or Thunder Client.

📌 Status

✅ Backend done
🔄 Frontend in progress

👨‍💻 Author

Premjeet Vivek
GitHub: https://github.com/Premjeet94

LinkedIn: https://www.linkedin.com/in/premjeet-vivek-b95374246/

⭐ If you like this project, consider giving it a star