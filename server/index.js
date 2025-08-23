import express from "express";
import cors from "cors";
import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/UserRoutes.js";
import EventRoutes from "./routes/EventRoutes.js";
import RegisterRoute from "./routes/RegisterRoute.js";
import { a } from "motion/react-m";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://nyxevents.netlify.app/", // your Vite frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

const JWT_SECRET = "super_secret_key"; // use env in production

// Step 1: Redirect user to GitHub for consent
app.get("/auth/github", (req, res) => {
  const redirect_uri = "http://localhost:5000/auth/github/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=user:email`
  );
});

// Step 2: GitHub redirects back here with code
app.get("/auth/github/callback", async (req, res) => {
  const code = req.query.code;
  try {
    // Exchange code for access token
    const tokenRes = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      { headers: { Accept: "application/json" } }
    );

    const accessToken = tokenRes.data.access_token;

    // Fetch user info from GitHub
    const userRes = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const user = userRes.data;

    // Issue our own JWT for frontend
    const ourToken = jwt.sign(
      {
        id: user.id,
        login: user.login,
        name: user.name || user.login,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    // Redirect back to frontend with token
    res.redirect(`http://localhost:5173/?token=${ourToken}`);
  } catch (e) {
    console.error(e);
    res.status(500).send("GitHub auth failed");
  }
});

// Protected route example
app.get("/api/protected", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ msg: "Protected data", user: decoded });
  } catch {
    res.status(401).json({ msg: "Invalid/Expired token" });
  }
});

app.use("/api/users", userRoutes);
app.use("/api/events", EventRoutes);
app.use("/api/registers", RegisterRoute);
app.options("*", cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
