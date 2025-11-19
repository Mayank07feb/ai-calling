import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface UserProfile {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  memberSince: string;
  emailVerified: boolean;
  accountStatus: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  initials: string;
}

interface InfoCardProps {
  label: string;
  value: string;
  bgColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value, bgColor }) => (
  <div
    className={`group ${bgColor} rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
  >
    <p className="text-xs sm:text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">{label}</p>
    <p className="text-base sm:text-lg font-bold text-orange-500 group-hover:text-orange-600 transition-colors duration-300 break-words">{value}</p>
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
  </div>
);

const ProfilePage: React.FC = () => {
  const [user] = useState<UserProfile>({
    firstName: 'Sony',
    lastName: 'Yadav',
    fullName: 'Sony Yadav',
    email: 'sonyyada101@gmail.com',
    memberSince: '2025',
    emailVerified: true,
    accountStatus: 'active',
    lastLogin: 'November 12, 2025 9:39 AM',
    initials: 'SY',
  });

  const profileInfo: InfoCardProps[] = [
    { label: 'Full Name', value: user.fullName, bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50' },
    { label: 'Email Address', value: user.email, bgColor: 'bg-gradient-to-br from-orange-50 to-purple-50' },
    { label: 'Account Status', value: user.accountStatus.toUpperCase(), bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50' },
    { label: 'Email Verified', value: user.emailVerified ? 'VERIFIED' : 'NOT VERIFIED', bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50' },
    { label: 'Member Since', value: `November 10, ${user.memberSince}`, bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50' },
    { label: 'Last Login', value: user.lastLogin, bgColor: 'bg-gradient-to-br from-orange-50 to-purple-50' },
  ];

  const handleEditProfile = (): void => {
    console.log('Opening edit profile modal...');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 lg:py-12">
        
        {/* Profile Header */}
        <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 border border-gray-200 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 fade-in-up">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
              <div className="relative group">
                <div 
                  className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6"
                  aria-label={`Profile avatar for ${user.fullName}`}
                >
                  <span className="text-white font-extrabold text-3xl sm:text-4xl">{user.initials}</span>
                </div>
                <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pulse-animation"></div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
                  <span className="gradient-text">{user.fullName}</span>
                </h1>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base break-all">
                  {user.email}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 lg:gap-10">
                  <div className="text-center sm:text-left group">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 font-semibold uppercase tracking-wide">Member Since</p>
                    <p className="text-orange-500 font-bold text-base sm:text-lg group-hover:text-orange-600 transition-colors duration-300">{user.memberSince}</p>
                  </div>
                  <div className="text-center sm:text-left group">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 font-semibold uppercase tracking-wide">Email Status</p>
                    <div className="flex justify-center sm:justify-start items-center gap-2">
                      {user.emailVerified && <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 group-hover:scale-110 transition-transform duration-300" />}
                      <span className="text-orange-500 font-bold text-base sm:text-lg group-hover:text-orange-600 transition-colors duration-300">
                        {user.emailVerified ? 'Verified' : 'Not Verified'}
                      </span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left group">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 font-semibold uppercase tracking-wide">Account Status</p>
                    <p className="text-orange-500 font-bold text-base sm:text-lg capitalize group-hover:text-orange-600 transition-colors duration-300">{user.accountStatus}</p>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={handleEditProfile}
              className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
              aria-label="Edit profile"
            >
              <span className="relative z-10">Edit Profile</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </section>

        {/* Personal Information */}
        <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-200 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 fade-in-up delay-100">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-2 h-10 bg-gradient-to-b from-orange-500 to-purple-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Personal <span className="text-purple-400 gradient-text">Information</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {profileInfo.map((info, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                <InfoCard label={info.label} value={info.value} bgColor={info.bgColor} />
              </div>
            ))}
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
        button, .group {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;