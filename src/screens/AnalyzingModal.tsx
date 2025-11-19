import React, { useState, useEffect } from 'react';

const AnalyzingModal: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Analysing your website...', color: 'text-orange-500', bgColor: 'bg-orange-500' },
    { label: 'Extracting Website Data', color: 'text-green-500', bgColor: 'bg-green-500' },
    { label: 'Passing Website Data', color: 'text-blue-500', bgColor: 'bg-blue-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Background Content (Blurred) */}
      <div className="filter blur-sm">
        <main className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Launch Your <span className="text-orange-500">AI Receptionist</span>
            </h1>
            <p className="text-xl text-gray-600">
              Transform your business communications in minutes
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Enter Your Business Website
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI will analyze and configure your receptionist
            </p>
            
            <div className="flex gap-4">
              <input
                type="url"
                value="https://www.noonionnogarlic.com/"
                readOnly
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
              />
              <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold">
                Analyze Website
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              Why Recepcionista?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-orange-500 mb-2">
                  Smart Analysis
                </h4>
                <p className="text-gray-600">
                  AI understands your business context
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-orange-500 mb-2">
                  Enterprise Ready
                </h4>
                <p className="text-gray-600">
                  Secure and scalable
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
          {/* Robot Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Analyzing Your Website
          </h2>

          {/* Progress Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-lg transition-all ${
                  index <= currentStep ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    index <= currentStep ? step.bgColor : 'bg-gray-300'
                  }`}
                />
                <span
                  className={`font-medium ${
                    index <= currentStep ? step.color : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 transition-all duration-1000"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Warning Text */}
          <p className="text-center text-sm text-gray-600">
            This may take a few moments. Please don't close this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingModal;