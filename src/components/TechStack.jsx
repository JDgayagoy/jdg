import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const techItems = document.querySelectorAll(".motion-div");
    techItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.classList.add("custom-cursor-hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("custom-cursor-hover");
      });
    });

    return () => {
      techItems.forEach((item) => {
        item.removeEventListener("mouseenter", () => {
          cursor.classList.add("custom-cursor-hover");
        });
        item.removeEventListener("mouseleave", () => {
          cursor.classList.remove("custom-cursor-hover");
        });
      });
    };
  }, []);

  const techs = [
    { name: "Flutter", icon: "devicon-flutter-plain", foreground: "#4ED2E4" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original", foreground: "#6EEAFB" },
    { name: "HTML", icon: "devicon-html5-plain", foreground: "#EB2106" },
    { name: "JavaScript", icon: "devicon-javascript-plain", foreground: "#EFD301" },
    { name: "C#", icon: "devicon-csharp-plain", foreground: "#540163" },
    { name: "C++", icon: "devicon-cplusplus-plain", foreground: "#49A0FD" },
    { name: "Python", icon: "devicon-python-plain", foreground: "#EFD301" },
    { name: "React", icon: "devicon-react-original", foreground: "#4ED2E4" },
    { name: "Firebase", icon: "devicon-firebase-plain", foreground: "#FE9900" },
    { name: "React", icon: "devicon-dot-net-plain", foreground: "#9A0EC2" },
    { name: "Python", icon: "devicon-laravel-original", foreground: "#E4080A" },
    { name: "React", icon: "devicon-typescript-plain", foreground: "#49A0FD" },
  ];

  // Define motion variants for each tech item (including staggered delay)
  const techItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="flex flex-wrap justify-center gap-3 mt-8 mb-30 px-4 sm:max-w-full md:min-w-[60%] lg:min-w-[35%] md:max-w-[35%] mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 }, // Stagger the children with a 0.2s delay
        },
      }}
    >
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          className="motion-div flex flex-col items-center justify-center gap-1.5 w-20 h-19 sm:w-20 sm:h-15 border border-[#252525] p-4 rounded-[10px]"
          variants={techItemVariants}
          whileHover={{
            scale: 1.05,
            backdropFilter: "blur(4px)",
            backgroundColor: "#252525",
            cursor: "none",
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.2 },
          }}
          onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
          onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
        >
          <motion.i
            className={`${tech.icon} text-xl sm:text-xl text-[#ffffff] transition-colors duration-300`}
            style={{
              color: hoveredIndex === index ? tech.foreground : "white", // Change color when hovered
            }}
            transition={{ duration: 0.3 }}
          ></motion.i>
          <motion.p
            className="text-[10px] sm:text-[10px] text-[#868686] transition-colors duration-300 hidden"
            whileHover={{ color: "#FFFFFF" }}
            transition={{ duration: 0.3 }}
          >
            {tech.name}
          </motion.p>
        </motion.div>
      ))}
    </motion.section>
  );
}
