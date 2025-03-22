# Job Portal Backend

## 📌 Project Overview
This is the backend for a **Job Portal** application. It provides RESTful APIs for user authentication, job management, job applications, and real-time updates using WebSockets.

---

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Token)
- **File Storage:** Cloudinary
- **Real-Time Communication:** Socket.io

---

## 📂 Project Structure
```
backend/
│── controllers/          # Handles business logic
│── database/             # Database connection setup
│── middlewares/          # Authentication, error handling, etc.
│── models/               # Mongoose schemas for MongoDB
│── routes/               # API route handlers
│── config/               # Configuration files
│── server.js             # Main server entry point
│── app.js                # Express app setup
│── .env                  # Environment variables
│── package.json          # Dependencies and scripts
```

---

## ⚙️ Setup and Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/BheemaraRakesh/Backend_Assignment
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=4000

# Cloudinary Config
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# MongoDB Connection
DB_URL=mongodb+srv://your_username:your_password@yourcluster.mongodb.net/your_database

# JWT Configuration
JWT_SECRET_KEY=your_secret_key
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Node Environment
NODE_ENV=development
```

### 4️⃣ Start the Server
```sh
npm run dev
```

The server will run at `http://localhost:4000`

---

## 🛠️ API Endpoints

### **1️⃣ Authentication APIs**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/v1/user/register` | Register a new user |
| `POST` | `/api/v1/user/login` | Login and get JWT token |
| `GET`  | `/api/v1/user/logout` | Logout user |
| `GET`  | `/api/v1/user/profile` | Get user profile (Requires JWT) |

### **2️⃣ Job APIs**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/v1/job` | Create a job posting (Requires JWT) |
| `GET`  | `/api/v1/job` | Get all job listings |
| `GET`  | `/api/v1/job/:id` | Get details of a specific job |
| `PUT`  | `/api/v1/job/:id` | Update a job posting (Requires JWT) |
| `DELETE` | `/api/v1/job/:id` | Delete a job posting (Requires JWT) |

### **3️⃣ Job Applications APIs**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/v1/application/apply` | Apply for a job (Requires JWT) |
| `GET`  | `/api/v1/application/:jobId` | Get applications for a job |
| `DELETE` | `/api/v1/application/:id` | Delete a job application |

### **4️⃣ File Upload API (Cloudinary)**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/v1/upload` | Upload an image to Cloudinary |

### **5️⃣ WebSocket Events (Real-Time Updates)**
| Event | Description |
|--------|-------------|
| `newJob` | Broadcasts when a new job is posted |
| `jobUpdate` | Notifies users of job updates |

---

## 🔐 Security Features
- **JWT Authentication** for protected routes
- **Rate Limiting** to prevent API abuse
- **Error Handling Middleware** for centralized error management

---

## 📌 Additional Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Run the server in development mode |
| `npm start` | Run the server in production mode |

---

## 🤝 Contribution
1. Fork the repo
2. Create a new branch (`feature-branch`)
3. Commit changes
4. Push to your branch and create a PR

---



