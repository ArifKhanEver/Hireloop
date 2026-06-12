'use client'
import React, { useState } from 'react';
import { Input, Button, Select, ListBox } from "@heroui/react";
import { FiMapPin, FiGlobe } from "react-icons/fi";

const JobPostForm = () => {
    const categories = [
        { key: "software", label: "Software Development" },
        { key: "marketing", label: "Marketing & Sales" },
        { key: "design", label: "UI/UX Design" },
    ];

    const jobTypes = [
        { key: "full-time", label: "Full-time" },
        { key: "part-time", label: "Part-time" },
        { key: "remote", label: "Remote" },
        { key: "contract", label: "Contract" },
        { key: "internship", label: "Internship" },
    ];

    const currencies = [
        { key: "USD", label: "USD" },
        { key: "BDT", label: "BDT" },
        { key: "EUR", label: "EUR" },
    ];

    const [linkedCompany, setLinkedCompany] = useState({
        name: "Dev Wonder",
        logo: "https://via.placeholder.com/40",
        industry: "Software Agency",
        isApproved: true,
        activeJobsUsed: 7,
        activeJobsLimit: 10
    });

    const [isRemote, setIsRemote] = useState(false);

    const inputStyles = {
        label: "text-zinc-200 font-medium text-sm mb-1.5 block",
        inputWrapper: "h-11 border-zinc-800 bg-[#121214] data-[hover=true]:border-zinc-700 group-data-[focus=true]:border-zinc-700 transition-colors duration-150",
        input: "text-white placeholder:text-zinc-600 text-sm",
    };

    const selectClassNames = {
        label: "text-zinc-200 font-medium text-sm mb-1.5 block",
        trigger: "w-full h-11 border border-zinc-800 bg-[#121214] hover:border-zinc-700 focus:outline-none transition-colors duration-150 rounded-lg flex items-center justify-between px-3 text-left text-white text-sm",
        value: "text-white text-sm placeholder:text-zinc-600"
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        
        const finalData = {
            ...formValues,
            isRemote: isRemote,
            companyName: linkedCompany.name,
            location: isRemote ? "Fully Remote" : formValues.location
        };

        console.log("Submitted Job Data:", finalData);
    };

    return (
        <div className="w-full min-h-screen bg-[#0A0A0C] text-white p-6 md:p-10">

            {/* Header */}
            <div className="max-w-4xl mb-6">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Post a New Job</h1>
                <p className="text-sm text-zinc-500 mt-1">Fill out the details below to publish your open position.</p>
            </div>

            {/* COMPANY INFO CARD */}
            <div className="max-w-4xl mb-8 bg-[#111113]/80 border border-dashed border-zinc-800 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src={linkedCompany.logo}
                        alt={linkedCompany.name}
                        className="w-10 h-10 rounded-lg bg-zinc-800 object-cover"
                    />
                    <div>
                        <p className="text-xs text-zinc-500 font-medium">Posting as Company</p>
                        <h3 className="text-sm font-bold text-zinc-200">
                            {linkedCompany.name}
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded ml-1.5 font-normal border border-emerald-500/20">Approved</span>
                        </h3>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs text-zinc-500">Plan Usage</p>
                    <p className="text-xs font-semibold text-zinc-300">{linkedCompany.activeJobsUsed} / {linkedCompany.activeJobsLimit} Active Jobs</p>
                </div>
            </div>

            <form className="max-w-4xl flex flex-col gap-8" onSubmit={handleSubmit}>

                {/* JOB INFORMATION SECTION */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-base font-semibold text-zinc-200 border-b border-zinc-900 pb-2">
                        Job Information
                    </h2>

                    {/* Row 1: Job Title & Job Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="w-full">
                            <label className="text-zinc-200 font-medium text-sm mb-1.5 block">Job Title</label>
                            <Input
                                type="text"
                                name="title"
                                placeholder="e.g. Senior Frontend Engineer"
                                variant="bordered"
                                className="w-full py-3"
                                radius="md"
                                isRequired
                                classNames={{
                                    inputWrapper: "h-11 border-zinc-800 bg-[#121214] data-[hover=true]:border-zinc-700 group-data-[focus=true]:border-zinc-700 transition-colors duration-150",
                                    input: "text-white placeholder:text-zinc-600 text-sm",
                                }}
                            />
                        </div>

                        {/* Job Category Select */}
                        <div className="w-full">
                            <label className="text-zinc-200 font-medium text-sm mb-1.5 block">Job Category</label>
                            <Select name="category" isRequired className="w-full">
                                <Select.Trigger className={selectClassNames.trigger}>
                                    <Select.Value className={selectClassNames.value} placeholder="Select an item" />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className="bg-[#121214] border border-zinc-800 text-zinc-300 rounded-lg p-1 shadow-xl">
                                    <ListBox className="text-zinc-300 outline-none">
                                        {categories.map((cat) => (
                                            <ListBox.Item
                                                key={cat.key}
                                                id={cat.key}
                                                textValue={cat.label}
                                                className="text-zinc-300 hover:bg-zinc-800 data-[hover=true]:bg-zinc-800 data-[hover=true]:text-white rounded-md p-2 cursor-pointer transition-colors block outline-none"
                                            >
                                                {cat.label}
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                    </div>

                    {/* Row 2: Job Type & Salary Range */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Job Type Select */}
                        <div className="w-full">
                            <label className="text-zinc-200 font-medium text-sm mb-1.5 block">Job Type</label>
                            <Select name="jobType" isRequired className="w-full">
                                <Select.Trigger className={selectClassNames.trigger}>
                                    <Select.Value className={selectClassNames.value} placeholder="Select an item" />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className="bg-[#121214] border border-zinc-800 text-zinc-300 rounded-lg p-1 shadow-xl">
                                    <ListBox className="text-zinc-300 outline-none">
                                        {jobTypes.map((type) => (
                                            <ListBox.Item
                                                key={type.key}
                                                id={type.key}
                                                textValue={type.label}
                                                className="text-zinc-300 hover:bg-zinc-800 data-[hover=true]:bg-zinc-800 data-[hover=true]:text-white rounded-md p-2 cursor-pointer transition-colors block outline-none"
                                            >
                                                {type.label}
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Salary Range Inline Block */}
                        <div className="flex flex-col">
                            <label className="text-zinc-200 font-medium text-sm mb-1.5 block">Salary Range</label>
                            <div className="grid grid-cols-3 gap-2">
                                <Input
                                    type="number"
                                    name="salaryMin"
                                    placeholder="Min"
                                    variant="bordered"
                                    radius="md"
                                    isRequired
                                    classNames={{ ...inputStyles, label: "hidden" }}
                                />
                                <Input
                                    type="number"
                                    name="salaryMax"
                                    placeholder="Max"
                                    variant="bordered"
                                    radius="md"
                                    isRequired
                                    classNames={{ ...inputStyles, label: "hidden" }}
                                />
                                {/* Currency Select */}
                                <Select name="currency" isRequired className="w-full">
                                    <Select.Trigger className={selectClassNames.trigger}>
                                        <Select.Value className={selectClassNames.value} placeholder="USD" />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className="bg-[#121214] border border-zinc-800 text-zinc-300 rounded-lg p-1 shadow-xl">
                                        <ListBox className="text-zinc-300 outline-none">
                                            {currencies.map((curr) => (
                                                <ListBox.Item
                                                    key={curr.key}
                                                    id={curr.key}
                                                    textValue={curr.label}
                                                    className="text-zinc-300 hover:bg-zinc-800 data-[hover=true]:bg-zinc-800 data-[hover=true]:text-white rounded-md p-2 cursor-pointer transition-colors block outline-none"
                                                >
                                                    {curr.label}
                                                </ListBox.Item>
                                            ))}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Location & Application Deadline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                        <div className="w-full relative">
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="text-zinc-200 font-medium text-sm block">Location</label>
                                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={isRemote}
                                        onChange={(e) => setIsRemote(e.target.checked)}
                                        className="w-3.5 h-3.5 rounded border-zinc-800 bg-[#121214] text-indigo-600 accent-indigo-600 focus:ring-0 cursor-pointer"
                                    />
                                    <span className={`text-xs font-medium transition-colors ${isRemote ? 'text-indigo-400' : 'text-zinc-500 hover:text-zinc-400'}`}>
                                        Remote
                                    </span>
                                </label>
                            </div>
                            <Input
                                type="text"
                                name="location"
                                labelPlacement="outside"
                                placeholder={isRemote ? "Fully Remote" : "e.g. Austin, TX"}
                                disabled={isRemote}
                                variant="bordered"
                                radius="md"
                                className="w-full py-3"
                                isRequired={!isRemote}
                                classNames={{ ...inputStyles, label: "hidden" }}
                                startContent={<FiGlobe className="text-zinc-600 mr-1" size={16} />}
                            />
                        </div>

                        <div className="w-full">
                            <label className="text-zinc-200 font-medium text-sm mb-1.5 block">
                                Application Deadline
                            </label>
                            <Input
                                type="date"
                                name="deadline"
                                placeholder="mm/dd/yyyy"
                                variant="bordered"
                                className="w-full"
                                radius="md"
                                isRequired
                                classNames={{
                                    inputWrapper: "h-11 border-zinc-800 bg-[#121214] data-[hover=true]:border-zinc-700 group-data-[focus=true]:border-zinc-700 transition-colors duration-150",
                                    input: "text-white placeholder:text-zinc-600 text-sm",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* JOB DETAILS & DESCRIPTION */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-base font-semibold text-zinc-200 border-b border-zinc-900 pb-2">
                        Job Details & Description
                    </h2>

                    {/* Responsibilities Field */}
                    <div className="flex flex-col">
                        <label className="text-zinc-200 font-medium text-sm mb-1.5 block">
                            Responsibilities
                        </label>
                        <textarea
                            name="responsibilities"
                            placeholder="Outline the day-to-day tasks and key responsibilities for this role..."
                            rows={5}
                            required
                            className="w-full border border-zinc-800 bg-[#121214] hover:border-zinc-700 focus:border-zinc-700 focus:outline-none transition-colors duration-150 rounded-lg p-3 text-white placeholder:text-zinc-600 text-sm resize-none"
                        />
                    </div>

                    {/* Requirements Field */}
                    <div className="flex flex-col">
                        <label className="text-zinc-200 font-medium text-sm mb-1.5 block">
                            Requirements
                        </label>
                        <textarea
                            name="requirements"
                            placeholder="List required skills, experience, certifications, or educational background..."
                            rows={5}
                            required
                            className="w-full border border-zinc-800 bg-[#121214] hover:border-zinc-700 focus:border-zinc-700 focus:outline-none transition-colors duration-150 rounded-lg p-3 text-white placeholder:text-zinc-600 text-sm resize-none"
                        />
                    </div>

                    {/* Benefits Field (Optional) */}
                    <div className="flex flex-col">
                        <label className="text-zinc-200 font-medium text-sm mb-1.5 block">
                            Benefits <span className="text-zinc-500 font-normal text-xs">(Optional)</span>
                        </label>
                        <textarea
                            name="benefits"
                            placeholder="Describe perks, health insurance, remote allowance, or annual bonuses..."
                            rows={4}
                            className="w-full border border-zinc-800 bg-[#121214] hover:border-zinc-700 focus:border-zinc-700 focus:outline-none transition-colors duration-150 rounded-lg p-3 text-white placeholder:text-zinc-600 text-sm resize-none"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4 mt-2">
                    <Button
                        type="button" 
                        variant="light"
                        radius="md"
                        className="text-zinc-400 hover:text-white px-4 font-medium"
                    >
                        Save as Draft
                    </Button>
                    <Button
                        type="submit"
                        radius="md"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 h-11"
                    >
                        Publish Job
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default JobPostForm;