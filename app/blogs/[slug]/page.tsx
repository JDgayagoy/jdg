import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    return {
        title: blog ? `${blog.title} | jaydeegayagoy` : "Blog | jaydeegayagoy",
        description: blog?.excerpt || "Read my latest blog posts.",
    };
}
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogBySlug } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#FCFCFC] font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">
                <Link href="/blogs" className="inline-flex items-center gap-2 text-[#8e9b42] font-jakarta font-bold text-sm mb-8 hover:translate-x-[-4px] transition-transform">
                    <ArrowLeft size={16} />
                    Back to Blogs
                </Link>

                <article>
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-4 text-[13px] text-gray-500 font-jakarta font-medium">
                            <span className="bg-zinc-100 px-3 py-1 rounded-full text-[#454545] font-bold">
                                {blog.category}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} />
                                {blog.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} />
                                {blog.readTime}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#454545] leading-tight tracking-tight mb-8">
                            {blog.title}
                        </h1>
                    </header>

                    <div className="prose prose-zinc prose-lg max-w-none prose-headings:text-[#454545] prose-headings:font-bold prose-p:text-gray-600 prose-a:text-[#8e9b42] prose-strong:text-[#454545] prose-code:text-[#8e9b42] prose-pre:bg-zinc-900 prose-pre:rounded-2xl prose-img:rounded-2xl">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {blog.content}
                        </ReactMarkdown>
                    </div>
                </article>

                <div className="mt-20 pt-10 border-t border-gray-100">
                    <h3 className="text-xl font-bold text-[#454545] mb-6">Enjoyed this article?</h3>
                    <div className="p-8 rounded-3xl bg-zinc-100/50 border border-zinc-200/50 flex flex-col items-center text-center">
                        <p className="text-gray-500 mb-8 max-w-md">Subscribe to my newsletter to get more articles like this.</p>
                        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-grow px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8e9b42]/20 focus:border-[#8e9b42] transition-all bg-white"
                            />
                            <button className="px-8 py-3 rounded-xl bg-[#454545] text-white font-bold hover:bg-[#333] transition-colors shadow-lg shadow-black/5">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
