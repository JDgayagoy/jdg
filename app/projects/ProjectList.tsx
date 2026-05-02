"use client";

import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import { ProjectType } from "@/lib/projects";
import Image from "next/image";

export default function ProjectList({ projects }: { projects: ProjectType[] }) {
    return (
        <div className="space-y-16">
            {projects.map((project, index) => (
                <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-[16/9] w-full mb-6 overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span 
                                    key={tech} 
                                    className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#454545] shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-[13px] text-gray-500 font-jakarta font-medium">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider">
                            Project {project.id.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#454545] mb-3 group-hover:text-[#8e9b42] transition-colors duration-300">
                        {project.title}
                    </h2>

                    <p className="text-gray-500 leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#8e9b42] font-bold text-sm group-hover:gap-3 transition-all duration-300 no-underline"
                        >
                            Live Demo <Globe size={16} />
                        </a>
                        <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 font-bold text-sm hover:text-[#8e9b42] transition-all duration-300 no-underline"
                        >
                            Source Code <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.article>
            ))}
        </div>
    );
}
