import express from "express";
import Register from "../models/Register.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "yourSecretKey"; // put in .env

// POST route to add user
router.post("/add", async (req, res) => {
  console.log("Received data:", req.body);
  try {
    const { email, name, event } = req.body;

    const newRegister = new Register({ email, name, event });
    await newRegister.save();

    // ✅ Generate JWT with username
    const token = jwt.sign(
      {
        email: newRegister.email,
        name: newRegister.name,
        event: newRegister.event,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User saved successfully",
      token,
    });
  } catch (err) {
    console.error("Error saving user:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
