import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogs } from "@/lib/blogs";
import BlogList from "./BlogList";

export default async function BlogsPage() {
    const blogs = await getBlogs();

    return (
        <div className="flex flex-col min-h-screen bg-[#FCFCFC] font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#8e9b42] font-jakarta font-bold text-sm mb-6 hover:translate-x-[-4px] transition-transform">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                    <span className="text-[#8e9b42] text-[14px] font-jakarta block mb-1">My Thoughts</span>
                    <h1 className="font-semibold text-4xl text-[#454545] tracking-tight leading-tight">Latest Blogs</h1>
                </div>

                {/* Blog List Wrapper */}
                <BlogList blogs={blogs} />
            </main>

            <Footer />
        </div>
    );
}
