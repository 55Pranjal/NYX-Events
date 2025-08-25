"use client";

import DarkVeil from "./Darkveil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state

  const handleRegularLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://backend-nyx-9-m6ff.onrender.com/api/users/login`,
        { email, password }
      );

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        window.dispatchEvent(new Event("authChange"));
        window.dispatchEvent(new Event("storage"));
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data?.error || err.message);
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <>
      <DarkVeil />

      <div className="text-white py-14 container mx-auto">
        <h1 className="text-center font-bold text-3xl">Login to Get Started</h1>

        <div className="flex flex-col gap-2 min-h-screen items-center p-10">
          <form
            onSubmit={handleRegularLogin}
            className="mb-6 w-full max-w-sm relative"
          >
            <input
              type="email"
              placeholder="Email"
              required
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

            <button
              type="submit"
              className="mt-4 font-semibold text-sm bg-purple-800 text-white rounded-md px-5 py-2 w-full"
            >
              Login with Email
            </button>
          </form>

          {message && <p className="mt-4 text-red-400">{message}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
