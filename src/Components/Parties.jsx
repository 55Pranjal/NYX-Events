import React from "react";
import TiltedCard from "./TitledCard";
import DarkVeil from "./Darkveil";

const Parties = () => {
  return (
    <>
      <DarkVeil />
      <div>
        <TiltedCard
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="New year's party"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="bg-gray-800 rounded-xl overflow-hidden event-card">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="New Year's Party"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg text-white">
                  New Year's Party
                </h4>
                <div className="flex items-center text-sm text-gray-300 mt-2">
                  <i data-lucide="calendar" className="w-4 h-4 mr-1"></i>
                  <span>31 Dec • 10:00 PM</span>
                </div>
                <div className="flex items-center text-sm text-gray-300 mt-1">
                  <i data-lucide="map-pin" className="w-4 h-4 mr-1"></i>
                  <span>Downtown Club</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">
                    Free
                  </span>
                  <button
                    onClick={() => navigate("/NewYearParty")}
                    className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Parties;
