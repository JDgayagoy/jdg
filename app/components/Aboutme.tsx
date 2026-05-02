"use client";

import { Coffee, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

export default function Aboutme() {
    const playSound = () => {
        const audio = new Audio('/sound/New_project.wav');
        audio.play().catch(e => console.error("Audio play failed:", e));
    };

    return (
        <section className="relative mt-15 h-auto w-full px-4 py-4 md:py-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-semibold text-3xl md:text-4xl lg:text-5xl text-[#454545] leading-relaxed tracking-tight"
            >
                John David Gayagoy
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="font-jakarta text-base md:text-xl font-light text-gray-400 leading-relaxed tracking-normal -mt-1"
            >
                FullStack Developer • UI/UX Designer • Robotics Enthusiast
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-3 mt-4"
            >
                <button
                    onClick={playSound}
                    className="relative flex items-center gap-2 cursor-pointer select-none active:translate-y-[3px] transition-all duration-75"
                    style={{
                        padding: "6px 12px",
                        color: "#ffffff",
                        background: "linear-gradient(160deg, #4a6ff5 0%, #2C53E8 100%)",
                        borderRadius: "12px",
                        boxShadow: `
                            0 1px 0 rgba(255,255,255,0.25) inset,
                            0 -1px 0 rgba(0,0,0,0.1) inset,
                            0 6px 0 #1a35a8,
                            0 7px 0 #122890,
                            0 10px 14px rgba(0,0,0,0.12)
                        `,
                        border: "1.5px solid #1f3fd4",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                    }}
                >
                    <Bookmark size={14} strokeWidth={2.5} /> Available for Hire
                </button>
                <h3 className="text-gray-400 font-bold">or</h3>
                <button
                    onClick={playSound}
                    className="relative flex items-center gap-2 cursor-pointer select-none active:translate-y-[3px] transition-all duration-75"
                    style={{
                        padding: "6px 12px",
                        color: "#0a4a17",
                        background: "linear-gradient(160deg, #5ef572 0%, #4AED60 100%)",
                        borderRadius: "12px",
                        boxShadow: `
                            0 1px 0 rgba(255,255,255,0.5) inset,
                            0 -1px 0 rgba(0,0,0,0.06) inset,
                            0 6px 0 #28a83d,
                            0 7px 0 #1f8f32,
                            0 10px 14px rgba(0,0,0,0.12)
                        `,
                        border: "1.5px solid #35c44d",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                    }}
                >
                    <Coffee size={14} strokeWidth={2.5} /> Email me
                </button>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="font-light text-lg md:text-xl text-gray-400 leading-relaxed tracking-wider mt-8"
            >
                I build apps, automate stuff, and occasionally fight bugs for a living.
            </motion.h2>

            {/* Horizontal lines */}
            <div className="absolute -top-[40%] left-0 h-[240%] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="absolute -top-[40%] right-0 h-[240%] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        </section >
    );
}