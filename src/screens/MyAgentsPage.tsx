import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  UserGroupIcon,
  CheckCircleIcon,
  PhoneIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  bgColor: string;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, bgColor, iconColor }) => (
  <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group">
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs sm:text-sm text-gray-600 font-medium truncate">{label}</p>
        <p className="text-2xl sm:text-3xl font-extrabold text-orange-500 group-hover:text-orange-600 transition-colors duration-300" aria-label={`${value} ${label}`}>
          {value}
        </p>
      </div>
    </div>
    <div className="h-1 w-0 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full mt-3"></div>
  </div>
);

const MyAgentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const stats: StatCardProps[] = [
    {
      icon: UserGroupIcon,
      label: 'Total Agents',
      value: 0,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
    {
      icon: CheckCircleIcon,
      label: 'Active Agents',
      value: 0,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500',
    },
    {
      icon: PhoneIcon,
      label: 'Total Calls',
      value: 0,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    {
      icon: CurrencyDollarIcon,
      label: 'Revenue Saved',
      value: '$0',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-500',
    },
  ];

  const handleCreateAgent = (): void => {
    console.log('Creating new agent...');
    // Navigate to: /analyze-website or /create-agent
  };

  const handleApplyFilters = (): void => {
    console.log('Applying filters...', { searchQuery, statusFilter });
    // Apply filtering logic
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setStatusFilter(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <header className="mb-8 sm:mb-10 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <UserGroupIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              My <span className="text-purple-400 gradient-text">AI Agents</span>
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg ml-0 sm:ml-16">
            Manage and monitor your intelligent receptionists
          </p>
        </header>

        {/* Stats Cards */}
        <section 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 fade-in-up delay-100"
          role="region"
          aria-label="Agent statistics"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              bgColor={stat.bgColor}
              iconColor={stat.iconColor}
            />
          ))}
        </section>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 mb-6 sm:mb-8 border border-gray-200 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 fade-in-up delay-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative group">
              <label htmlFor="search" className="sr-only">Search agents</label>
              <MagnifyingGlassIcon 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5 pointer-events-none group-hover:scale-110 transition-transform duration-300" 
                aria-hidden="true"
              />
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search agents, businesses..."
                className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <label htmlFor="status" className="sr-only">Filter by status</label>
              <select 
                id="status"
                value={statusFilter}
                onChange={handleStatusChange}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="draft">Draft</option>
              </select>
              <button 
                type="button"
                onClick={handleApplyFilters}
                className="px-4 py-3 text-orange-500 font-semibold flex items-center justify-center gap-2 hover:bg-orange-50 rounded-lg text-sm sm:text-base transition-all duration-300 border-2 border-orange-200 hover:border-orange-300 hover:scale-105"
                aria-label="Apply filters"
              >
                <FunnelIcon className="w-5 h-5" aria-hidden="true" />
                <span className="hidden sm:inline">Apply Filters</span>
                <span className="sm:hidden">Filters</span>
              </button>
              <button 
                type="button"
                onClick={handleCreateAgent}
                className="group relative overflow-hidden px-5 py-3 bg-orange-500 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
                aria-label="Create new AI agent"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PlusIcon className="w-5 h-5" aria-hidden="true" />
                  <span className="hidden sm:inline">Create New Agent</span>
                  <span className="sm:hidden">New Agent</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Agents Table */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 fade-in-up delay-300">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Agent</th>
                  <th scope="col" className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Capabilities</th>
                  <th scope="col" className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Created</th>
                  <th scope="col" className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="px-6 py-24">
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full flex items-center justify-center">
                          <UserGroupIcon className="w-14 h-14 text-orange-500" aria-hidden="true" />
                        </div>
                        <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-20 pulse-animation"></div>
                      </div>
                      <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                        No <span className="text-purple-400 gradient-text">Agents Found</span>
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-md text-center leading-relaxed">
                        You haven't created any AI agents yet. Get started by creating your first intelligent receptionist.
                      </p>
                      <button 
                        onClick={handleCreateAgent}
                        className="group relative overflow-hidden px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-2"
                        aria-label="Create your first AI agent"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <PlusIcon className="w-6 h-6" aria-hidden="true" />
                          Create Your First Agent
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View */}
          <div className="lg:hidden p-6">
            <div className="text-center py-12">
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full flex items-center justify-center">
                  <UserGroupIcon className="w-12 h-12 text-orange-500" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-20 pulse-animation"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
                No <span className="text-purple-400 gradient-text">Agents Found</span>
              </h3>
              <p className="text-gray-600 mb-8 text-sm sm:text-base px-4 leading-relaxed">
                You haven't created any AI agents yet. Get started by creating your first intelligent receptionist.
              </p>
              <button 
                onClick={handleCreateAgent}
                className="group relative overflow-hidden px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                aria-label="Create your first AI agent"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PlusIcon className="w-5 h-5" aria-hidden="true" />
                  Create Your First Agent
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Custom Animations */}
      <style>{`
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

        .delay-300 {
          animation-delay: 300ms;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
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
          background: linear-gradient(90deg, #a855f7, #ec4899, #f97316, #a855f7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s ease infinite;
        }

        /* Smooth transitions for all interactive elements */
        button, input, select, .group {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default MyAgentsPage;