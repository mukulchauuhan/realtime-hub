// server.js
require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const setupSocket = require("./sockets");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Setup WebSocket + DB notifications
setupSocket(io);

const PORT = process.env.PORT || 3000;

const serverInstance = server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
const shutdown = async () => {
  console.log("Shutting down server...");
  serverInstance.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
