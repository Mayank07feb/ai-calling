import React from "react";
import {
  MagnifyingGlassCircleIcon,
  AdjustmentsHorizontalIcon,
  BoltIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import heroImage from "../assets/hero.jpg";

interface Step {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface StatBadge {
  label: string;
  value: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Analyze Your Website",
    desc: "Our AI reviews your web content, learning about your services and audiences for tailored agent responses.",
    icon: <MagnifyingGlassCircleIcon className="h-10 w-10 text-orange-500" />,
  },
  {
    number: "02",
    title: "Customize Your Agent",
    desc: "Design agent personality, tone, and logic—set rules for business requirements, branding, and desired outcomes.",
    icon: <AdjustmentsHorizontalIcon className="h-10 w-10 text-orange-500" />,
  },
  {
    number: "03",
    title: "Test Your Agent",
    desc: "Instantly test and preview your AI agent, adjusting instructions and reviewing response accuracy live.",
    icon: <BoltIcon className="h-10 w-10 text-orange-500" />,
  },
  {
    number: "04",
    title: "Go Live Instantly",
    desc: "Connect agents to your calls, chat, or support tools using secure API/webhook integration with one click.",
    icon: <RocketLaunchIcon className="h-10 w-10 text-orange-500" />,
  },
];

const stats: StatBadge[] = [
  { label: "Users", value: "10K+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Support", value: "24/7" },
];

const Home: React.FC = () => {
  const handleStartBuilding = (): void => {
    console.log("Navigating to sign up...");
    // Add navigation logic: navigate('/signup') or navigate('/analyze-website')
  };

  const handleLearnMore = (): void => {
    console.log("Navigating to learn more...");
    // Add navigation logic or scroll to features
  };

  const handleScheduleDemo = (): void => {
    console.log("Opening demo scheduler...");
    // Add demo scheduling logic
  };

  return (
    <div className="w-full font-sans bg-gray-100">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 lg:px-10 py-12 lg:py-24 gap-10 fade-in-up">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 fade-in-up">
            Create AI Calling Agents{" "}
            <span className="text-purple-400 gradient-text">In 4 Simple Steps</span>
          </h1>

          <p className="text-md sm:text-lg text-gray-600 leading-relaxed fade-in-up delay-100">
            Build custom AI Agents with unique personalities and connect them to your customers via calls or webhook. Transform your customer conversation experience in minutes.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up delay-200">
            <button
              onClick={handleStartBuilding}
              className="group relative overflow-hidden bg-orange-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              aria-label="Start building AI agents for free"
            >
              <span className="relative z-10">Start Building Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleLearnMore}
              className="group px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-orange-300 transition-all duration-300 font-medium hover:scale-105 hover:-translate-y-1 hover:shadow-md"
              aria-label="Learn more about AI agents"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start fade-in-up delay-300"
            role="region"
            aria-label="Platform statistics"
          >
            {stats.map((stat, index) => (
              <span
                key={index}
                className="group bg-white px-5 py-3 rounded-lg text-gray-800 shadow border border-gray-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:scale-105 cursor-default hover:-translate-y-1"
                aria-label={`${stat.value} ${stat.label}`}
              >
                <strong className="text-orange-500">{stat.value}</strong> {stat.label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-lg lg:max-w-2xl fade-in-up delay-400">
          <div className="group shadow-2xl w-full hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"
                aria-hidden="true"
              ></div>
              <img
                src={heroImage}
                className="relative w-full h-auto rounded-2xl shadow-xl opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                alt="Modern smartphone displaying AI technology interface"
                loading="lazy"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                <div className="w-28 h-28 bg-cyan-400 rounded-full blur-3xl opacity-60 pulse-animation group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 4 STEPS SECTION */}
      <section className="px-6 md:px-16 lg:px-12 py-16 bg-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 fade-in-up">
          Your AI Agent in <span className="text-purple-400 gradient-text">4 Simple Steps</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <article
              key={index}
              className="rounded-lg border text-gray-800 shadow-sm relative p-6 sm:p-8 bg-white
              border-gray-200 hover:shadow-2xl transition-all duration-500 
              hover:border-orange-500/60 hover:-translate-y-3 group fade-in-up cursor-pointer
              hover:bg-gradient-to-br hover:from-orange-50/30 hover:to-purple-50/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4">
                <div
                  className="w-12 h-12 rounded-lg bg-orange-100/20 flex items-center justify-center 
                  group-hover:bg-orange-500 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-sm group-hover:shadow-lg"
                  aria-label={`Step ${step.number}`}
                >
                  <span className="text-lg font-bold text-orange-500 group-hover:text-white transition-colors duration-300">{step.number}</span>
                </div>
              </div>

              {/* Icon */}
              <div className="mb-4 group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500" aria-hidden="true">
                {step.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.desc}</p>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-16 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 p-8 sm:p-12 lg:p-16 rounded-3xl text-center shadow-xl border border-purple-100 fade-in-up hover:shadow-3xl hover:scale-105 transition-all duration-500">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Transform Your <span className="text-purple-400 gradient-text">Customer Experience?</span>
          </h2>

          <p className="mt-6 text-md sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses using AI agents to automate conversations, boost efficiency, and delight customers 24/7.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleStartBuilding}
              className="group relative overflow-hidden bg-orange-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Start building AI agents for free"
            >
              <span className="relative z-10">Start Building Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white animate-shimmer"></div>
              </div>
            </button>
            <button
              onClick={handleScheduleDemo}
              className="group px-8 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 transition-all duration-300 font-medium shadow hover:shadow-lg hover:scale-110 hover:-translate-y-1"
              aria-label="Schedule a product demo"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

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

        .delay-400 {
          animation-delay: 400ms;
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
          background: linear-gradient(90deg, #a855f7, #ec4899, #f97316, #a855f7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s ease infinite;
        }

        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }

        /* Smooth transitions for all interactive elements */
        button, a, .group {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Home;