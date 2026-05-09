"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";

export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
    };

    const currentProject = PROJECTS[currentIndex];

    return (
        <section className="relative w-full px-4 flex flex-col items-center mt-8">
            {/* Header */}
            <div className="w-full max-w-3xl flex flex-col items-start mb-4">
                <span className="text-[14px] font-jakarta" style={{ color: 'var(--accent)' }}>Featured</span>
                <h2 className="font-semibold text-2xl leading-relaxed tracking-wide -mt-2 mb-6 transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>Projects</h2>
            </div>

            {/* Slider Container */}
            <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/10] rounded-[12px] overflow-hidden shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} transition-all duration-700`} />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />

                {/* Left/Right Buttons */}
                <button
                    onClick={prevProject}
                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md z-20 transition-all active:scale-95"
                    style={{
                        backgroundColor: 'var(--project-nav-bg)',
                        color: 'var(--project-nav-text)',
                    }}
                >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                </button>
                <button
                    onClick={nextProject}
                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md z-20 transition-all active:scale-95"
                    style={{
                        backgroundColor: 'var(--project-nav-bg)',
                        color: 'var(--project-nav-text)',
                    }}
                >
                    <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                {/* Inner Image Container */}
                <div className="group absolute inset-x-16 md:inset-x-32 top-14 md:top-20 bottom-14 md:bottom-20 rounded-xl overflow-hidden shadow-2xl border transition-colors duration-300" style={{ backgroundColor: 'var(--project-overlay-bg)', borderColor: 'var(--border-card)' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={currentProject.image}
                                alt={currentProject.title}
                                fill
                                className="object-cover md:object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 800px"
                                priority
                            />

                            {/* Overlay */}
                            <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
                                {/* Dark Gradient Overlay */}
                                <div className="pt-32 pb-6 md:pb-8 px-6 md:px-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end text-white transition-transform duration-300 ease-out group-hover:-translate-y-[88px] pointer-events-auto">
                                    <h3 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{currentProject.title}</h3>
                                    <p className="text-[13px] md:text-[15px] text-gray-200 mb-4 md:mb-6 max-w-2xl leading-relaxed">
                                        {currentProject.description}
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <a href={currentProject.website} className="flex items-center gap-2 text-sm font-semibold hover:text-gray-300 transition-colors group/link">
                                            <Globe size={18} />
                                            <span className="underline underline-offset-4 decoration-white/40 group-hover/link:decoration-white transition-colors">Website</span>
                                        </a>
                                        <a href={currentProject.source} className="flex items-center gap-2 text-sm font-semibold hover:text-gray-300 transition-colors group/link">
                                            <Globe size={18} />
                                            <span className="underline underline-offset-4 decoration-white/40 group-hover/link:decoration-white transition-colors">Source</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Tech Stack Overlay */}
                                <div className="absolute top-full left-0 w-full h-[88px] flex flex-col items-center justify-center border-t transition-all duration-300 ease-out group-hover:-translate-y-[88px] pointer-events-auto" style={{ backgroundColor: 'var(--project-overlay-bg)', borderColor: 'var(--project-overlay-border)' }}>
                                    <h4 className="text-[13px] font-semibold mb-2.5 transition-colors duration-300" style={{ color: 'var(--project-techstack-text)' }}>Tech Stack</h4>
                                    <div className="flex flex-wrap justify-center gap-1.5 px-4">
                                        {currentProject.techStack.map(tech => (
                                            <span key={tech} className="px-2.5 py-0.5 border rounded-md text-[11px] font-semibold shadow-sm transition-colors duration-300" style={{ borderColor: 'var(--project-techstack-border)', color: 'var(--project-techstack-tag)' }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
                {PROJECTS.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className="w-2.5 h-2.5 rounded-full border-2 transition-all duration-300"
                        style={{
                            backgroundColor: idx === currentIndex ? 'var(--slider-dot)' : 'transparent',
                            borderColor: idx === currentIndex ? 'var(--slider-dot)' : 'var(--slider-dot)',
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Show All Button */}
            <Link
                href="/projects"
                className="mt-4 px-6 mb-5 py-2.5 rounded-[10px] border-2 font-bold text-sm transition-colors no-underline"
                style={{
                    borderColor: 'var(--project-showbtn-border)',
                    backgroundColor: 'var(--project-showbtn-bg)',
                    color: 'var(--project-showbtn-text)',
                }}
            >
                Show All Projects
            </Link>
        </section>
    );
}