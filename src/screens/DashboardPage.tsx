import React from "react";
import {
  PlusIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value }) => (
  <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="w-6 h-6 text-orange-500" aria-hidden="true" />
      <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase">
        {label}
      </p>
    </div>
    <p 
      className="text-3xl sm:text-4xl font-bold text-orange-500"
      aria-label={`${value} ${label}`}
    >
      {value.toLocaleString()}
    </p>
  </div>
);

const DashboardPage: React.FC = () => {
  const stats: StatCardProps[] = [
    {
      icon: UserGroupIcon,
      label: "Total Agents",
      value: 0,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      label: "Active Conversations",
      value: 0,
    },
    {
      icon: CpuChipIcon,
      label: "Messages Processed",
      value: 0,
    },
    {
      icon: ArrowPathIcon,
      label: "API Calls",
      value: 0,
    },
  ];

  const handleCreateAgent = (): void => {
    console.log("Navigating to create agent page...");
    // Add navigation logic here
    // Example: navigate('/create-agent') or navigate('/analyze-website')
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            Welcome back, User! 
            <span 
              className="inline-block text-2xl wave-animation"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Create and manage your AI agents. Connect them to your communication channels and automate conversations.
          </p>
        </div>

        {/* Create Button */}
        <div className="flex justify-center lg:justify-end mb-8">
          <button 
            onClick={handleCreateAgent}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
            aria-label="Create new AI agent"
          >
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
            Create New Agent
          </button>
        </div>

        {/* Stats Cards */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
          role="region"
          aria-label="Dashboard statistics"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>

        {/* Your AI Agents Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Your AI Agents
          </h2>
          
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-12">
            <span 
              className="text-6xl mb-6 bounce-animation"
              role="img"
              aria-label="robot"
            >
              🤖
            </span>
            <p className="text-gray-600 mb-6 text-center sm:text-lg max-w-md">
              No agents yet. Create your first AI agent to get started!
            </p>
            <button 
              onClick={handleCreateAgent}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
              aria-label="Create your first AI agent"
            >
              <PlusIcon className="w-5 h-5" aria-hidden="true" />
              Create Your First Agent
            </button>
          </div>
        </section>
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
      `}</style>
    </div>
  );
};

export default DashboardPage;