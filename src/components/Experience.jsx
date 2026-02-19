import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workExperience = [
    {
        company: "Singapore Institute of Technology",
        roles: [
            {
                title: "Software Developer (Contract)",
                period: "Apr 2023 - Jun 2023",
                points: [
                    "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
                    "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
                ],
                links: [{ label: "NFTVue", url: "#" }]
            }
        ]
    },
    {
        company: "DBS Bank",
        roles: [
            {
                title: "Software Developer (Intern)",
                period: "May 2022 - Dec 2022",
                points: [
                    "Worked on the backend for the digital exchange and asset custody application using Spring Boot and Java",
                    "Built an admin dashboard web application for a DBS Metaverse event using Spring Security and Angular"
                ]
            }
        ]
    },
];

const education = [
    {
        institution: "Digipen Institute of Technology Singapore",
        degree: "BS in Computer Science in Real-Time Interactive Simulation",
        period: "Sep 2019 - Apr 2023",
        points: [
            "Graduated with a Minor in Mathematics",
            "President of Digipen Student Management Committee for freshman year",
            "3-time recipient of the Dean's Honor List"
        ],
        links: [
            { label: "Final Year Project", url: "#" },
            { label: "2nd Year Project", url: "#" }
        ]
    },
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState("Work");

    return (
        <section className="relative w-full max-w-xl mx-auto px-4 mt-10 mb-20 z-10">
            {/* Toggle Switch */}
            <div className="flex bg-[#121212] p-1 rounded-t-lg mb-0 border-t border-l border-r border-[#252525]">
                {["Work", "Education"].map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === tab
                            ? "bg-[#252525] text-white shadow-lg"
                            : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative border border-[#252525] bg-[#0A0A0A] rounded-b-lg p-6 mb-10 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: activeTab === "Work" ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: activeTab === "Work" ? 20 : -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-12"
                    >
                        {activeTab === "Work" ? (
                            workExperience.map((exp, idx) => (
                                <div key={idx} className="relative pl-14 sm:pl-14">
                                    {/* Vertical Line */}
                                    {idx !== workExperience.length - 1 && (
                                        <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-[-48px] w-px bg-[#252525]" />
                                    )}

                                    {/* Icon Circle */}
                                    <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#252525] bg-[#121212] flex items-center justify-center overflow-hidden">
                                        <div className="text-[10px] text-gray-400 font-bold uppercase">
                                            {exp.company.substring(0, 3)}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                                            {exp.company}
                                        </h3>

                                        {exp.roles.map((role, rIdx) => (
                                            <div key={rIdx} className="space-y-2">
                                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                                    <span className="text-sm font-semibold text-gray-300">
                                                        {role.title}
                                                    </span>
                                                    <span className="text-[11px] text-gray-500 uppercase tracking-wider">
                                                        {role.period}
                                                    </span>
                                                </div>
                                                <ul className="space-y-1.5">
                                                    {role.points.map((point, pIdx) => (
                                                        <li key={pIdx} className="text-xs sm:text-[13px] text-gray-400 leading-relaxed list-disc list-inside">
                                                            <span className="-ml-1">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {role.links && (
                                                    <div className="flex gap-2 pt-1 transition-all duration-300">
                                                        {role.links.map((link, lIdx) => (
                                                            <button key={lIdx} type="button" className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#252525] bg-[#121212] text-xs text-gray-300 hover:bg-[#252525] transition-colors">
                                                                <i className="bx bx-globe text-[10px]"></i>
                                                                {link.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            education.map((edu, idx) => (
                                <div key={idx} className="relative">
                                    {/* Vertical Line */}
                                    {idx !== education.length - 1 && (
                                        <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-[-48px] w-px bg-[#252525]" />
                                    )}

                                    {/* Icon Circle */}
                                    <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#252525] bg-[#121212] flex items-center justify-center overflow-hidden">
                                        <div className="text-[10px] text-gray-400 font-bold uppercase">
                                            {edu.institution.substring(0, 3)}
                                        </div>
                                    </div>

                                    <div className="space-y-2 pl-14">
                                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                                            {edu.institution}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                            <span className="text-sm font-semibold text-gray-300">
                                                {edu.degree}
                                            </span>
                                            <span className="text-[11px] text-gray-500 uppercase tracking-wider">
                                                {edu.period}
                                            </span>
                                        </div>
                                        {edu.points && (
                                            <ul className="space-y-1.5 pt-1">
                                                {edu.points.map((point, pIdx) => (
                                                    <li key={pIdx} className="text-xs sm:text-[13px] text-gray-400 leading-relaxed list-disc list-inside">
                                                        <span className="-ml-1">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {edu.links && (
                                            <div className="flex gap-2 pt-2">
                                                {edu.links.map((link, lIdx) => (
                                                    <button key={lIdx} className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#252525] bg-[#121212] text-xs text-gray-300 hover:bg-[#252525] transition-colors">
                                                        <i className="bx bx-globe text-[10px]"></i>
                                                        {link.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}