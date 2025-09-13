# Real-Time Hub – PostgreSQL Order Notifications System

## 📖 Overview
A robust and scalable real-time notification system that listens to changes in a PostgreSQL database and pushes updates to clients instantly using Node.js, Express, and WebSockets. Designed as a backend proof-of-concept, this project showcases clean architecture, efficient database-driven event propagation, and production-ready best practices.

---

## ✨ Features
- ✅ Real-time client updates on order **insert**, **update**, and **delete** operations
- ✅ Efficient PostgreSQL event handling via `LISTEN/NOTIFY` **without polling**
- ✅ WebSocket communication using `socket.io` for instant updates
- ✅ Modular, clean code structure for scalability and maintainability
- ✅ Environment-based configuration using `.env`
- ✅ Graceful shutdown and error handling
- ✅ Secure handling of credentials (excluded from version control)

---

## 🛠 Tech Stack

| Component      | Technology      |
| -------------- | --------------- |
| Backend        | Node.js, Express |
| Database       | PostgreSQL      |
| Real-time comm | socket.io       |
| Configurations | dotenv          |
| Others         | npm, Git        |

---

## 🚀 Setup Instructions

### 1. Clone the repository

``
git clone https://github.com/mukulchauuhan/realtime-hub.git
cd realtime-hub``

### 2. Install dependencies
``npm install``

### 3. Setup PostgreSQL
``Create a PostgreSQL database, e.g. realtime_hub_db.``

Run the initialization script to set up tables and triggers:
psql -U <your-username> -d realtime_hub_db -f db/init.sql

### 4. Configure environment variables
``Copy .env.example to .env:
cp .env.example .env``
Edit .env and add your database connection string:

``DATABASE_URL=postgresql://<username>:<password>@localhost:5432/realtime_hub_db
PORT=3000``

### 5. Start the server
``npm start``
The app will run on http://localhost:3000/. Open multiple browser tabs to test real-time updates.

---
## 📂 Folder Structure

realtime-hub/
├── db/
│   └── init.sql             # Database schema and triggers
├── public/
│   ├── index.html          # Client interface
│   └── styles.css          # UI styling
├── src/
│   ├── db.js                # Database connection logic
│   ├── server.js            # Main server application
│   └── sockets.js           # WebSocket logic
├── .env.example            # Environment config template
├── .gitignore              # Git ignore rules
├── package.json            # Node.js metadata and scripts
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation

✅ Best Practices Implemented
🔐 Sensitive data kept out of version control
📂 Clean and modular project structure
⚙ Graceful shutdown and error handling
🚀 Scalable real-time architecture using PostgreSQL notifications
✅ Reproducible dependency management with package-lock.json
🌱 Easy setup via .env.example template

## 📞 Contact
For questions, ideas, or collaboration, reach out at:
GitHub: https://github.com/mukulchauuhan
