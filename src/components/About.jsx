import { motion } from "framer-motion"; // Import motion from framer-motion
import picture from "../assets/picture.jpg";
import Resume from "../assets/RESUME_JDgayagoy.pdf";
import '../index.css';

export default function About() {
    return (
        <section className="w-full h-auto z-1000 px-4 relative py-6">
            <div className="z-10 rounded-full w-18 h-18 sm:w-20 sm:h-20 md:w-20 md:h-20 absolute -top-8 sm:-top-10 left-5 bg-cover bg-center"
                style={{ backgroundImage: `url(${picture})` }}></div>
            <div className="absolute -top-4 sm:-top-6 md:left-28 left-23 w-auto text-center px-4 items-center">
                <h1 className="font-semibold relative -left-12 text-xl sm:text-2xl md:text-3xl">
                    Hey, I'm JD{" "}
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 10, -10, 0], // Subtle rotation angles for smooth waving
                            transition: {
                                duration: 1.2, // Slower wave for smoother effect
                                repeat: Infinity, // Keep repeating the wave animation
                                ease: "easeInOut", // Smooth easing for natural motion
                            },
                        }}
                    >
                        👋
                    </motion.span>
                </h1>
                <div className="flex items-center gap-2 mt-1 align-middle w-auto">
                    <div className="size-2 rounded-full bg-green-500"></div>
                    <a href={Resume} className="text-gray-400 text-center align-middle font-light text-[12px] sm:text-[12px] underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit">
                        Digital Marketing at Golden Suntech Solution Inc. 
                    </a>
                </div>
            </div>
        </section>
    );
}
