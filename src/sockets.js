// sockets.js
const pool = require("./db");

function setupSocket(io) {
  pool.connect((err, client, release) => {
    if (err) {
      console.error("DB connection error:", err);
      return;
    }

    client.query("LISTEN orders_channel", (err) => {
      if (err) console.error("Failed to LISTEN orders_channel:", err);
    });

    client.on("notification", (msg) => {
      try {
        const payload = JSON.parse(msg.payload);
        console.log("DB Change:", payload);
        io.emit("order_update", payload);
      } catch (err) {
        console.error("Failed to parse notification:", err);
      }
    });

    // Handle client disconnect gracefully
    client.on("end", () => {
      console.log("DB listener disconnected");
    });
  });

  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });

    socket.on("error", (err) => {
      console.error("Socket error:", err);
    });
  });
}

module.exports = setupSocket;
