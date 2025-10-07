# TodoApp — MERN Stack (JWT Auth)

A full-stack Todo Application built with the MERN stack — featuring secure JWT authentication, a modern React frontend, and a Node.js + Express + MongoDB backend.

---

##  Tech Stack

### Frontend (`todo-frontend`)
- React + Vite  
- TailwindCSS for styling  
- Axios for API communication  
- React Router for navigation  

### Backend (`todo-backend`)
- Node.js + Express.js  
- MongoDB (with Mongoose)  
- JWT (JSON Web Token) for authentication  
- bcrypt.js for password hashing  
- dotenv for environment management  
- CORS enabled for frontend-backend communication  

---

## 📂 Folder Structure
TodoApp/
│
├── todo-backend/ # Express + MongoDB + JWT Auth
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
├── todo-frontend/ # React + Tailwind + Axios
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ └── App.jsx
│ └── vite.config.js
│
└── README.md


---

##  Features

- User Registration & Login (JWT Protected)  
- Token-based authentication  
- Create, Read, Update, Delete Todos  
- Responsive UI with TailwindCSS  
- Secure password hashing  
- Error handling and token validation middleware  

---

##  Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/MuhammadHasan-04/todo-app.git
cd todo-app

--Backend Setup
cd todo-backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the backend server:

npm start

--Frontend Setup
cd ../todo-frontend
npm install
npm run dev

