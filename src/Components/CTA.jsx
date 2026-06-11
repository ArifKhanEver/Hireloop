'use client';

import Image from "next/image";
import ctaBg from "@/assets/images/cta-bg.png";

export default function CTA() {
    return (
        <section className="relative w-full bg-[#0A0A0C] text-white py-24 md:py-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center">

            {/* Background Mesh Grid & Purple Radial Glow Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 flex justify-center items-start">
                <Image
                    src={ctaBg}
                    alt="Curved Mesh Grid Background"
                    priority
                    fill
                    className="object-cover opacity-50 mix-blend-screen select-none pointer-events-none"
                />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[350px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
            </div>

            {/* Content Meta Container */}
            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">

                {/* Main Header Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.2] max-w-2xl antialiased">
                    Your next role is <br className="hidden sm:inline" /> already looking for you
                </h2>

                {/* Subtitle Description */}
                <p className="text-zinc-400 text-sm sm:text-base font-normal tracking-wide mt-4 max-w-md sm:max-w-xl leading-relaxed opacity-90 text-balance">
                    Build a profile in three minutes. The matches start arriving tomorrow morning.
                </p>

                {/* Action Button Trigger Group */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-10 w-full sm:w-auto px-4 sm:px-0">

                    {/* Primary Button */}
                    <button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 px-6 py-3 rounded-xl font-medium text-sm sm:text-base shadow-lg">
                        Create a free account
                    </button>

                    {/* Secondary Outline Button */}
                    <button className="w-full sm:w-auto bg-[#111113]/60 hover:bg-[#111113] border border-zinc-800/80 text-white active:scale-[0.98] transition-all duration-200 px-6 py-3 rounded-xl font-medium text-sm sm:text-base backdrop-blur-sm">
                        View pricing
                    </button>

                </div>

            </div>

        </section>
    );
}