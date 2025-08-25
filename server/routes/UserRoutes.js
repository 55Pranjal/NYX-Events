import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
<<<<<<< HEAD

const router = express.Router();
const JWT_SECRET = "yourSecretKey"; // put in .env

// POST route to add user
router.post("/add", async (req, res) => {
  console.log("Received data:", req.body);
  try {
    const { name, email, password, phone } = req.body;

    const newUser = new User({ name, email, password, phone });
    await newUser.save();

    // ✅ Generate JWT with username
    const token = jwt.sign(
      { id: newUser._id, name: newUser.name, email: newUser.email },
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

=======
import bcrypt from "bcryptjs";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";

router.post("/add", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // 🔍 Debug: Log incoming data
    console.log("=== REGISTRATION DEBUG ===");
    console.log("Registration data received:", { name, email, phone });
    console.log("Phone value:", phone);
    console.log("Phone type:", typeof phone);

    // Hash the password first
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new User({ name, email, password: hashedPassword, phone });

    // 🔍 Debug: Log user before saving
    console.log("User object before saving:", {
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
    });

    await newUser.save();

    // 🔍 Debug: Log saved user
    console.log("User saved to DB:", {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
    });

    // Generate JWT
    const payload = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
    };

    // 🔍 Debug: Log JWT payload
    console.log("JWT payload for registration:", payload);

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    console.log("=== END REGISTRATION DEBUG ===");

    res.status(201).json({ message: "User saved successfully", token });
  } catch (err) {
    console.error("Error saving user:", err);

    // Handle MongoDB duplicate key error
    if (err.code === 11000) {
      if (err.keyPattern && err.keyPattern.email) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }
      return res.status(400).json({ error: "Duplicate entry found" });
    }

    // Handle validation errors
    if (err.name === "ValidationError") {
      const validationErrors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: validationErrors.join(", ") });
    }

    return res.status(500).json({ error: "Server error" });
  }
});

// POST route for login
>>>>>>> local-changes
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

<<<<<<< HEAD
=======
    console.log("=== LOGIN DEBUG ===");
    console.log("Login attempt for email:", email);

>>>>>>> local-changes
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

<<<<<<< HEAD
    // Compare passwords (you should hash passwords in your User model)
    if (user.password !== password) {
=======
    // 🔍 Debug: Log user data from database
    console.log("User found in DB:", {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
    console.log("Raw user object:", user.toObject());
    console.log("Phone field exists:", user.hasOwnProperty("phone"));
    console.log("Phone value:", user.phone);
    console.log("Phone type:", typeof user.phone);

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
>>>>>>> local-changes
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT
<<<<<<< HEAD
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
=======
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
    console.log("JWT payload for login:", payload);

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    console.log("=== END LOGIN DEBUG ===");
>>>>>>> local-changes

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("Login error:", err.message);
<<<<<<< HEAD
    res.status(500).json({ error: err.message });
=======
    res.status(500).json({ error: "Server error" });
>>>>>>> local-changes
  }
});

export default router;
