import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkVeil from "./Darkveil";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // ✅ v4+ correct import

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          // Validate token with backend
          await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/protected`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          console.log("User session valid");

          // Decode and set user
          const decoded = jwtDecode(token);
          console.log("Decoded JWT payload:", decoded); // 👀 check payload

          // 🔍 Additional debugging
          console.log("Phone field in decoded token:", decoded.phone);
          console.log("All fields in decoded token:", Object.keys(decoded));

          setUser(decoded);
        } catch (error) {
          console.log("Invalid or expired token", error);
          localStorage.removeItem("token");
          setUser(null);
          window.dispatchEvent(new Event("authChange"));
        }
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener("authChange", checkUser);
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("authChange", checkUser);
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  if (!user) return <p className="text-white">Loading...</p>;

  return (
    <div>
      <DarkVeil />
      <p className="text-white text-4xl font-bold">Your Details</p>
      <div className="bg-white mt-10 rounded-lg text-left">
        <p className="border-b border-1 border-black px-5">
          Name: {user?.name}
        </p>
        <p className="border-b border-1 border-black px-5">
          Email: {user?.email}
        </p>
        <p className="px-5">Phone Number: {user?.phone || "Not available"}</p>

        {/* 🔍 Debug info - remove this after fixing */}
        <div className="px-5 mt-4 text-xs text-gray-500">
          <p>Debug - All user fields: {JSON.stringify(user, null, 2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
