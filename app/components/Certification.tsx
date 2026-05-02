"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const CERTIFICATIONS = [
    {
        title: "Civil Service Eligible Professional",
        issuer: "Passed Civil Service Examination - Professional Level",
        date: "March 2025",
        icon: <Image src="/images/cse.jpg" alt="CSE" width={48} height={48} className="object-cover" />,
        link: "#"
    },
    {
        title: "1st Runner up - ICT Competition: Web Design",
        issuer: "National level Web design competition at Echague, Isabela",
        date: "April 2025",
        icon: <Image src="/images/isue.png" alt="ISUE" width={48} height={48} className="object-cover" />,
        link: "#"
    },
    {
        title: "ICAST",
        issuer: "CSU & Yuvakshetra Institute of Management Studies, India",
        date: "February 2025",
        icon: <Image src="/images/csu.jpg" alt="CSU" width={48} height={48} className="object-cover" />,
        link: "#"
    }
];

export default function Certification() {
    return (
        <section className="relative py-12 px-4 w-full flex flex-col items-center">
            {/* Header */}
            <div className="w-full max-w-3xl flex flex-col items-start mb-4">
                <span className="text-[#8e9b42] text-[14px] font-jakarta">Paper of</span>
                <h2 className="font-semibold text-2xl text-[#454545] leading-relaxed tracking-wide -mt-2 mb-6">Certifications</h2>
            </div>

            {/* List */}
            <div className="w-full max-w-3xl flex flex-col">
                {CERTIFICATIONS.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 first:border-t py-3 border-b border-gray-200 hover:bg-gray-50/50 transition-all px-2 -mx-2 hover:scale-110 hover:bg-white"
                    >
                        {/* Icon/Logo Placeholder */}
                        <div className="w-8 h-8 rounded-sm bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            {cert.icon}
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col border-l border-gray-200 pl-4">
                            <h3 className="text-[12px] md:text-[16px] font-light text-[#454545] group-hover:text-blue-600 transition-colors leading-tight mt-1">
                                {cert.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[13px] md:text-[14px] text-gray-500 font-medium">
                                <span>@ {cert.issuer}</span>
                                <span className="text-gray-300">|</span>
                                <span>{cert.date}</span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-gray-300 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">
                            <ArrowUpRight size={20} />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}   