import { useNavigate } from "react-router-dom";
import DarkVeil from "./Darkveil";
import ElectricBorder from "./ElectricBorder";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://backend-nyx-9-m6ff.onrender.com/api/users/add`,
        { name, email, password, phone }
      );

      setMessage(res.data.message); // show success message

      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);
        window.dispatchEvent(new Event("authChange"));
        window.dispatchEvent(new Event("storage"));
        navigate("/");
      }

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (err) {
      console.error("Signup error:", err.response?.data?.error || err.message);

      // Show backend error if exists, otherwise generic
      if (err.response && err.response.data && err.response.data.error) {
        setMessage("User with this email already exists");
      } else {
        setMessage("Error saving user");
      }
    }
  };

  return (
    <>
      <DarkVeil />

      {/* Desktop Form */}
      <div className="hidden lg:flex justify-center items-center min-h-screen p-4">
        <ElectricBorder
          color="#cebdff"
          speed={2}
          chaos={0.5}
          thickness={2}
          className="flex justify-center items-center w-full max-w-md p-6"
          style={{ borderRadius: 20 }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 text-white"
          >
            <h1 className="font-bold text-2xl">Create your</h1>
            <h1 className="font-bold text-2xl">account</h1>

            <input
              type="text"
              placeholder="Enter your full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />
            <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
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
            <input
              type="text"
              placeholder="Enter your phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
            />

            <button
              type="submit"
              className="mt-4 font-semibold text-sm bg-purple-800 text-white rounded-md px-5 py-2 w-full"
            >
              Create Account
            </button>

            {message && <p className="text-red-500 mt-2">{message}</p>}
          </form>
        </ElectricBorder>
      </div>

      {/* Mobile Form */}
      <div className="lg:hidden flex justify-center items-center min-h-screen p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 text-white"
        >
          <h1 className="font-bold text-2xl">Create your account</h1>

          <input
            type="text"
            placeholder="Enter your full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
          />
          <input
            type="text"
            placeholder="Enter your phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg px-4 py-2 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
          />

          <button
            type="submit"
            className="mt-4 font-semibold text-sm bg-purple-800 text-white rounded-md px-5 py-2 w-full"
          >
            Create Account
          </button>

          {message && <p className="text-red-500 mt-2">{message}</p>}
        </form>
      </div>
    </>
  );
};

export default SignUpScreen;
