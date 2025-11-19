import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const AnalyzeWebsite: React.FC = () => {
  const navigate = useNavigate();
  
  const [websiteUrl, setWebsiteUrl] = useState('https://example.com');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Analyzing your website...', color: 'text-orange-500', bgColor: 'bg-orange-500' },
    { label: 'Extracting Website Data', color: 'text-purple-500', bgColor: 'bg-purple-500' },
    { label: 'Passing Website Data', color: 'text-pink-500', bgColor: 'bg-pink-500' },
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (!isAnalyzing) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;

        clearInterval(interval);
        setTimeout(() => {
          setIsAnalyzing(false);
          navigate('/configure-agent');
        }, 1000);

        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnalyzing]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Launch Your <span className="text-purple-400 gradient-text">AI Receptionist</span>
          </h1>
          <p className="text-md sm:text-lg text-gray-600 leading-relaxed">
            Transform your business communications in minutes
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up delay-100">
          <span className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Website Analysis
          </span>
          <span
            className="px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-sm font-semibold cursor-pointer hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:scale-105 transition-all duration-300 shadow hover:shadow-lg"
            onClick={() => navigate('/configure-agent')}
          >
            AI Configuration
          </span>
          <span className="px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:border-purple-300 hover:scale-105 transition-all duration-300 shadow">
            Test Agent
          </span>
          <span className="px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:border-purple-300 hover:scale-105 transition-all duration-300 shadow">
            Go Live
          </span>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 mb-12 border border-gray-200 hover:shadow-2xl transition-all duration-500 fade-in-up delay-200 hover:border-orange-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Enter Your Business Website
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Our AI will analyze and configure your receptionist
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
            />
            <button
              onClick={handleAnalyze}
              className="group relative overflow-hidden px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Analyze Website</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="fade-in-up delay-300">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Why <span className="text-purple-400 gradient-text">Receptionista?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Smart Analysis', desc: 'AI understands your business context', delay: '0ms' },
              { title: '2-Minute Setup', desc: 'Quick and easy configuration', delay: '150ms' },
              { title: 'Enterprise Ready', desc: 'Secure and scalable', delay: '300ms' },
              { title: '24/7 Available', desc: 'Never miss a customer call', delay: '450ms' },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:border-orange-500/60 hover:-translate-y-3 cursor-pointer hover:bg-gradient-to-br hover:from-orange-50/30 hover:to-purple-50/30 fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <h4 className="text-lg font-bold text-orange-500 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      {isAnalyzing && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-3xl p-6 sm:p-10 max-w-md w-full mx-4 animate-fade-in border border-purple-100">
            {/* Robot Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 bg-gradient-to-br from-orange-50 to-purple-50 rounded-full border-4 border-orange-500 flex items-center justify-center shadow-xl">
                <Cog6ToothIcon className="w-14 h-14 text-orange-500 animate-spin-slow" />
                <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-20 pulse-animation"></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Analyzing Your Website
            </h2>

            {/* Progress Steps */}
            <div className="space-y-4 mb-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 ${
                    index < currentStep 
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 shadow-md border border-green-200' 
                      : index === currentStep 
                      ? 'bg-gradient-to-r from-orange-50 to-purple-50 shadow-sm border border-orange-200' 
                      : 'bg-white border border-gray-100'
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    {index < currentStep ? (
                      // Completed - Show checkmark
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      // Current or upcoming - Show dot
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-500 ${
                          index === currentStep ? `${step.bgColor} shadow-lg animate-pulse` : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`font-semibold transition-all duration-500 ${
                      index < currentStep 
                        ? 'text-green-600' 
                        : index === currentStep 
                        ? step.color 
                        : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </span>
                  {index < currentStep && (
                    <span className="ml-auto text-xs font-bold text-green-600 animate-fade-in">
                      ✓ Done
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-6 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 transition-all duration-1000 shadow-lg"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Warning Text */}
            <p className="text-center text-sm text-gray-600 leading-relaxed">
              This may take a few moments. Please don't close this page.
            </p>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>
        {`
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

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow { animation: spin-slow 2s linear infinite; }

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
        `}
      </style>
    </div>
  );
};

export default AnalyzeWebsite;