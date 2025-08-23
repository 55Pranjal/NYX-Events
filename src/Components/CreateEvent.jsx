import React, { useState, useEffect } from "react";
import DarkVeil from "./Darkveil";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [guest, setGuest] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [mapEmbedUrl, setmapEmbedUrl] = useState("");
  const [agenda, setAgenda] = useState("");
  const [rules, setRules] = useState("");
  const [faqs, setFaqs] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/events/add", {
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

      setMessage(res.data.message);

      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);

        navigate("/");
      }

      setTitle("");
      setDate("");
      setTime("");
      setLocation("");
      setDescription("");
      setGuest("");
      setRegistrationStatus("");
      setmapEmbedUrl("");
      setAgenda("");
      setRules("");
      setFaqs("");
    } catch (err) {
      console.error(err);
      setMessage("Error saving user");
    }
  };

  return (
    <div>
      <DarkVeil />
      <div className=" text-white py-14 container mx-auto">
        <h1 className="text-center font-bold text-3xl">
          Register for the event
        </h1>

        <div className="flex flex-col gap-2 min-h-screen items-center  p-10">
          {/* Add regular login form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg px-4 mt-6 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-4 rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-lg px-4 my-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full my-4 rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your guest"
              required
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your registrationStatus"
              required
              value={registrationStatus}
              onChange={(e) => setRegistrationStatus(e.target.value)}
              className="w-full my-4 rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your mapEmbedUrl"
              required
              value={mapEmbedUrl}
              onChange={(e) => setmapEmbedUrl(e.target.value)}
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your agenda"
              required
              value={agenda}
              onChange={(e) => setAgenda(e.target.value)}
              className="w-full mt-4 rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your rules"
              required
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              className="w-full my-4 rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your faqs"
              required
              value={faqs}
              onChange={(e) => setFaqs(e.target.value)}
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <button
              type="submit"
              className="mt-8 font-semibold text-sm mb-2 bg-purple-800 text-white rounded-md px-5 py-2 w-[100%]"
            >
              Create Event
            </button>

            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
