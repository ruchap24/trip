import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16 ">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with Ai:
        </span>
        <p className="text-xl text-gray-500 text-center">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to="/create-trip">
          <button className="bg-slate-700 text-xl rounded-lg p-3 text-white   hover:opacity-95 disabled:opacity-80">
            Get Started, It's Free
          </button>
        </Link>
      </h1>
     
      {/* <img src="public/tripLand.PNG" alt="Landing" className="-mt-20"/> */}
    </div>
  );
}