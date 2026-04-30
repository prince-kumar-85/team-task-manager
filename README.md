
Team Task Manager (Full-Stack MERN)

A full-stack web application that enables teams to create projects, assign tasks, and track progress with secure role-based access control (Admin/Member).

This project demonstrates real-world concepts like authentication, authorization, REST APIs, and full-stack deployment.

Live Demo

🌐 Frontend: https://team-task-manager-kb9d.vercel.app/

⚙️ Backend API: https://team-task-manager-1-23sr.onrender.com

🛠️ Tech Stack
🎨 Frontend
React.js (Vite)
Axios
React Router DOM
⚙️ Backend
Node.js
Express.js
MongoDB (Mongoose)
🔐 Authentication & Security
JSON Web Token (JWT)
Role-Based Access Control
✨ Key Features
🔐 Authentication
User Signup & Login
Secure JWT-based authentication
Role selection (Admin / Member)
👑 Role-Based Access Control
Admin Capabilities
Create and manage projects
Create and assign tasks to users
Update status of any task
Member Capabilities
View assigned tasks
Update status of their own tasks only
📁 Project Management
Create projects
Assign team members
View all projects in dashboard
📌 Task Management
Create tasks with title & description
Assign tasks to specific users
Link tasks to projects
Set due dates
Track status (Todo / In Progress / Done)
📊 Dashboard
User profile display
View all tasks & projects
Update task status (based on role)
Highlight overdue tasks
⏰ Overdue Task Tracking

Tasks with expired due dates are automatically flagged:

⚠ Overdue Task
🔗 API Endpoints
🔐 Auth Routes
POST /api/auth/signup → Register new user
POST /api/auth/login → Login user
GET /api/auth/me → Get logged-in user
GET /api/auth/users → Get all users
📁 Project Routes
POST /api/projects → Create project
GET /api/projects → Get all projects
📌 Task Routes
POST /api/tasks → Create task
GET /api/tasks → Get tasks
PUT /api/tasks/:id → Update task
⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
ADMIN_SECRET=admin123
PORT=5000

Run backend:

node server.js
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔐 Role-Based Logic
Role	Access Level
Admin	Full control over tasks & projects
Member	Limited access (only assigned tasks)
📸 Screenshots

Add screenshots of dashboard, login, task creation, etc.

🎥 Demo Video

👉 Add your demo video link (2–5 minutes)

🚀 Deployment
Backend
Hosted on Render
Frontend
Hosted on Vercel
🏆 Project Highlights

✔ Full-stack MERN application
✔ Secure authentication system
✔ Role-based authorization
✔ RESTful API architecture
✔ Real-time task tracking
✔ Deployed & production-ready

👨‍💻 Author

Prince Kumar
📧 Email: princekumarkha2005@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/prince-kumar-092512275/

💻 GitHub: https://github.com/prince-kumar-85
