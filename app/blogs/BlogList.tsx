"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Blog } from "@/lib/blogs";
import Image from "next/image";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
    return (
        <div className="space-y-16">
            {blogs.map((blog, index) => (
                <motion.article
                    key={blog.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                >
                    <Link href={`/blogs/${blog.slug}`} className="block">
                        <div className="relative aspect-[16/9] w-full mb-6 overflow-hidden rounded-2xl bg-gray-100">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-bold text-[#454545] shadow-sm">
                                {blog.category}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-3 text-[13px] text-gray-500 font-jakarta font-medium">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} />
                                {blog.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} />
                                {blog.readTime}
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold text-[#454545] mb-3 group-hover:text-[#8e9b42] transition-colors duration-300">
                            {blog.title}
                        </h2>

                        <p className="text-gray-500 leading-relaxed mb-4 line-clamp-2">
                            {blog.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-[#8e9b42] font-bold text-sm group-hover:gap-3 transition-all duration-300">
                            Read Article <ArrowRight size={16} />
                        </div>
                    </Link>
                </motion.article>
            ))}
        </div>
    );
}
