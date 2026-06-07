'use client';

import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-20 border-t border-zinc-900/40 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Section: Brand Info & Multi-column Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 pb-16">
          
          {/* Left Block: Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <a href="/" className="text-2xl font-black tracking-tight flex items-center select-none">
              <span className="text-[#0087FF]">hire</span>
              <span className="text-[#FF6A00]">loop</span>
            </a>
            <p className="text-zinc-500 text-sm font-normal max-w-xs leading-relaxed antialiased">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Right Block: 3 Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-3 gap-8">
            
            {/* Column 1: Product */}
            <div className="space-y-4">
              <h4 className="text-[#5B51F9] font-medium text-sm tracking-wide">Product</h4>
              <ul className="space-y-3 text-sm text-zinc-400 font-normal">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Job discovery</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Worker AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Companies</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Salary data</a></li>
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="space-y-4">
              <h4 className="text-[#5B51F9] font-medium text-sm tracking-wide">Navigations</h4>
              <ul className="space-y-3 text-sm text-zinc-400 font-normal">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Career library</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-[#5B51F9] font-medium text-sm tracking-wide">Resources</h4>
              <ul className="space-y-3 text-sm text-zinc-400 font-normal">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Brand Guideline</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Newsroom</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Socials, Copyright & Policies */}
        <div className="pt-8 border-t border-zinc-900/50 flex flex-col sm:flex-row justify-between items-center gap-6 text-[13px] text-zinc-600 font-normal">
          
          {/* Social Icons Matching the Custom Colors & Backgrounds */}
          <div className="flex items-center gap-3">
            {/* Facebook (Dark Box) */}
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-zinc-900/40 rounded-xl text-zinc-400 hover:text-white transition-colors duration-200">
              <FaFacebookF size={14} />
            </a>
            
            {/* Center Brand Icon (Purple Box) */}
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-[#5B51F9] rounded-xl text-white hover:bg-[#483EFF] transition-colors duration-200 shadow-md shadow-[#5B51F9]/10">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-6h2v6zm-1-7.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
              </svg>
            </a>
            
            {/* LinkedIn (Dark Box) */}
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-zinc-900/40 rounded-xl text-zinc-400 hover:text-white transition-colors duration-200">
              <FaLinkedinIn size={14} />
            </a>
          </div>

          {/* Copyright Text and Policy Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-right">
            <span>Copyright 2024 —Programming Hero</span>
            <div className="flex items-center gap-1.5">
              <a href="#" className="hover:text-zinc-400 transition-colors duration-200">Terms & Policy</a>
              <span className="text-zinc-800">-</span>
              <a href="#" className="hover:text-zinc-400 transition-colors duration-200">Privacy Guideline</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}