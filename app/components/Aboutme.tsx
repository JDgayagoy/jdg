"use client";

import { Coffee, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

export default function Aboutme() {
    const playSound = () => {
        const audio = new Audio('/sound/New_Project.wav');
        audio.play().catch(e => console.error("Audio play failed:", e));
    };

    return (
        <section className="relative mt-15 h-auto w-full px-4 py-4 md:py-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-tight transition-colors duration-300"
                style={{ color: 'var(--text-heading)' }}
            >
                John David Gayagoy
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="font-jakarta text-base md:text-xl font-light leading-relaxed tracking-normal -mt-1 transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
            >
                FullStack Developer • Automation Practitioner • Robotics Enthusiast
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-3 mt-4"
            >
                <a
                    href="https://linkedin.com/in/johndavidgayagoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playSound}
                    className="relative flex items-center gap-2 cursor-pointer select-none active:translate-y-[3px] transition-all duration-75 no-underline"
                    style={{
                        padding: "6px 12px",
                        color: "var(--btn-blue-text)",
                        background: `linear-gradient(160deg, var(--btn-blue-from) 0%, var(--btn-blue-to) 100%)`,
                        borderRadius: "12px",
                        boxShadow: `
                            0 1px 0 rgba(255,255,255,0.25) inset,
                            0 -1px 0 rgba(0,0,0,0.1) inset,
                            0 6px 0 var(--btn-blue-shadow1),
                            0 7px 0 var(--btn-blue-shadow2),
                            0 10px 14px rgba(0,0,0,0.12)
                        `,
                        border: `1.5px solid var(--btn-blue-border)`,
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                    }}
                >
                    <Bookmark size={14} strokeWidth={2.5} /> Available for Hire
                </a>
                <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>or</h3>
                <a
                    href="mailto:johndavidgayagoy@gmail.com"
                    onClick={playSound}
                    className="relative flex items-center gap-2 cursor-pointer select-none active:translate-y-[3px] transition-all duration-75 no-underline"
                    style={{
                        padding: "6px 12px",
                        color: "var(--btn-green-text)",
                        background: `linear-gradient(160deg, var(--btn-green-from) 0%, var(--btn-green-to) 100%)`,
                        borderRadius: "12px",
                        boxShadow: `
                            0 1px 0 rgba(255,255,255,0.5) inset,
                            0 -1px 0 rgba(0,0,0,0.06) inset,
                            0 6px 0 var(--btn-green-shadow1),
                            0 7px 0 var(--btn-green-shadow2),
                            0 10px 14px rgba(0,0,0,0.12)
                        `,
                        border: `1.5px solid var(--btn-green-border)`,
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                    }}
                >
                    <Coffee size={14} strokeWidth={2.5} /> Email me
                </a>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="font-light text-lg md:text-xl leading-relaxed tracking-wider mt-8 transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
            >
                I build apps, automate stuff, and occasionally fight bugs for a living.
            </motion.h2>

            {/* Horizontal lines */}
            <div className="absolute -top-[40%] left-0 h-[240%] w-px" style={{ background: `linear-gradient(to bottom, transparent, var(--border-divider), transparent)` }} />
            <div className="absolute -top-[40%] right-0 h-[240%] w-px" style={{ background: `linear-gradient(to bottom, transparent, var(--border-divider), transparent)` }} />
        </section >
    );
}