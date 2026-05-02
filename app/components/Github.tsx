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

    const getColor = (level: string) => {
        switch (level) {
            case 'NONE': return 'bg-gray-100';
            case 'FIRST_QUARTILE': return 'bg-gray-200';
            case 'SECOND_QUARTILE': return 'bg-gray-300';
            case 'THIRD_QUARTILE': return 'bg-gray-400';
            case 'FOURTH_QUARTILE': return 'bg-gray-500';
            default: return 'bg-gray-100';
        }
    };

    const flattenedContributions = useMemo(() => {
        if (!data) return [];
        return data.contributions.flat();
    }, [data]);

    return (
        <section className="relative py-4 px-4 w-full flex flex-col items-center">
            {/* Border Overlays */}
            <div className="absolute -top-[70%] left-0 h-[120%] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="absolute -top-[70%] right-0 h-[120%] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent pointer-events-none" />

            <div className="w-full max-w-3xl flex flex-col items-start mt-8">
                {/* Header */}
                <span className="text-[#8e9b42] text-[14px] font-jakarta">Contributions</span>
                <h2 className="font-semibold text-2xl text-[#454545] leading-relaxed tracking-wide -mt-2 mb-6">Github</h2>

                {/* Calendar Container */}
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar overflow-hidden">
                    <div className="min-w-[700px]">
                        {/* Months Labels */}
                        <div className="flex mb-2 text-[11px] text-[#8e9b42]/80 font-medium">
                            {months.map((month, i) => (
                                <div key={i} className="flex-1 text-center">{month}</div>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid grid-flow-col grid-rows-7 gap-1 h-[110px] overflow-hidden">
                            {loading ? (
                                // Skeleton loader
                                Array.from({ length: 364 }).map((_, i) => (
                                    <div key={i} className="w-[12px] h-[12px] rounded-xs bg-gray-50 animate-pulse" />
                                ))
                            ) : (
                                flattenedContributions.map((day, i) => (
                                    <div
                                        key={i}
                                        className={`w-[12px] h-[12px] rounded-xs ${getColor(day.contributionLevel)} transition-colors duration-300 hover:scale-110`}
                                        title={`${day.contributionCount} contributions on ${day.date}`}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                {!loading && data && (
                    <div className="w-full flex items-center justify-between mt-0 text-[13px] text-[#888] overflow-hidden">
                        <div>
                            {data.totalContributions} contributions in the last year on <a href="https://github.com/JDgayagoy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>.
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-1.5">
                            <span className="text-[11px]">Less</span>
                            <div className="flex gap-1">
                                {['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'].map(level => (
                                    <div key={level} className={`w-[10px] h-[10px] rounded-xs ${getColor(level)}`} />
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