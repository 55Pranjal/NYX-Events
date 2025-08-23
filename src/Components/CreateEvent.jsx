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

  //   useEffect(() => {
  //     const params = new URLSearchParams(window.location.search);
  //     const token = params.get("token");

  //     if (token) {
  //       localStorage.setItem("token", token); // Save token
  //       window.history.replaceState({}, document.title, "/"); // Remove token from URL
  //     }
  //   }, []);
  //   const [formData, setFormData] = useState({
  //     title: "",
  //     date: "",
  //     time: "",
  //     location: "",
  //     description: "",
  //     guest: "",
  //     registrationStatus: "",
  //     mapEmbedUrl: "",
  //     agenda: "",
  //     rules: "",
  //     faqs: "",
  //   });

  //   const token = localStorage.getItem("token"); // store your GitHub JWT in localStorage after login
  //   console.log("JWT token being sent:", token);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await fetch("http://localhost:5000/api/events/create", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       const data = await response.json();
  //       if (response.ok) {
  //         alert("Event created successfully!");
  //         setFormData({
  //           title: "",
  //           date: "",
  //           time: "",
  //           location: "",
  //           description: "",
  //           guest: "",
  //           registrationStatus: "",
  //           mapEmbedUrl: "",
  //           agenda: "",
  //           rules: "",
  //           faqs: "",
  //         });
  //       } else {
  //         alert(data.error || "Failed to create event");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       alert("Server error");
  //     }
  //   };

  //   console.log("Submitting formData:", formData);

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

      // ✅ Redirect to home page if signup is successful
      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);

        navigate("/");
      }

      // Reset form
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
      <div className="flex flex-col justify-center items-center md:border md:border-1 md:border-black w-screen  md:w-[370px] ">
        <div className="min-w-full p-5 mb-auto min-h-full text-white">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-2xl">Create your</h1>
            <h1 className="font-bold text-2xl"> Event</h1>

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
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
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
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
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
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <input
              type="text"
              placeholder="Enter your rules"
              required
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              className="w-full rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
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
              Create Account
            </button>

            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
