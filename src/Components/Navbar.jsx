import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ElectricBorder from "./ElectricBorder";
import StarBorder from "./StarBorder";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check user on mount and whenever localStorage changes

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          // First validate the token with the backend
          await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/protected`, {
            headers: { Authorization: `Bearer ${token}` }, // Fixed: Added backticks for template literal
          });

          console.log("User session valid");

          // If validation succeeds, decode and set user
          setUser(jwtDecode(token));
        } catch (error) {
          // Token is invalid/expired
          console.log("Invalid or expired token");
          localStorage.removeItem("token");
          setUser(null);
          // Notify other components about auth change
          window.dispatchEvent(new Event("authChange"));
        }
      } else {
        setUser(null);
      }
    };

    checkUser();

    // Listen for both custom "authChange" and native "storage" events
    window.addEventListener("authChange", checkUser);
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("authChange", checkUser);
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <nav className="text-white">
      <div className="mycontainer flex justify-between items-center h-14 py-5">
        <div className="flex items-center">
          <img src="/logo.gif" alt="" className="size-10" />
          <p className="ml-3 font-semibold text-2xl">NYX Events</p>
        </div>

        <StarBorder as="button" color="white" speed="5s">
          <ul>
            <li>
              <a className="hover:font-bold" href="">
                Home
              </a>
              <a className="hover:font-bold mx-4" href="/About">
                About
              </a>
              <a className="hover:font-bold" href="">
                Events
              </a>
              <a className="hover:font-bold mx-4" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </StarBorder>

        <div className="flex gap-4">
          {user ? (
            <>
              <p className="mt-3 font-bold">Welcome, {user.name}</p>

              <div onClick={handleLogout}>
                <p
                  className="text-white px-10 py-2 cursor-pointer font-bold shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent rounded-lg border border-1 border-white"
                  style={{ margin: "6px 0 0", opacity: 0.8 }}
                >
                  Log-out
                </p>
              </div>
            </>
          ) : (
            <>
              <div onClick={() => navigate("/Login")}>
                <p
                  className="text-white px-10 py-2 cursor-pointer font-bold shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent rounded-lg border border-1 border-white"
                  style={{ margin: "6px 0 0", opacity: 0.8 }}
                >
                  Login
                </p>
              </div>

              <div onClick={() => navigate("/SignUp")}>
                <p
                  className="text-white px-10 py-2 cursor-pointer font-bold shadow-[0_5px_15px_rgb(238,238,238,0.4)] bg-transparent rounded-lg border border-1 border-white"
                  style={{ margin: "6px 0 0", opacity: 0.8 }}
                >
                  Signup
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
