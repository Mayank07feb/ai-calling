import React from "react";
import {
  PlusIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => (
  <div className="group bg-white rounded-xl p-6 shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden">
    {/* Animated background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-orange-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" aria-hidden="true">
          {icon}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 font-medium group-hover:text-orange-600 transition-colors duration-300">{label}</p>
      </div>
      <p className="text-3xl sm:text-4xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors duration-300" aria-label={`${value} ${label.toLowerCase()}`}>
        {value}
      </p>
    </div>

    {/* Bottom border animation */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
  </div>
);

const Dashboard: React.FC = () => {
  const stats = [
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      label: "TOTAL AGENTS",
      value: 0,
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
      label: "ACTIVE CONVERSATIONS",
      value: 0,
    },
    {
      icon: <CpuChipIcon className="w-6 h-6" />,
      label: "MESSAGES PROCESSED",
      value: 0,
    },
    {
      icon: <ArrowPathIcon className="w-6 h-6" />,
      label: "API CALLS",
      value: 0,
    },
  ];

  const handleCreateAgent = (): void => {
    console.log("Creating new agent...");
    // Navigate to create agent page or open modal
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8 text-center lg:text-left fade-in-up">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            Welcome back, <span className="gradient-text">User</span>! 
            <span className="inline-block text-2xl wave-animation" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Create and manage your AI agents. Connect them to your communication channels and automate conversations.
          </p>
        </div>

        {/* Create Button */}
        <div className="flex justify-center lg:justify-end mb-8 fade-in-up delay-100">
          <button 
            onClick={handleCreateAgent}
            className="group relative overflow-hidden px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-md hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:-translate-y-1"
            aria-label="Create new AI agent"
          >
            <span className="relative z-10 flex items-center gap-2">
              <PlusIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" />
              Create New Agent
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <div className="absolute inset-0 bg-white animate-shimmer"></div>
            </div>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 fade-in-up delay-200" role="region" aria-label="Dashboard statistics">
          {stats.map((stat, index) => (
            <div key={index} style={{ animationDelay: `${index * 100 + 200}ms` }} className="fade-in-up">
              <StatCard
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
              />
            </div>
          ))}
        </div>

        {/* Your AI Agents Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12 hover:shadow-xl transition-all duration-500 fade-in-up delay-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Your AI <span className="gradient-text">Agents</span>
          </h2>
          
          <div className="flex flex-col items-center justify-center py-12">
            {/* Empty State */}
            <div className="group">
              <span 
                className="text-6xl mb-6 bounce-animation inline-block group-hover:scale-125 transition-transform duration-500" 
                role="img" 
                aria-label="robot"
              >
                🤖
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-center sm:text-lg max-w-md hover:text-gray-700 transition-colors duration-300">
              No agents yet. Create your first AI agent to get started!
            </p>
            <button 
              onClick={handleCreateAgent}
              className="group relative overflow-hidden px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-md hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:-translate-y-1"
              aria-label="Create your first AI agent"
            >
              <span className="relative z-10 flex items-center gap-2">
                <PlusIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" />
                Create Your First Agent
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white animate-shimmer"></div>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Custom Animations */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .wave-animation {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .gradient-text {
          background: linear-gradient(90deg, #f97316, #a855f7, #ec4899, #f97316);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s ease infinite;
          font-weight: 700;
        }

        /* Smooth transitions for all interactive elements */
        button, .group {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;