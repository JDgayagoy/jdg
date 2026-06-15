import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import ProjectList from "./ProjectList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "A showcase of John David Gayagoy's recent work — web applications, automation tools, and robotics projects.",
    openGraph: {
        title: "Projects | John David Gayagoy",
        description: "A showcase of John David Gayagoy's recent work — web applications, automation tools, and robotics projects.",
        url: "https://jdgayagoy.is-a.dev/projects",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects | John David Gayagoy",
        description: "A showcase of John David Gayagoy's recent work — web applications, automation tools, and robotics projects.",
    },
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--page-bg)' }}>
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 font-jakarta font-bold text-sm mb-6 hover:translate-x-[-4px] transition-transform" style={{ color: 'var(--accent)' }}>
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                    <span className="text-[14px] font-jakarta block mb-1" style={{ color: 'var(--accent)' }}>Portfolio</span>
                    <h1 className="font-semibold text-4xl tracking-tight leading-tight transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>Selected Projects</h1>
                </div>

                {/* Project List Wrapper */}
                <ProjectList projects={PROJECTS} />
            </main>
            <Footer />
        </div>
    );
}
