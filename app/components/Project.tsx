"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        id: 1,
        title: "UtangPh",
        description: "Manage your personal debts and finances with ease with our comprehensive tracker.",
        image: "/images/utangph.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["React", "Next.js", "Tailwind", "Supabase"]
    },
    {
        id: 2,
        title: "CookMe",
        description: "A recipe sharing platform for food enthusiasts to discover and share culinary delights.",
        image: "/images/cookme.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"]
    },
    {
        id: 3,
        title: "Kicks",
        description: "Modern e-commerce platform for high-end sneakers with a seamless shopping experience.",
        image: "/images/mockup.png",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["React", "Framer Motion", "Stripe", "Tailwind"]
    },
    {
        id: 4,
        title: "NiceRice",
        description: "Restaurant management and ordering system designed for efficiency and speed.",
        image: "/images/nicerice.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["Vue.js", "Firebase", "TailwindCSS"]
    },
    {
        id: 5,
        title: "Self-Hosted n8n Automations",
        description: "Automating complex workflows with self-hosted n8n instances for maximum control.",
        image: "/images/selfhostn8n.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["n8n", "Docker", "Self-hosting", "Automation"]
    }
];

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
        <section className="relative w-full px-4 flex flex-col items-center">
            {/* Header */}
            <div className="w-full max-w-3xl flex flex-col items-start mb-4">
                <span className="text-[#8e9b42] text-[14px] font-jakarta">Featured</span>
                <h2 className="font-semibold text-2xl text-[#454545] leading-relaxed tracking-wide -mt-2 mb-6">Projects</h2>
            </div>

            {/* Slider Container */}
            <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/10] rounded-[12px] overflow-hidden shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} transition-all duration-700`} />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />

                {/* Left/Right Buttons */}
                <button
                    onClick={prevProject}
                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md z-20 transition-all active:scale-95 text-gray-800"
                >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                </button>
                <button
                    onClick={nextProject}
                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md z-20 transition-all active:scale-95 text-gray-800"
                >
                    <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                {/* Inner Image Container */}
                <div className="group absolute inset-x-16 md:inset-x-32 top-14 md:top-20 bottom-14 md:bottom-20 rounded-xl overflow-hidden shadow-2xl bg-white border border-black/5">
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
                                <div className="absolute top-full left-0 w-full h-[88px] bg-white flex flex-col items-center justify-center border-t border-gray-100 transition-transform duration-300 ease-out group-hover:-translate-y-[88px] pointer-events-auto">
                                    <h4 className="text-[13px] font-semibold text-[#666] mb-2.5">Tech Stack</h4>
                                    <div className="flex flex-wrap justify-center gap-1.5 px-4">
                                        {currentProject.techStack.map(tech => (
                                            <span key={tech} className="px-2.5 py-0.5 border border-gray-300/80 rounded-md text-[11px] font-semibold text-[#888] shadow-sm">
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
                        className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${idx === currentIndex
                            ? "bg-[#8a8a8a] border-[#8a8a8a]"
                            : "bg-transparent border-[#8a8a8a] hover:border-[#6a6a6a]"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Show All Button */}
            <button className="mt-4 px-6 mb-5 py-2.5 rounded-[10px] border-2 border-gray-300/80 bg-gray-200/50 hover:bg-gray-300/50 text-[#888] font-bold text-sm transition-colors">
                Show All Projects
            </button>
        </section>
    );
}