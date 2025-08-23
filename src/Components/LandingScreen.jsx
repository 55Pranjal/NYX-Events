import React from "react";
import SecondSection from "./SecondSection";
import Navbar from "./Navbar";
import DarkVeil from "./Darkveil";
import MainSection from "./MainSection";
import Footer from "./Footer";

const LandingScreen = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen ">
        <Navbar />
        <SecondSection />
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <DarkVeil />
          <MainSection />
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
