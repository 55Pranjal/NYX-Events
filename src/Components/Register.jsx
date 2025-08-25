import React from "react";
import DarkVeil from "./Darkveil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://backend-nyx-9-m6ff.onrender.com/api/registers/add`,
        {
          email,
          name,
          event,
        }
      );

      setMessage(res.data.message);

      // ✅ Redirect to home page if signup is successful
      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);
        window.dispatchEvent(new Event("authChange"));
        window.dispatchEvent(new Event("storage")); // Add this line
        navigate("/");
      }

      // Reset form
      setName("");
      setEmail("");
      setEvent("");
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
          <form onSubmit={handleSubmit} className="mb-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg px-4 mt-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent text-white"
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg px-4 mt-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent text-white"
            />
            <input
              type="text"
              placeholder="Enter event"
              value={event}
              required
              onChange={(e) => setEvent(e.target.value)}
              className="w-full rounded-lg px-4 mt-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent text-white"
            />
            <button
              type="submit"
              className="mt-4 font-semibold text-sm bg-purple-800 text-white rounded-md px-5 py-2 w-full"
            >
              Register
            </button>
            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
