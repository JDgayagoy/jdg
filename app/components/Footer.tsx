"use client";

import Image from "next/image";

export default function Footer() {
    const playSound = () => {
        const audio = new Audio('/sound/New_Project.wav');
        audio.play().catch(e => console.error("Audio play failed:", e));
    };
    const socials = [
        {
            label: "LinkedIn",
            href: "https://linkedin.com/in/jdgayagoy",
            handle: "/in/jdgayagoy",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            label: "Twitter",
            href: "https://twitter.com/jdgayagoy",
            handle: "@jdgayagoy",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            label: "Github",
            href: "https://github.com/JDgayagoy",
            handle: "/jdgayagoy",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative w-full py-20 px-6 overflow-hidden flex flex-col items-center">
            {/* Background Big Text */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 select-none pointer-events-none">
            </div>

            <div className="relative z-10 w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start gap-12">
                {/* Left: Illustration/Image */}
                <div className="w-40 h-40 relative">
                    <Image
                        src="/images/icon.webp"
                        alt="Footer Icon"
                        fill
                        className="object-contain grayscale opacity-60"
                    />
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="hidden md:block w-px h-40 bg-gray-200 mt-4" />

                {/* Right: Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[#8e9b42] text-[14px] font-jakarta mb-2">Socials</span>

                    <div className="flex gap-4 mb-6">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 bg-gray-100 rounded-lg text-gray-500 hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-zinc-900 text-white text-[12px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0">
                                    {social.handle}
                                    {/* Tooltip Arrow */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-zinc-900" />
                                </div>

                                <div className="relative z-10">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </div>

                    <p className="text-[13px] md:text-[14px] text-gray-500 font-medium mb-4 opacity-50 leading-relaxed max-w-md">
                        Machine Learning Engineer <span className="text-gray-300 mx-1">•</span> FullStack Engineer <span className="text-gray-300 mx-1">•</span> Robotics Enthusiast
                    </p>

                    <button
                        onClick={playSound}
                        className="relative flex items-center gap-2 cursor-pointer select-none active:translate-y-[3px] transition-all duration-75 mb-10"
                        style={{
                            padding: "10px 16px",
                            color: "#4a1a00",
                            background: "linear-gradient(160deg, #fb923c 0%, #ea580c 100%)",
                            borderRadius: "14px",
                            boxShadow: `
                                0 1px 0 rgba(255,255,255,0.3) inset,
                                0 -1px 0 rgba(0,0,0,0.08) inset,
                                0 6px 0 #c2410c,
                                0 7px 0 #9a3412,
                                0 10px 14px rgba(0,0,0,0.12)
                            `,
                            border: "1.5px solid #f97316",
                            fontFamily: "Inter, system-ui, sans-serif",
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                        }}
                    >
                        Let's Talk!
                    </button>
                    <h1 className="absolute bottom-[-80%] left-1/2 -translate-x-1/2 text-[129px] font-black font-poppins tracking-tighter bg-gradient-to-b from-[#7e7e7e] to-white bg-clip-text text-transparent">JDGAYAGOY</h1>
                </div>
            </div>
        </footer>
    );
}
