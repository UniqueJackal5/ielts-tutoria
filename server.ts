import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes";
import fileRoutes from "./src/routes/fileRoutes";
import bookingRoutes from "./src/routes/bookingRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/ielts-tutoria"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => {
    console.error("MongoDB connection failed. Details:");
    console.error("Connection URI:", process.env.MONGO_URI || "mongodb://localhost:27017/ielts-tutoria");
    console.error("Error name:", err.name);
    console.error("Error message:", err.message);
    console.error("Stack trace:", err.stack);
    process.exit(1);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/bookings", bookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
