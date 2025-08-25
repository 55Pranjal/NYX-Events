"use client";

import DarkVeil from "./Darkveil";
<<<<<<< HEAD
import { useEffect, useState } from "react"; // Add useState import
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Add axios import

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // Add state for messages

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.dispatchEvent(new Event("authChange"));
      // Force a state update to ensure Navbar re-renders
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    }
  }, [navigate]);

  const handleGithubLogin = () => {
    window.location.href = `https://backend-nyx-9-m6ff.onrender.com/auth/github`;
  };

  // Add regular email/password login handler
=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state

>>>>>>> local-changes
  const handleRegularLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://backend-nyx-9-m6ff.onrender.com/api/users/login`,
<<<<<<< HEAD
        {
          email: "user@example.com", // You'll need to add form inputs for these
          password: "password",
        }
=======
        { email, password }
>>>>>>> local-changes
      );

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
<<<<<<< HEAD
        window.location.reload(true);
        window.dispatchEvent(new Event("authChange"));
        window.dispatchEvent(new Event("storage"));
      }
    } catch (err) {
      console.error(err);
      setMessage("Login failed");
=======
        window.dispatchEvent(new Event("authChange"));
        window.dispatchEvent(new Event("storage"));
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data?.error || err.message);
      setMessage(err.response?.data?.error || "Login failed");
>>>>>>> local-changes
    }
  };

  return (
    <>
      <DarkVeil />

<<<<<<< HEAD
      <div className=" text-white py-14 container mx-auto">
        <h1 className="text-center font-bold text-3xl">Login to Get Started</h1>

        <div className="flex flex-col gap-2 min-h-screen items-center  p-10">
          {/* Add regular login form */}
          <form onSubmit={handleRegularLogin} className="mb-6">
=======
      <div className="text-white py-14 container mx-auto">
        <h1 className="text-center font-bold text-3xl">Login to Get Started</h1>

        <div className="flex flex-col gap-2 min-h-screen items-center p-10">
          <form
            onSubmit={handleRegularLogin}
            className="mb-6 w-full max-w-sm relative"
          >
>>>>>>> local-changes
            <input
              type="email"
              placeholder="Email"
              required
<<<<<<< HEAD
              className="w-full rounded-lg px-4 mt-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent text-white"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full rounded-lg px-4 mt-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent text-white"
            />
=======
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg px-4 mt-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent text-white"
            />

            <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"} // toggle type
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  // Correct Eye Slash icon
                  <img src="/eyeoff.svg" alt="" className="size-6 invert" />
                ) : (
                  // Correct Eye icon
                  <img src="/eye.svg" alt="" className="size-6 invert" />
                )}
              </button>
            </div>

>>>>>>> local-changes
            <button
              type="submit"
              className="mt-4 font-semibold text-sm bg-purple-800 text-white rounded-md px-5 py-2 w-full"
            >
              Login with Email
            </button>
          </form>

<<<<<<< HEAD
          <button
            onClick={handleGithubLogin}
            className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 73 73"
              version="1.1"
            >
              {/* Your GitHub SVG code */}
            </svg>
            <span>Continue with Github</span>
          </button>

=======
>>>>>>> local-changes
          {message && <p className="mt-4 text-red-400">{message}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
