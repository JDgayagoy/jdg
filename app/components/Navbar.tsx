"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, Volume2, VolumeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            if (!isMuted) {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isMuted]);

    useEffect(() => {
        const handleScroll = () => {
            // Hero section is approx 240px tall + 80px offset
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#FCFCFC]/70">
            {/* Fading bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/icon.webp"
                        alt="Arise Logo"
                        width={40}
                        height={40}
                        className={`rounded-full hover:opacity-80 transition-all duration-500 ease-out ${scrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'}`}
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 text-gray-500">
                    <li><a href="#" className="hover:text-gray-400 transition text-sm font-bold">blogs</a></li>
                    <li>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="hover:text-gray-400 transition cursor-pointer relative w-5 h-5 flex items-center justify-center"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isDark ? "moon" : "sun"}
                                    initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    {isDark ? <Moon size={19} /> : <Sun size={19} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="hover:text-gray-400 transition cursor-pointer relative w-5 h-5 flex items-center justify-center"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isMuted ? "volume-x" : "volume-2"}
                                    initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    {isMuted ? <VolumeOff size={19} /> : <Volume2 size={19} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </li>
                </ul>
            </div>
            <audio ref={audioRef} src="/sound/sound.wav" loop />
        </nav>
    );
}