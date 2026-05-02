import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | jaydeegayagoy",
    description: "A showcase of my recent work, from web applications to automation tools.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Navigation & Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-zinc-900 transition-colors mb-8 group no-underline font-medium"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="flex flex-col gap-2">
                        <span className="text-[#8e9b42] text-[14px] font-jakarta font-medium tracking-wide">PORTFOLIO</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                            Selected Projects
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl mt-2 leading-relaxed">
                            A collection of my recent work in full-stack development, automation, and UI/UX design.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-0`} />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-0.5 bg-white border border-gray-200 rounded-full text-[11px] font-semibold text-gray-500 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[13px] font-bold text-zinc-600 hover:text-zinc-900 transition-colors no-underline"
                                    >
                                        <Globe size={16} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[13px] font-bold text-zinc-600 hover:text-zinc-900 transition-colors no-underline"
                                    >
                                        <Globe size={16} />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background elements to match the site style */}
            <div className="fixed top-0 left-1/4 w-px h-full bg-gray-50 -z-10" />
            <div className="fixed top-0 right-1/4 w-px h-full bg-gray-50 -z-10" />
        </main>
    );
}
