import LandingScreen from "./Components/LandingScreen";
import Navbar from "./Components/Navbar";
import SecondSection from "./Components/SecondSection";
import DarkVeil from "./Components/Darkveil";
import Dock from "./Components/Dock";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

import CreateEvent from "./Components/CreateEvent";
import SummerMusicFestival from "./Components/SummerMusicFestival";
import TechConference from "./Components/TechConference";
import NewYearParty from "./Components/NewYearParty";
import Register from "./Components/Register";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/"); // redirect to home
    }
  }, [navigate]);
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
        <Route path="/SummerMusicFestival" element={<SummerMusicFestival />} />
        <Route path="/TechConference" element={<TechConference />} />
        <Route path="/NewYearParty" element={<NewYearParty />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
