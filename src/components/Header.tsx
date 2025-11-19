import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; 

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth"); // Navigate to Auth page
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/20">
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
            className="bg-orange-500/90 hover:bg-orange-600/90 text-white px-8 py-2.5 rounded-md font-medium transition-colors shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
