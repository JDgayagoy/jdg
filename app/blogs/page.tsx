import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogs } from "@/lib/blogs";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Thoughts, tutorials, and career stories from John David Gayagoy — FullStack Developer and Automation Practitioner based in the Philippines.",
  openGraph: {
    title: "Blogs | John David Gayagoy",
    description: "Thoughts, tutorials, and career stories from John David Gayagoy.",
    url: "https://jdgayagoy.is-a.dev/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | John David Gayagoy",
    description: "Thoughts, tutorials, and career stories from John David Gayagoy.",
  },
};

export default async function BlogsPage() {
    const blogs = await getBlogs();

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
                    <span className="text-[14px] font-jakarta block mb-1" style={{ color: 'var(--accent)' }}>My Thoughts</span>
                    <h1 className="font-semibold text-4xl tracking-tight leading-tight transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>Latest Blogs</h1>
                </div>

                {/* Blog List Wrapper */}
                <BlogList blogs={blogs} />
            </main>
            <Footer />
        </div>
    );
}
