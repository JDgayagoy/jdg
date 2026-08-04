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
    const WEEKS = 46; // try 48, 52, or 53

    const monthPositions = useMemo(() => {
        if (!data) return [];

        const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const flat = data.contributions.flat().slice(-WEEKS * 7);

        const positions: { label: string; col: number }[] = [];
        let lastMonth = -1;

        for (let col = 0; col < WEEKS; col++) {
            const day = flat[col * 7];
            if (!day) break;

            const month = parseInt(day.date.slice(5, 7), 10) - 1;

            if (col === 0) {
                positions.push({ label: names[month], col: 0 });
                lastMonth = month;
                continue;
            }

            if (month !== lastMonth) {
                positions.push({ label: names[month], col });
                lastMonth = month;
            }
        }

        return positions;
    }, [data]);

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

    // Last 26 weeks (≈6 months), keeping only complete weeks from the end
    const recentContributions = useMemo(() => {
        if (!data) return [];
        return data.contributions.flat().slice(-WEEKS * 7);
    }, [data]);

    return (
        <section className="relative py-4 px-4 w-full flex flex-col items-center">
            <div className="absolute -top-[70%] left-0 h-[120%] w-px" style={{ background: `linear-gradient(to bottom, transparent, var(--border-divider), transparent)` }} />
            <div className="absolute -top-[70%] right-0 h-[120%] w-px" style={{ background: `linear-gradient(to bottom, transparent, var(--border-divider), transparent)` }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px pointer-events-none" style={{ background: `linear-gradient(to right, transparent, var(--border-divider), transparent)` }} />

            <div className="w-full max-w-3xl flex flex-col items-start mt-8">
                <span className="text-[14px] font-jakarta" style={{ color: 'var(--accent)' }}>Contributions</span>
                <h2 className="font-semibold text-2xl leading-relaxed tracking-wide -mt-2 mb-6 transition-colors duration-300" style={{ color: 'var(--text-heading)' }}>Github</h2>

                <div className="w-full overflow-x-auto no-scrollbar">
                    <div className="w-full">
                        {/* Month labels */}
                        <div
                            className="grid mb-2 text-[11px] font-medium"
                            style={{
                                gridTemplateColumns: `repeat(${WEEKS}, 12px)`,
                                columnGap: '4px',
                                color: 'var(--accent)',
                                opacity: 0.8,
                            }}
                        >
                            {monthPositions.map(({ label, col }) => (
                                <div
                                    key={col}
                                    className="whitespace-nowrap"
                                    style={{
                                        gridColumnStart: col + 1,
                                    }}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* Grid */}
                        <div
                            className="grid grid-flow-col grid-rows-7 gap-1 h-[110px]"
                            style={{
                                gridTemplateColumns: `repeat(${WEEKS}, 12px)`,
                            }}
                        >
                            {loading ? (
                                Array.from({ length: WEEKS * 7 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[12px] h-[12px] rounded-xs animate-pulse"
                                        style={{ backgroundColor: 'var(--gh-none)' }}
                                    />
                                ))
                            ) : (
                                recentContributions.map((day, i) => (
                                    <div
                                        key={i}
                                        className="w-[12px] h-[12px] rounded-xs transition-colors duration-300 hover:scale-110"
                                        style={{
                                            backgroundColor: getColorVar(day.contributionLevel),
                                        }}
                                        title={`${day.contributionCount} contributions on ${day.date}`}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {!loading && data && (
                    <div className="w-full flex items-center justify-between mt-2 text-[13px] transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                        <div>
                            {data.totalContributions} contributions in the last year on <a href="https://github.com/JDgayagoy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>.
                        </div>
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
