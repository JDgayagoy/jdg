"use client";

import { useState } from "react";
import { FileUser, Palette, Building2, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const MARKERS = [
    {
        id: 2,
        left: "12.65%",
        top: "1%",
        title: "Cagayan State University - Carig Campus",
        subtitle: "Bachelor of Science in Computer Science",
        date: "October 2022 -May 2026",
        image: "/images/csu.jpg",
    },
    {
        id: 1,
        left: "31.6%",
        top: "10.7%",
        title: "eBizolution Inc.",
        subtitle: "Application Database Administrator",
        date: "November 2026 - Present",
        image: "/images/ebiz.png",
    },
    {
        id: 3,
        left: "81.67%",
        top: "6.5%",
        title: "Golden Suntec Solutions Inc",
        subtitle: "Commercial Technology Intern",
        date: "December 2025 - February 2026",
        image: "/images/gs.webp",
    },
    {
        id: 4,
        left: "56.48%",
        top: "40.11%",
        title: "WhiteCloak Launchpad Program",
        subtitle: "Software Engineer Track Participant",
        date: "May 2026 - June 2026",
        image: "/images/whitecloak.png",
    }
];

export default function Career() {
    const [activeMarker, setActiveMarker] = useState<number | null>(1);

    const playSound = () => {
        const audio = new Audio('/sound/New_Project.wav');
        audio.play().catch(e => console.error("Audio play failed:", e));
    };

    return (
        <div className="relative w-full h-auto mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-between items-center gap-4 px-4"
            >
                <span className="font-light text-[14px] leading-relaxed tracking-tight transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>So Far</span>
                <div className="flex flex-row items-center justify-center gap-2">
                    <span className="font-light text-[14px] leading-relaxed tracking-tight mt-0 lg:mt-2 transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>Need a Copy?</span>
                    <a
                        href="/file/Resume-JohnDavidGayagoy.pdf"
                        download="Resume-JohnDavidGayagoy.pdf"
                        onClick={playSound}
                        className="relative flex -mt-1 lg:mt-1 items-center gap-2 cursor-pointer select-none active:translate-y-[3px] transition-all duration-75"
                        style={{
                            padding: "6px 12px",
                            color: "var(--btn-pink-text)",
                            background: "linear-gradient(160deg, var(--btn-pink-from) 0%, var(--btn-pink-to) 100%)",
                            borderRadius: "12px",
                            boxShadow: `
                            0 1px 0 rgba(255,255,255,0.3) inset,
                            0 -1px 0 rgba(0,0,0,0.08) inset,
                            0 6px 0 var(--btn-pink-shadow1),
                            0 7px 0 var(--btn-pink-shadow2),
                            0 10px 14px rgba(0,0,0,0.12)
                        `,
                            border: "1.5px solid var(--btn-pink-border)",
                            fontFamily: "Inter, system-ui, sans-serif",
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            textDecoration: "none"
                        }}
                    >
                        <FileUser size={14} strokeWidth={2.5} /> Resume
                    </a>
                </div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="font-semibold text-2xl leading-relaxed tracking-wide -mt-2 px-4 transition-colors duration-300"
                style={{ color: 'var(--text-heading)' }}
            >
                Career
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="w-full mt-60 flex justify-center px-4 md:px-0 lg:px-0 md:mt-50"
            >
                <div className="relative w-full aspect-[1969/530] max-h-[600px] max-w-[2229px] mx-auto">
                    {MARKERS.map((marker) => {
                        const isActive = activeMarker === marker.id;
                        return (
                            <div
                                key={marker.id}
                                className={`absolute -translate-x-1/2 -translate-y-full flex flex-col items-center ${isActive ? 'z-50' : marker.id === 1 ? 'z-30' : 'z-20'} group cursor-pointer`}
                                style={{ left: marker.left, top: marker.top }}
                                onClick={() => setActiveMarker(isActive ? null : marker.id)}
                            >
                                <div className={`mb-0 flex flex-col gap-1 p-2 md:px-3 md:py-2 backdrop-blur-md rounded-lg border transition-all duration-300 origin-bottom ${isActive ? 'shadow-[0_8px_24px_rgba(0,0,0,0.08)] -translate-y-2' : 'shadow-[0_2px_12px_rgba(0,0,0,0.04)] group-hover:-translate-y-1 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]'}`} style={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-subtle)' }}>
                                    <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-2.5">
                                        <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0 rounded bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-black/5 overflow-hidden">
                                            {marker.image ? (
                                                <Image src={marker.image} alt={marker.title} width={22} height={22} className="object-cover" sizes="22px" />
                                            ) : null}
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center">
                                            <span className={`font-semibold transition-colors duration-300 text-center md:text-left whitespace-normal md:whitespace-nowrap max-w-[90px] md:max-w-none leading-tight ${isActive ? 'text-[11px] md:text-[14px]' : 'text-[10px] md:text-[13px]'}`} style={{ color: isActive ? 'var(--text-heading)' : 'var(--text-secondary)' }}>{marker.title}</span>

                                            {/* Social Icons - only show when active */}
                                            <motion.div
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: isActive ? 1 : 0, width: isActive ? 'auto' : 0 }}
                                                className="flex items-center overflow-hidden justify-center md:justify-start mt-1 md:mt-0"
                                            >
                                                <div className="flex items-center gap-2 md:ml-2 w-max">
                                                    <Globe className="w-3.5 h-3.5 text-gray-400 hover:text-[#454545] transition-colors" />
                                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3 h-3 text-gray-400 hover:text-[#454545] transition-colors fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.965H5.078z"></path></svg>
                                                    <Globe className="w-3.5 h-3.5 text-gray-400 hover:text-[#454545] transition-colors" />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-0.5 mt-1 md:ml-[34px] md:min-w-max pb-1 items-center md:items-start">
                                            <p className="text-[11px] md:text-[13px] font-medium text-center md:text-left whitespace-normal md:whitespace-nowrap max-w-[120px] md:max-w-none leading-snug transition-colors duration-300" style={{ color: 'var(--marker-subtitle)' }}>{marker.subtitle}</p>
                                            <p className="text-[10px] md:text-[12px] text-center md:text-left whitespace-normal md:whitespace-nowrap max-w-[120px] md:max-w-none leading-snug transition-colors duration-300" style={{ color: 'var(--marker-date)' }}>{marker.date}</p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className={`w-[1.5px] transition-all duration-300 ${isActive ? 'h-16' : 'h-10'}`} style={{ background: isActive ? 'var(--marker-active)' : `linear-gradient(to bottom, var(--text-heading), transparent)` }}></div>
                            </div>
                        );
                    })}

                    <img
                        src="/images/career-map.svg"
                        alt="Career timeline map"
                        className="block w-full h-full object-contain"
                    />
                </div>
            </motion.div>

        </div>
    )
}
