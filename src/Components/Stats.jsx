'use client';

import Image from "next/image";
import React from "react";
import { FiBriefcase, FiLayers, FiUsers, FiStar } from "react-icons/fi";
import globe from '@/assets/images/globe.png';

export default function Stats() {
  return (
    <section className="relative w-full bg-[#0A0A0C] text-white py-8 px-6 overflow-hidden flex flex-col items-center">
      
      <div className="relative w-full flex flex-col items-center justify-center text-center min-h-[380px] md:min-h-[550px] top-50">
        
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none z-0 transform scale-110">
          <Image 
            src={globe}
            alt="Globe Map Network" 
            priority
            className="w-full h-full object-contain opacity-90 mix-blend-screen transform scale-125 md:scale-[1.8] translate-y-12"
          />
        </div>

        {/* Central Core Headline Overlayed on Globe */}
        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-medium max-w-2xl leading-snug text-white/95 tracking-tight px-4 antialiased">
          Assisting over <span className="font-semibold text-white">15,000 job seekers</span> <br className="hidden sm:inline" /> 
          find their dream positions.
        </h2>
      </div>

      {/* Grid Analytics Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl z-10 mt-16 md:mt-10">
        
        {/* Stat Card 1: Active Jobs */}
        <div className="bg-[#111113]/90 border border-zinc-900/80 p-7 rounded-2xl flex flex-col justify-between h-44 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-zinc-800">
          <div className="text-zinc-500 bg-zinc-900/40 w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-800/40">
            <FiBriefcase size={18} />
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold tracking-tight text-white">50K</h3>
            <p className="text-xs text-zinc-500 font-normal tracking-wide">Active Jobs</p>
          </div>
        </div>

        {/* Stat Card 2: Companies */}
        <div className="bg-[#111113]/90 border border-zinc-900/80 p-7 rounded-2xl flex flex-col justify-between h-44 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-zinc-800">
          <div className="text-zinc-500 bg-zinc-900/40 w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-800/40">
            <FiLayers size={18} />
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold tracking-tight text-white">12K</h3>
            <p className="text-xs text-zinc-500 font-normal tracking-wide">Companies</p>
          </div>
        </div>

        {/* Stat Card 3: Job Seekers */}
        <div className="bg-[#111113]/90 border border-zinc-900/80 p-7 rounded-2xl flex flex-col justify-between h-44 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-zinc-800">
          <div className="text-zinc-500 bg-zinc-900/40 w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-800/40">
            <FiUsers size={18} />
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold tracking-tight text-white">2M</h3>
            <p className="text-xs text-zinc-500 font-normal tracking-wide">Job Seekers</p>
          </div>
        </div>

        {/* Stat Card 4: Satisfaction Rate */}
        <div className="bg-[#111113]/90 border border-zinc-900/80 p-7 rounded-2xl flex flex-col justify-between h-44 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-zinc-800">
          <div className="text-zinc-500 bg-zinc-900/40 w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-800/40">
            <FiStar size={18} />
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold tracking-tight text-white">97%</h3>
            <p className="text-xs text-zinc-500 font-normal tracking-wide">Satisfaction Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
}

