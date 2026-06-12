'use client'
import { useSession } from '@/lib/auth-client';
import { Spinner } from '@heroui/react';
import Image from 'next/image';
import { FiSearch, FiBell, FiFileText, FiUsers, FiZap, FiCheckCircle } from "react-icons/fi";

const RecruiterDashboardHome = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="grid place-content-center min-h-screen gap-2">
                <Spinner size="xl" />
            </div>
        );
    }

    const stats = [
        {
            id: 1,
            title: "Total Job Posts",
            value: "48",
            icon: FiFileText,
        },
        {
            id: 2,
            title: "Total Applicants",
            value: "1,284",
            icon: FiUsers,
        },
        {
            id: 3,
            title: "Active Jobs",
            value: "18",
            icon: FiZap,
        },
        {
            id: 4,
            title: "Jobs Closed",
            value: "32",
            icon: FiCheckCircle,
        },
    ];

    return (
        <div className="w-full min-h-screen bg-[#0A0A0C] text-white p-6 md:p-10">

            <header className="flex items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-10">

                {/* Search Bar */}
                <div className="relative w-full max-w-xl">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                    <input
                        type="text"
                        placeholder="Search applications, jobs, or talent..."
                        className="w-full h-11 pl-12 pr-4 bg-[#111113]/60 border border-zinc-900 rounded-xl text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-800 transition-colors"
                    />
                </div>

                {/* Right Side: Actions & Profile */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    {/* Notification Button */}
                    <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
                        <FiBell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0A0A0C]" />
                    </button>

                    {/* Vertical Divider */}
                    <div className="h-6 w-[1px] bg-zinc-800" />

                    {/* Profile Block */}
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <h4 className="text-sm font-semibold tracking-tight text-zinc-200 leading-tight">
                                {user?.name || "Alex Sterling"}
                            </h4>
                            <span className="text-[11px] text-zinc-500 font-medium mt-0.5 block">
                                TechFlow Inc.
                            </span>
                        </div>

                        {/* Avatar */}
                        <div className="relative h-9 w-9 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center select-none flex-shrink-0">
                            <Image
                                src={user?.image || "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"}
                                alt="User Avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. WELCOME BANNER */}
            <div className="mb-10">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                    Welcome back, {user?.name || "Alex Sterling"}
                </h1>
            </div>

            {/* 3. STATS CARD GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((card) => {
                    const IconComponent = card.icon;
                    return (
                        <div
                            key={card.id}
                            className="bg-[#141416]/50 border border-zinc-900 p-6 rounded-2xl flex flex-col gap-6 shadow-xl hover:border-zinc-800/80 transition-all duration-200"
                        >
                            {/* Icon Box */}
                            <div className="w-10 h-10 rounded-xl bg-[#222226]/40 border border-zinc-800/40 flex items-center justify-center text-zinc-400">
                                <IconComponent size={18} />
                            </div>

                            {/* Meta Content */}
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs font-medium text-zinc-500 tracking-wide">
                                    {card.title}
                                </span>
                                <span className="text-2xl font-bold tracking-tight text-zinc-100">
                                    {card.value}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default RecruiterDashboardHome;