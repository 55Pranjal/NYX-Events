import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true }, // Can also use Date type
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    guest: { type: String, required: true },
    registrationStatus: { type: String, required: true },
    mapEmbedUrl: { type: String },
    agenda: { type: [String], default: [] }, // store as array of strings
    rules: { type: [String], default: [] },
    faqs: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
