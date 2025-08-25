import express from "express";
import Event from "../models/Event.js"; // your Event model

const router = express.Router();

router.post("/add", async (req, res) => {
  console.log("POST /events/add hit");
  try {
    const {
      title,
      date,
      time,
      location,
      description,
      guest,
      registrationStatus,
      mapEmbedUrl,
      agenda,
      rules,
      faqs,
    } = req.body;
    const newEvent = new Event({
      title,
      date,
      time,
      location,
      description,
      guest,
      registrationStatus,
      mapEmbedUrl,
      agenda,
      rules,
      faqs,
    });
    await newEvent.save();
    res.status(201).json({ message: "Event saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
