import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo - Left Side */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Get Started Button - Right Side */}
        <button
          onClick={handleGetStarted}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-md font-medium transition-all shadow-md"
        >
          Get Started
        </button>

      </div>
    </header>
  );
};

export default Header;
