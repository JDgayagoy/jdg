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
                <span className="text-[14px] font-jakarta" style={{ color: 'var(--accent)' }}>Paper of</span>
                <h2 className="font-semibold text-2xl leading-relaxed tracking-wide -mt-2 mb-6 transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>Certifications</h2>
            </div>

            {/* List */}
            <div className="w-full max-w-3xl flex flex-col">
                {CERTIFICATIONS.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 first:border-t py-3 border-b transition-all px-2 -mx-2 hover:scale-110"
                        style={{ borderColor: 'var(--cert-border)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--cert-hover-bg)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                        {/* Icon/Logo Placeholder */}
                        <div className="w-8 h-8 rounded-sm border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--cert-icon-bg)', borderColor: 'var(--cert-icon-border)' }}>
                            {cert.icon}
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col border-l pl-4" style={{ borderColor: 'var(--cert-info-border)' }}>
                            <h3 className="text-[12px] md:text-[16px] font-light group-hover:text-blue-600 transition-colors leading-tight mt-1" style={{ color: 'var(--text-label)' }}>
                                {cert.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[13px] md:text-[14px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                                <span>@ {cert.issuer}</span>
                                <span style={{ color: 'var(--cert-arrow)' }}>|</span>
                                <span>{cert.date}</span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: 'var(--cert-arrow)' }}>
                            <ArrowUpRight size={20} />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}   