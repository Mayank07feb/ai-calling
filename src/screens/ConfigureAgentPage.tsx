import React, { useState } from 'react';
import { ChevronDownIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface FormData {
  businessName: string;
  industry: string;
  phone: string;
  email: string;
  address: string;
  businessDescription: string;
  servicesOffered: string;
  additionalInfo: string;
  agentName: string;
  primaryLanguage: string;
  voice: string;
  personality: string;
  workingHours: string;
  firstMessage: string;
}

const ConfigureAgentPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    businessName: 'No Onion No Garlic (NONG)',
    industry: 'Food & Lifestyle Platform',
    phone: '',
    email: '',
    address: '',
    businessDescription: 'A one-stop destination for pure, sattvic living, offering recipes, certified products, and restaurant listings that are 100% free of onion and garlic, and are often Jain-friendly.',
    servicesOffered: `['No onion no garlic recipes', 'Handpicked NONG-certified products', 'Listings of trusted restaurants serving Jain-friendly meals', 'Personalized sattvic recommendations', 'User accounts to save recipes and track orders']`,
    additionalInfo: 'The platform targets home cooks and food lovers who follow a sattvic or onion/garlic-free diet. Slogan: \'Pure taste. Pure trust. Pure NONG.\'',
    agentName: 'AI Agent',
    primaryLanguage: 'English',
    voice: '',
    personality: 'Friendly and Helping',
    workingHours: '09:00 AM - 06:00 PM',
    firstMessage: "Hello! I'm your AI assistant. How can I help you today?"
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveAndContinue = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Navigate to next step
    }
  };

  const handleBack = () => {
    console.log('Going back...');
    // Navigate to previous step
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Steps */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 fade-in-up">
          <span className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-300">
            Website Analysis
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            AI Configuration
          </span>
          <span className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-300">
            Test Agent
          </span>
          <span className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-300">
            Go Live
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12 fade-in-up delay-100">
          Configure Your <span className="text-purple-400 gradient-text">AI Agent</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Business Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 fade-in-up delay-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-purple-500 rounded-full"></span>
              Business Information
            </h2>
            <div className="space-y-5">
              {/* Business Name */}
              <div className="group">
                <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleInputChange('businessName')}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.businessName ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base`}
                  aria-required="true"
                  aria-invalid={!!errors.businessName}
                />
                {errors.businessName && (
                  <p className="mt-1.5 text-sm text-red-600 font-medium animate-fade-in">{errors.businessName}</p>
                )}
              </div>

              {/* Industry */}
              <div className="group">
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  id="industry"
                  type="text"
                  value={formData.industry}
                  onChange={handleInputChange('industry')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className={`w-full px-4 py-3 border-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600 font-medium animate-fade-in">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="group">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange('address')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base"
                />
              </div>

              {/* Business Description */}
              <div className="group">
                <label htmlFor="businessDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Description
                </label>
                <textarea
                  id="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange('businessDescription')}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base resize-vertical"
                />
              </div>

              {/* Services Offered */}
              <div className="group">
                <label htmlFor="servicesOffered" className="block text-sm font-semibold text-gray-700 mb-2">
                  Services Offered
                </label>
                <textarea
                  id="servicesOffered"
                  value={formData.servicesOffered}
                  onChange={handleInputChange('servicesOffered')}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base resize-vertical"
                />
              </div>

              {/* Additional Info */}
              <div className="group">
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange('additionalInfo')}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base resize-vertical"
                />
              </div>
            </div>
          </div>

          {/* Right Column - AI Agent Configuration */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 fade-in-up delay-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              AI Agent Configuration
            </h2>
            <div className="space-y-5">
              {/* Agent Name & Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                  <label htmlFor="agentName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Agent Name
                  </label>
                  <input
                    id="agentName"
                    type="text"
                    value={formData.agentName}
                    onChange={handleInputChange('agentName')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base"
                  />
                </div>
                <div className="group">
                  <label htmlFor="primaryLanguage" className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Language
                  </label>
                  <div className="relative">
                    <select
                      id="primaryLanguage"
                      value={formData.primaryLanguage}
                      onChange={handleInputChange('primaryLanguage')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none transition-all duration-300 hover:border-gray-300 text-sm sm:text-base cursor-pointer"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* ElevenLabs Voice */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 group">
                  <label htmlFor="voice" className="block text-sm font-semibold text-gray-700 mb-2">
                    ElevenLabs Voice
                  </label>
                  <div className="relative">
                    <select
                      id="voice"
                      value={formData.voice}
                      onChange={handleInputChange('voice')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none transition-all duration-300 hover:border-gray-300 text-sm sm:text-base text-gray-400 cursor-pointer"
                    >
                      <option>-- Select a voice --</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <button 
                  type="button"
                  className="group relative overflow-hidden sm:mt-7 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                  <span className="relative z-10">Preview</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Personality */}
              <div className="group">
                <label htmlFor="personality" className="block text-sm font-semibold text-gray-700 mb-2">
                  Agent Personality
                </label>
                <textarea
                  id="personality"
                  value={formData.personality}
                  onChange={handleInputChange('personality')}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base resize-vertical"
                />
              </div>

              {/* Working Hours */}
              <div className="group">
                <label htmlFor="workingHours" className="block text-sm font-semibold text-gray-700 mb-2">
                  Working Hours
                </label>
                <input
                  id="workingHours"
                  type="text"
                  value={formData.workingHours}
                  onChange={handleInputChange('workingHours')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base"
                />
              </div>

              {/* First Message */}
              <div className="group">
                <label htmlFor="firstMessage" className="block text-sm font-semibold text-gray-700 mb-2">
                  Agent First Message
                </label>
                <textarea
                  id="firstMessage"
                  value={formData.firstMessage}
                  onChange={handleInputChange('firstMessage')}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 text-sm sm:text-base resize-vertical"
                />
              </div>

              {/* Google Calendar Integration */}
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 border-2 border-orange-200 rounded-xl p-5 mt-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <CalendarIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm sm:text-base">Google Calendar Integration</span>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1.5 text-orange-500 text-xs font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    PREMIUM
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-700 space-y-2 leading-relaxed">
                  <p className="font-semibold text-orange-700 mb-2">To connect your Google Calendar:</p>
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-orange-500">1.</span>
                    <span>Complete the agent setup process</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-orange-500">2.</span>
                    <span>Go to your <span className="font-bold text-orange-600">Agent Details</span> page</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-orange-500">3.</span>
                    <span>Click the <span className="font-bold text-orange-600">"Connect Google Calendar"</span> button</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-orange-500">4.</span>
                    <span>Authorize the integration with your Google account</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                type="button"
                onClick={handleBack}
                className="group px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base shadow hover:shadow-md hover:scale-105 hover:-translate-y-1"
              >
                Back
              </button>
              <button 
                type="button"
                onClick={handleSaveAndContinue}
                className="group relative overflow-hidden flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Save & Continue</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </main>

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
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-fade-in { 
            animation: fade-in 0.3s ease-out forwards; 
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
          button, input, textarea, select, .group {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}
      </style>
    </div>
  );
};

export default ConfigureAgentPage;