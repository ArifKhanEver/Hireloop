'use client';

import { motion } from "motion/react";
import React from "react";
import { FiSearch, FiMapPin, FiBriefcase } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full bg-[#0A0A0C] text-white flex flex-col items-center justify-center px-6 overflow-hidden pt-16 pb-28">
      
      {/* Background Ambient Glow (Exactly like Screenshot_9) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-[#1d1253]/30 via-[#0a0720]/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-5xl flex flex-col items-center relative z-10">
        
        <motion.div initial={{opacity: 0, y:-20}} animate={{ opacity: 1, y:0 }} transition={{duration:0.5}} className="inline-flex items-center gap-2.5 bg-[#131316]/90 border border-zinc-800/80 px-4 py-2 rounded-full text-xs md:text-sm font-normal text-zinc-400 mb-8 shadow-xl backdrop-blur-md">
          <FiBriefcase className="text-amber-600 fill-amber-600/20" size={16} />
          <span className="text-white font-bold tracking-wide">50,000+</span> 
          <span className="text-zinc-500 tracking-wider text-[11px] md:text-xs">NEW JOBS THIS MONTH</span>
        </motion.div>

        {/* Main Hero Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center tracking-tight max-w-3xl leading-[1.12] mb-6 antialiased">
          Find Your Dream Job Today
        </h1>

        <p className="text-zinc-400 text-center text-sm md:text-base max-w-2xl font-normal leading-relaxed mb-12 px-2 antialiased">
          HireLoop connects top talent with world-class companies. Browse thousands of 
          curated opportunities and land your next role — faster.
        </p>

        <div className="w-full max-w-3xl bg-[#111113]/90 border border-zinc-800/80 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-3 md:gap-0 backdrop-blur-xl shadow-2xl shadow-black/50 mb-8">
          
          {/* Left Segment: Job Title Input */}
          <div className="flex items-center gap-3 pl-4 flex-1 w-full py-2 md:py-0">
            <FiSearch className="text-zinc-500 text-lg flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Job title, skill or company" 
              className="bg-transparent w-full focus:outline-none text-sm text-white placeholder-zinc-600 font-normal"
            />
          </div>
          
          {/* Middle Inner Vertical Divider */}
          <div className="hidden md:block h-6 w-[1px] bg-zinc-800/80 mx-2"></div>
          
          {/* Right Segment: Location Input */}
          <div className="flex items-center gap-3 pl-4 md:pl-2 flex-1 w-full py-2 md:py-0">
            <FiMapPin className="text-zinc-500 text-lg flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Location or Remote" 
              className="bg-transparent w-full focus:outline-none text-sm text-white placeholder-zinc-600 font-normal"
            />
          </div>
          
          <button className="w-full md:w-auto bg-[#5B51F9] hover:bg-[#483EFF] text-white p-3.5 md:px-5 md:py-3.5 rounded-xl md:rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 flex-shrink-0 shadow-lg shadow-[#5B51F9]/20">
            <FiSearch className="text-lg" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm mt-2">
          <span className="text-zinc-500 font-normal text-[13px]">Trending Position</span>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="#" className="bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/60 px-4 py-1.5 rounded-full text-zinc-300 text-xs font-normal transition-colors duration-200">
              Product Designer
            </a>
            <a href="#" className="bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/60 px-4 py-1.5 rounded-full text-zinc-300 text-xs font-normal transition-colors duration-200">
              AI Engineering
            </a>
            <a href="#" className="bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/60 px-4 py-1.5 rounded-full text-zinc-300 text-xs font-normal transition-colors duration-200">
              Dev-ops Engineer
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}