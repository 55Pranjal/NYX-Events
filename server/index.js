import express from "express";
import cors from "cors";
import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/UserRoutes.js";
import EventRoutes from "./routes/EventRoutes.js";
import RegisterRoute from "./routes/RegisterRoute.js";

mongoose.set("strictQuery", true); // optional, but good practice
mongoose.set("debug", false); // disables extra Mongo logging

dotenv.config();
console.log("Environment check:");
console.log("BACKEND_URL:", process.env.BACKEND_URL);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);

console.log("MONGO_URI:", process.env.MONGO_URI ? "Set" : "Missing");
console.log("Full BACKEND_URL:", process.env.BACKEND_URL);

const app = express();

app.use(express.json());
app.use(
  // cors({
  //   origin: "https://nyxevents.netlify.app", // your Vite frontend
  //   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  //   allowedHeaders: ["Content-Type", "Authorization"],
  // })
  cors()
);

const JWT_SECRET = process.env.JWT_SECRET; // use env in production

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach user info to request
    next();
  } catch {
    res.status(401).json({ msg: "Invalid/Expired token" });
  }
};

// Protected route example
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ msg: "Protected data", user: req.user });
});

console.log("About to import routes...");
app.use("/api/users", userRoutes);
app.use("/api/events", EventRoutes);
app.use("/api/registers", RegisterRoute);
app.options("*", cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
