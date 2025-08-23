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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/add`,
        {
          name,
          email,
          password,
          phone,
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
      setPassword("");
      setPhone("");
    } catch (err) {
      console.error(err);
      setMessage("Error saving user");
    }
  };

  return (
    <>
      <DarkVeil />
      <div className="flex flex-col justify-center items-center p-10 min-h-screen ">
        <ElectricBorder
          color="#cebdff"
          speed={2}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 20 }}
        >
          <div className="flex flex-col justify-center items-center md:border md:border-1 md:border-black w-screen  md:w-[370px] ">
            <div className="min-w-full p-5 mb-auto min-h-full text-white">
              <form onSubmit={handleSubmit}>
                <h1 className="font-bold text-2xl">Create your</h1>
                <h1 className="font-bold text-2xl"> account</h1>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg px-4 mt-6 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-4 rounded-lg px-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg px-4 my-4 py-1 shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent"
                />

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
        </ElectricBorder>
      </div>
    </>
  );
};

export default SignUpScreen;
