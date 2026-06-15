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
                    <div className="relative aspect-[16/9] w-full mb-6 overflow-hidden rounded-2xl" style={{ backgroundColor: 'var(--surface-card)' }}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority={index === 0}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
                            {project.techStack.map((tech) => (
                                <span 
                                    key={tech} 
                                    className="backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold shadow-sm transition-colors duration-300"
                                    style={{ backgroundColor: 'var(--project-nav-bg)', color: 'var(--text-label)' }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-[13px] font-jakarta font-medium transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                        <span className="flex items-center gap-1.5 uppercase tracking-wider">
                            Project {project.id.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: 'var(--text-heading)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-heading)')}
                    >
                        {project.title}
                    </h2>

                    <p className="leading-relaxed mb-4 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                    </p>

                    {project.features && (
                        <div className="mb-6 space-y-2">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-label)' }}>Key Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="text-[13px] flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex items-center gap-6">
                        {project.website !== "#" && project.website !== "none" && (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all duration-300 no-underline"
                                style={{ color: 'var(--accent)' }}
                            >
                                Live Demo <Globe size={16} />
                            </a>
                        )}
                        {project.source !== "#" && project.source !== "private" && (
                            <a
                                href={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-bold text-sm transition-all duration-300 no-underline"
                                style={{ color: 'var(--text-secondary)' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                Source Code <ArrowRight size={16} />
                            </a>
                        )}
                    </div>
                </motion.article>
            ))}
        </div>
    );
}
