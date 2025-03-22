
import app from "./app.js";
import cloudinary from "cloudinary";
import http from "http";
import { Server } from "socket.io";

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create HTTP Server for WebSockets
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  // Listen for new job postings
  socket.on("newJob", (job) => {
    io.emit("jobUpdate", job); // Broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start Server
server.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
