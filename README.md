Here’s a **complete professional README.md** you can directly copy into your project 👇

---

# 📌 Team Task Manager (Full-Stack MERN)

A full-stack web application where users can create projects, assign tasks, and track progress with **role-based access (Admin/Member)**.

---

# 🚀 Live Demo

👉 Frontend: `https://team-task-manager-kb9d.vercel.app/`
👉 Backend: `https://team-task-manager-1-23sr.onrender.com`

---

# 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Other

* JWT Authentication
* Role-Based Access Control

---

# ✨ Features

## 🔐 Authentication

* Signup/Login
* JWT-based authentication
* Role selection (Admin / Member)

---

## 👑 Role-Based Access

### Admin

* Create Projects
* Create Tasks
* Assign Tasks to Users
* Update any task status

### Member

* View assigned tasks
* Update only their task status

---

## 📁 Project Management

* Create projects
* Add members to project
* View all projects

---

## 📌 Task Management

* Create task
* Assign to user
* Link to project
* Add description & due date
* Status tracking (Todo / In Progress / Done)

---

## 📊 Dashboard

* View profile
* View all tasks
* View projects
* Status update dropdown
* Overdue task highlighting

---

## ⏰ Overdue Tasks

* Tasks with past due date are marked:

```text
⚠ Overdue Task
```

---

# 🔗 API Endpoints

## Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`
* `GET /api/auth/me`
* `GET /api/auth/users`

---

## Projects

* `POST /api/projects`
* `GET /api/projects`

---

## Tasks

* `POST /api/tasks`
* `GET /api/tasks`
* `PUT /api/tasks/:id`

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
ADMIN_SECRET=admin123
PORT=5000
```

Run backend:

```bash
node server.js
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🔐 Role-Based Logic

| Role   | Permissions                   |
| ------ | ----------------------------- |
| Admin  | Full control                  |
| Member | Limited (assigned tasks only) |

---

# 📸 Screenshots (Optional)

*Add your screenshots here*

---

# 🎥 Demo Video

👉 Add your 2–5 minute demo video link here

---

# 🚀 Deployment

## Backend

* Deployed on Railway

## Frontend

* Deployed on Vercel

---

# 🏆 Final Status

✅ Authentication
✅ Role-based access
✅ Project management
✅ Task assignment
✅ Dashboard
✅ Overdue tracking
✅ REST API
✅ MongoDB

---

# 🙌 Author

**Prince Kumar**
📧 Email: princekumarkha2005@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/prince-kumar-092512275/




