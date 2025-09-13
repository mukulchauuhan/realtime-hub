// sockets.js
const pool = require("./db");

function setupSocket(io) {
  // Listen to DB notifications
  pool.connect((err, client, release) => {
    if (err) throw err;
    client.query("LISTEN orders_channel");
    client.on("notification", (msg) => {
      const payload = JSON.parse(msg.payload);
      console.log("DB Change:", payload);
      io.emit("order_update", payload);
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
  });
}

module.exports = setupSocket;
