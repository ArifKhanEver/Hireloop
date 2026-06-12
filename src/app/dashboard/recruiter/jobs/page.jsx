import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

const RecruiterJobs = async () => {
    const companyId = 123;
    const jobs = await getCompanyJobs(companyId);

    return (
        <div className="w-full min-h-screen bg-[#0A0A0C] text-white p-6 md:p-10">

            {/* Header section matching your screenshot */}
            <div className="max-w-7xl mx-auto mb-8">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Manage All Jobs</h1>
                <p className="text-sm text-zinc-500 mt-1">View, update, and manage your current job postings.</p>
            </div>

            {/* Pure Tailwind CSS Table Container */}
            <div className="max-w-7xl mx-auto overflow-hidden rounded-xl border border-zinc-900 bg-[#111113]/40">
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[800px] text-left border-collapse">
                        
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-[#161619] border-b border-zinc-900 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                <th className="py-4 px-6">Job Title</th>
                                <th className="py-4 px-6">Type / Category</th>
                                <th className="py-4 px-6">Location</th>
                                <th className="py-4 px-6">Status</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-zinc-900/40 text-sm text-zinc-300">
                            {jobs && jobs.length > 0 ? (
                                jobs.map((job) => (
                                    <tr 
                                        key={job._id.toString()} 
                                        className="hover:bg-zinc-900/20 transition-colors duration-150"
                                    >
                                        {/* 1. Job Title */}
                                        <td className="py-4 px-6 font-semibold text-zinc-200 capitalize tracking-wide">
                                            {job.title}
                                        </td>

                                        {/* 2. Type / Category (Stacked Layout) */}
                                        <td className="py-4 px-6">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-zinc-200 capitalize">
                                                    {job.jobType}
                                                </span>
                                                <span className="text-xs text-zinc-500 capitalize mt-0.5">
                                                    {job.category}
                                                </span>
                                            </div>
                                        </td>

                                        {/* 3. Location */}
                                        <td className="py-4 px-6 text-zinc-400 capitalize">
                                            {job.location || "N/A"}
                                        </td>

                                        {/* 4. Status Badge */}
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20 capitalize">
                                                {job.status || "Active"}
                                            </span>
                                        </td>

                                        {/* 5. Actions (Icons matching screenshot) */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-5">
                                                <button className="text-zinc-400 hover:text-white transition-colors cursor-pointer text-lg p-1">
                                                    <FiEye />
                                                </button>
                                                
                                                <button className="text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer text-base p-1">
                                                    <FiEdit2 />
                                                </button>
                                                
                                                <button className="text-red-500/80 hover:text-red-500 transition-colors cursor-pointer text-lg p-1">
                                                    <FiTrash2 />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                /* Empty State */
                                <tr>
                                    <td colSpan="5" className="py-10 text-center text-sm text-zinc-500">
                                        No jobs found for this recruiter.
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default RecruiterJobs;