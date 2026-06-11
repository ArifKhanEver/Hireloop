'use client';

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '@/assets/images/logo.png';
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "motion/react";

// অ্যানিমেশন ভ্যারিয়েন্টস
const containerVariants = {
  hidden: {
    opacity: 0,
    y: -15,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const [hoveredTab, setHoveredTab] = useState(null);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      setIsMenuOpen(false);
      router.push('/signin');
    } catch (error) {
      toast.error("Sign out failed:", error);
    }
  };

  return (
    <div className="w-full bg-[#0A0A0C] px-4 py-4 md:px-8 md:py-6 sticky top-0 z-50">

      {/* Floating Capsule Navbar Container */}
      <nav className="mx-auto max-w-7xl bg-[#141416]/90 border border-zinc-800/60 backdrop-blur-xl rounded-2xl h-20 flex items-center justify-between px-6 md:px-10 text-white relative shadow-2xl">

        {/* Left Side: Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-black tracking-tight flex items-center select-none">
            <Image src={logo} height={30} width={120} alt="Hireloop Logo" />
          </Link>
        </div>

        {/* Right Side: Navigation Links & Actions (Desktop View) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-7 text-[14px] font-normal text-zinc-400" onMouseLeave={() => setHoveredTab(null)}>
            
            {/* ১. Browse Jobs */}
            <li 
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredTab('jobs')}
            >
              {/* padding এখন সরাসরি লিংকের ব্লকে দেওয়া যাতে পুরো এরিয়া জুড়েই ক্লিক কাজ করে */}
              <Link href="/jobs" className="relative block py-2 px-3 hover:text-white transition-colors duration-200">
                <span className="relative z-10">Browse Jobs</span>
                {hoveredTab === 'jobs' && (
                  <motion.div
                    layoutId="desktopNavHover"
                    className="absolute inset-0 bg-zinc-800/40 rounded-xl z-0 border border-zinc-800/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            </li>

            {/* ২. Company */}
            <li 
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredTab('company')}
            >
              <Link href="/company" className="relative block py-2 px-3 hover:text-white transition-colors duration-200">
                <span className="relative z-10">Company</span>
                {hoveredTab === 'company' && (
                  <motion.div
                    layoutId="desktopNavHover"
                    className="absolute inset-0 bg-zinc-800/40 rounded-xl z-0 border border-zinc-800/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            </li>

            {/* ৩. Pricing (ফিক্সড: missing অন-মাউস এন্টার যোগ করা হয়েছে) */}
            <li 
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredTab('pricing')}
            >
              <Link href="/pricing" className="relative block py-2 px-3 hover:text-white transition-colors duration-200">
                <span className="relative z-10">Pricing</span>
                {hoveredTab === 'pricing' && (
                  <motion.div
                    layoutId="desktopNavHover"
                    className="absolute inset-0 bg-zinc-800/40 rounded-xl z-0 border border-zinc-800/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            </li>
          </ul>

          {/* Exact Vertical Divider Line */}
          <div className="h-4 w-[1px] bg-zinc-800/80 mx-1"></div>

          {/* Auth Button Group */}
          <div className="flex items-center gap-6">
            {mounted && session ? (
              <>
                <span className="text-[14px] font-medium text-zinc-300 bg-zinc-900/40 px-3 py-1.5 rounded-lg border border-zinc-800/60">
                  {session.user?.name}
                </span>
                <button
                  onClick={handleSignOut}
                  className="text-[14px] font-medium text-zinc-400 hover:text-red-400 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : mounted ? (
              <>
                <Link href="/signin" className="text-[14px] font-medium text-[#5B51F9] hover:text-[#483EFF] transition-colors duration-200">
                  Sign In
                </Link>
              </>
            ) : (
              <div className="w-12 h-5"></div>
            )}

            <Link href="#">
              <motion.button whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="bg-[#5B51F9] hover:bg-[#483EFF] text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-[#5B51F9]/10 cursor-pointer">
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-400 hover:text-white p-2 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-[90px] left-0 w-full bg-[#141416] border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden z-50"
            >
              <motion.ul className="flex flex-col gap-4 text-base font-normal text-zinc-300">
                <motion.li variants={itemVariants}>
                  <Link href="/jobs" className="block py-1 hover:text-white" onClick={() => setIsMenuOpen(false)}>Browse Jobs</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/company" className="block py-1 hover:text-white" onClick={() => setIsMenuOpen(false)}>Company</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/pricing" className="block py-1 hover:text-white" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                </motion.li>

                {/* Divider for Mobile */}
                <motion.li variants={itemVariants} className="h-[1px] w-full bg-zinc-800/50 my-1"></motion.li>

                {mounted && session ? (
                  <>
                    <motion.li variants={itemVariants} className="text-zinc-400 text-sm font-medium px-1">
                      Logged in as: <span className="text-white block text-base mt-0.5">{session.user?.name}</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left py-1 text-red-400 font-medium transition-colors"
                      >
                        Sign Out
                      </button>
                    </motion.li>
                  </>
                ) : mounted ? (
                  <>
                    <motion.li variants={itemVariants}>
                      <Link href="/signin" className="block py-1 text-[#5B51F9] font-semibold" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                    </motion.li>
                  </>
                ) : null}

                <motion.li variants={itemVariants} className="pt-2">
                  <Link href="#" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-[#5B51F9] text-white font-medium py-3 rounded-xl text-center block">
                      Get Started
                    </button>
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </div>
  );
}