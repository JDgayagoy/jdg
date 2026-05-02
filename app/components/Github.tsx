"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface ContributionDay {
    color: string;
    contributionCount: number;
    contributionLevel: string;
    date: string;
}

interface GitHubData {
    contributions: ContributionDay[][];
    totalContributions: number;
}

export default function Github() {
    const [data, setData] = useState<GitHubData | null>(null);
    const [loading, setLoading] = useState(true);
    const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://github-contributions-api.deno.dev/JDgayagoy.json');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch GitHub contributions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getColorVar = (level: string) => {
        switch (level) {
            case 'NONE': return 'var(--gh-none)';
            case 'FIRST_QUARTILE': return 'var(--gh-q1)';
            case 'SECOND_QUARTILE': return 'var(--gh-q2)';
            case 'THIRD_QUARTILE': return 'var(--gh-q3)';
            case 'FOURTH_QUARTILE': return 'var(--gh-q4)';
            default: return 'var(--gh-none)';
        }
    };

    const flattenedContributions = useMemo(() => {
        if (!data) return [];
        return data.contributions.flat();
    }, [data]);

    return (
        <section className="relative py-4 px-4 w-full flex flex-col items-center">
            {/* Border Overlays */}
            <div className="absolute -top-[70%] left-0 h-[120%] w-px" style={{ background: `linear-gradient(to bottom, transparent, var(--border-divider), transparent)` }} />
            <div className="absolute -top-[70%] right-0 h-[120%] w-px" style={{ background: `linear-gradient(to bottom, transparent, var(--border-divider), transparent)` }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px pointer-events-none" style={{ background: `linear-gradient(to right, transparent, var(--border-divider), transparent)` }} />

            <div className="w-full max-w-3xl flex flex-col items-start mt-8">
                {/* Header */}
                <span className="text-[14px] font-jakarta" style={{ color: 'var(--accent)' }}>Contributions</span>
                <h2 className="font-semibold text-2xl leading-relaxed tracking-wide -mt-2 mb-6 transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>Github</h2>

                {/* Calendar Container */}
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar overflow-hidden">
                    <div className="min-w-[700px]">
                        {/* Months Labels */}
                        <div className="flex mb-2 text-[11px] font-medium" style={{ color: 'var(--accent)', opacity: 0.8 }}>
                            {months.map((month, i) => (
                                <div key={i} className="flex-1 text-center">{month}</div>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid grid-flow-col grid-rows-7 gap-1 h-[110px] overflow-hidden">
                            {loading ? (
                                // Skeleton loader
                                Array.from({ length: 364 }).map((_, i) => (
                                    <div key={i} className="w-[12px] h-[12px] rounded-xs animate-pulse" style={{ backgroundColor: 'var(--gh-none)' }} />
                                ))
                            ) : (
                                flattenedContributions.map((day, i) => (
                                    <div
                                        key={i}
                                        className="w-[12px] h-[12px] rounded-xs transition-colors duration-300 hover:scale-110"
                                        style={{ backgroundColor: getColorVar(day.contributionLevel) }}
                                        title={`${day.contributionCount} contributions on ${day.date}`}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                {!loading && data && (
                    <div className="w-full flex items-center justify-between mt-0 text-[13px] overflow-hidden transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                        <div>
                            {data.totalContributions} contributions in the last year on <a href="https://github.com/JDgayagoy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>.
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-1.5">
                            <span className="text-[11px]">Less</span>
                            <div className="flex gap-1">
                                {['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'].map(level => (
                                    <div key={level} className="w-[10px] h-[10px] rounded-xs transition-colors duration-300" style={{ backgroundColor: getColorVar(level) }} />
                                ))}
                            </div>
                            <span className="text-[11px]">More</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}