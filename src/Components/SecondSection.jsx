import { div } from "motion/react-m";
import React from "react";
import StarBorder from "./StarBorder";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-2xl mt-10 ml-5">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-left">
        Find your next event
      </h2>
      <div className="flex justify-between">
        <div className="flex mt-2 items-center bg-white/20 rounded-xl p-3 w-[85%] mb-6">
          <input
            type="text"
            placeholder="Find events near you..."
            className="bg-transparent outline-none text-white w-full placeholder-gray-300 search-input"
          />
        </div>
        <button
          onClick={() => navigate("/CreateEvent")}
          className="mt-3 h-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 flex items-center justify-center h-full bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Create Event
          </span>
        </button>
      </div>
      <div className="flex gap-4 text-white font-bold mt-3">
        <div className="w-[20%] p-10 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 category-btn cursor-pointer">
          <p className="my-3">All</p>
        </div>
        <div className="w-[20%] p-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 category-btn cursor-pointer">
          <p className="my-3">Music</p>
        </div>
        <div className="w-[20%] p-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 category-btn cursor-pointer">
          <p className="my-3">Theatre</p>
        </div>
        <div className="w-[20%] p-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 category-btn cursor-pointer">
          <p className="my-3">Conferences</p>
        </div>

        <div className="w-[20%] p-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 category-btn cursor-pointer">
          <p className="my-3">Parties</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
