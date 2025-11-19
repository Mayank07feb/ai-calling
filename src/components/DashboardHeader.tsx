import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Squares2X2Icon,
  UserGroupIcon,
  PlusIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png'; // import your logo

const DashboardHeader: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3); // Example badge
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setUserMenuOpen(false);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    setUserMenuOpen(false);
  };

  const handleLogoutClick = () => {
    console.log('Logout clicked');
    setUserMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto" // adjust size as needed
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-500 rounded-lg font-medium">
              <Squares2X2Icon className="w-5 h-5" />
              Dashboard
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              <UserGroupIcon className="w-5 h-5" />
              My Agents
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              <PlusIcon className="w-5 h-5" />
              Create Agent
            </button>
          </nav>
        </div>

        {/* Right: Messages + User */}
        <div className="flex items-center gap-3 relative">
          {/* Messages Icon with Badge */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg hidden md:block">
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-gray-600" />
            {unreadMessages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {unreadMessages}
              </span>
            )}
          </button>

          {/* User Avatar */}
          <div ref={userMenuRef} className="relative">
            <button
              className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center"
              onClick={() => setUserMenuOpen(!isUserMenuOpen)}
            >
              <span className="text-orange-500 font-semibold">U</span>
            </button>

            {/* User Dropdown */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <UserCircleIcon className="w-5 h-5" />
                  Profile
                </button>
                <button
                  onClick={handleSettingsClick}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <Cog6ToothIcon className="w-5 h-5" />
                  Settings
                </button>
                <button
                  onClick={handleLogoutClick}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-500 rounded-lg font-medium w-full">
            <Squares2X2Icon className="w-5 h-5" />
            Dashboard
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium w-full">
            <UserGroupIcon className="w-5 h-5" />
            My Agents
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium w-full">
            <PlusIcon className="w-5 h-5" />
            Create Agent
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium w-full">
            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
            Messages
          </button>
        </nav>
      )}
    </header>
  );
};

export default DashboardHeader;
