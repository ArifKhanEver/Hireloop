'use client';

import React from "react";
import { 
  FiSearch, 
  FiTrendingUp, 
  FiBarChart2, 
  FiBookmark, 
  FiMousePointer, 
  FiFileText, 
  FiHexagon, 
  FiArrowUpRight 
} from "react-icons/fi";

export default function Features() {
  const featureList = [
    {
      icon: <FiSearch size={20} />,
      title: "Smart Search",
      desc: "Find your ideal job with advanced filters."
    },
    {
      icon: <FiTrendingUp size={20} />,
      title: "Salary Insights",
      desc: "Get real salary data to negotiate confidently."
    },
    {
      icon: <FiBarChart2 size={20} />,
      title: "Top Companies",
      desc: "Apply to vetted companies that are hiring."
    },
    {
      icon: <FiBookmark size={20} />,
      title: "Saved Jobs",
      desc: "Manage apps & favorites on your dashboard."
    },
    {
      icon: <FiMousePointer size={20} />,
      title: "One-Click Apply",
      desc: "Simplify your job applications for an easier process!"
    },
    {
      icon: <FiFileText size={20} />,
      title: "Resume Builder",
      desc: "Create professional resumes with modern templates."
    },
    {
      icon: <FiHexagon size={20} />,
      title: "Skill-Based Matching",
      desc: "Discover jobs that match your skills and experience."
    },
    {
      icon: <FiArrowUpRight size={20} />,
      title: "Career Growth Resources",
      desc: "Boost your career with quick interview tips."
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0C] text-white py-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center text-center mb-16">
        
        {/* Top Badge Accent */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#6366F1] uppercase mb-4">
          <span className="w-1.5 h-1.5 bg-[#6366F1] rotate-45 inline-block"></span>
          Features Job
          <span className="w-1.5 h-1.5 bg-[#6366F1] rotate-45 inline-block"></span>
        </div>

        {/* Main Header Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-xl leading-[1.15] antialiased">
          Everything you need <br /> to succeed
        </h2>
      </div>

      {/* 8-Feature Responsive Flex/Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full max-w-6xl">
        {featureList.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 group transition-all duration-300"
          >
            {/* Icon Wrapper Control */}
            <div className="flex-shrink-0 text-zinc-400 bg-[#111113]/60 border border-zinc-900 w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:border-[#6366F1]/30 group-hover:text-[#6366F1] group-hover:bg-[#111113]">
              {feature.icon}
            </div>

            {/* Feature Text Content Meta */}
            <div className="flex flex-col text-left space-y-1 pt-1">
              <h3 className="text-base font-medium text-white tracking-wide transition-colors duration-200 group-hover:text-zinc-200">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 font-normal leading-relaxed max-w-[220px]">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}