import React, { useState } from 'react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      {/* Left Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-200 hover:shadow-3xl transition-all duration-500 fade-in-up">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-white font-extrabold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-gray-900 gradient-text">Receptionista</span>
          </div>

          {/* Tabs */}
          <div className="flex border-b-2 border-gray-200 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 pb-3 text-center font-bold text-lg transition-all duration-300 ${
                isLogin
                  ? 'text-orange-500 border-b-4 border-orange-500 scale-105'
                  : 'text-gray-500 hover:text-gray-700 hover:scale-105'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 pb-3 text-center font-bold text-lg transition-all duration-300 ${
                !isLogin
                  ? 'text-orange-500 border-b-4 border-orange-500 scale-105'
                  : 'text-gray-500 hover:text-gray-700 hover:scale-105'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent hover:border-gray-300"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent hover:border-gray-300"
                  />
                </div>
              </div>
            )}

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
              />
            </div>

            {!isLogin && (
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent hover:border-gray-300"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-orange-500 hover:text-orange-600 font-semibold hover:scale-105 transition-all duration-300"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
              className="group relative overflow-hidden w-full bg-orange-500 text-white py-3.5 rounded-lg transition-all duration-300 font-bold shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">{isLogin ? 'Login' : 'Create Account'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-white text-gray-500 font-bold tracking-wider">OR CONTINUE WITH</span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3.5 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold text-gray-700 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Back to Home */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 mt-6 text-orange-500 hover:text-orange-600 font-semibold hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>

      {/* Right Side - Welcome Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 items-center justify-center p-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20 pulse-animation"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-20 pulse-animation" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-lg relative z-10 fade-in-up">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="gradient-text">Receptionista</span>
          </h1>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Build powerful AI agents in minutes without any coding. Create custom AI assistants with unique personalities and connect them to your communication channels.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {[
              'Create AI agents with custom personalities',
              'Connect to WhatsApp, Telnyx & more',
              'Webhook integration ready',
              'Enterprise-grade security',
              'Real-time conversation management',
              'Advanced analytics & insights'
            ].map((feature: string, index: number) => (
              <div 
                key={index} 
                className="flex items-start gap-3 group fade-in-up" 
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="mt-1 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full p-1.5 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-gray-500 font-medium">
            Join thousands of businesses automating conversations with AI.
          </p>

          {/* Lovable Badge */}
          <div className="mt-8 inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            Edit with ❤️ Lovable
          </div>
        </div>
      </div>

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

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }

        /* Smooth transitions for all interactive elements */
        button, input, .group {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
    
  );
};

export default AuthPage;