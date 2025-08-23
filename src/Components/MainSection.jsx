import React from "react";
import TiltedCard from "./TitledCard";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-white text-left font-bold m-10 text-4xl">
        Trending Events
      </p>

      <div className="flex flex-wrap  w-full gap-8 m-6">
        <TiltedCard
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Music Fest"
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
                src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Music Fest"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg text-white">Music Fest</h4>
                <div className="flex items-center text-sm text-gray-300 mt-2">
                  <i data-lucide="calendar" className="w-4 h-4 mr-1"></i>
                  <span>25 Nov • 6:00 PM</span>
                </div>
                <div className="flex items-center text-sm text-gray-300 mt-1">
                  <i data-lucide="map-pin" className="w-4 h-4 mr-1"></i>
                  <span>Central Park</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">
                    Free
                  </span>
                  <button
                    onClick={() => navigate("/SummerMusicFestival")}
                    className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          }
        />

        <TiltedCard
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Tech conference"
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Tech Conference"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-white">
                  Tech Conference
                </h4>
                <div className="flex items-center text-sm text-gray-300 mt-2">
                  <i data-lucide="calendar" className="w-4 h-4 mr-1"></i>
                  <span>02 Dec • 9:00 AM</span>
                </div>
                <div className="flex items-center text-sm text-gray-300 mt-1">
                  <i data-lucide="map-pin" className="w-4 h-4 mr-1"></i>
                  <span>Convention Center</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300">
                    &#8377;200
                  </span>
                  <button
                    onClick={() => navigate("/TechConference")}
                    className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          }
        />

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
    </div>
  );
};

export default MainSection;
