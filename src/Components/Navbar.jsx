'use client';

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '@/assets/images/logo.png';
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const { data: session } = authClient.useSession();

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
          <ul className="flex items-center gap-7 text-[14px] font-normal text-zinc-400">
            <li>
              <Link href="/jobs" className="hover:text-white transition-colors duration-200">Browse Jobs</Link>
            </li>
            <li>
              <Link href="/company" className="hover:text-white transition-colors duration-200">Company</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition-colors duration-200">Pricing</Link>
            </li>
          </ul>

          {/* Exact Vertical Divider Line */}
          <div className="h-4 w-[1px] bg-zinc-800/80 mx-1"></div>

          {/* Auth Button Group */}
          <div className="flex items-center gap-6">
            {session ? (
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
            ) : (
              <>
                <Link href="/signin" className="text-[14px] font-medium text-[#5B51F9] hover:text-[#483EFF] transition-colors duration-200">
                  Sign In
                </Link>
              </>
            )}

            <Link href="#">
              <button className="bg-[#5B51F9] hover:bg-[#483EFF] text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-[#5B51F9]/10">
                Get Started
              </button>
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
        {isMenuOpen && (
          <div className="absolute top-[90px] left-0 w-full bg-[#141416] border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <ul className="flex flex-col gap-4 text-base font-normal text-zinc-300">
              <li>
                <Link href="/jobs" className="block py-1 hover:text-white" onClick={() => setIsMenuOpen(false)}>Browse Jobs</Link>
              </li>
              <li>
                <Link href="/company" className="block py-1 hover:text-white" onClick={() => setIsMenuOpen(false)}>Company</Link>
              </li>
              <li>
                <Link href="/pricing" className="block py-1 hover:text-white" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              </li>

              {/* Divider for Mobile */}
              <li className="h-[1px] w-full bg-zinc-800/50 my-1"></li>

              {session ? (
                <>
                  <li className="text-zinc-400 text-sm font-medium px-1">
                    Logged in as: <span className="text-white block text-base mt-0.5">{session.user?.name}</span>
                  </li>
                  <li>
                    <button 
                      onClick={handleSignOut}
                      className="w-full text-left py-1 text-red-400 font-medium transition-colors"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/signin" className="block py-1 text-[#5B51F9] font-semibold" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                  </li>
                </>
              )}

              <li className="pt-2">
                <Link href="#" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-[#5B51F9] text-white font-medium py-3 rounded-xl text-center block">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}

      </nav>
    </div>
  );
}