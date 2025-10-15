import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-gradient-to-r from-green-200 to-blue-200 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to VEUP.io</h1>
      <p className="text-gray-700 mb-8 max-w-xl">
        Manage your dashboard, reports, and configurations in one modern platform.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HomePage;
