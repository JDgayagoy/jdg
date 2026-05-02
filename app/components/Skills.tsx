import { Bot, Network } from "lucide-react";

const skillsList = [
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
    { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
    { name: "Postgresql", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
    { name: "PrismaORM", icon: "https://cdn.simpleicons.org/prisma/000000" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
    { name: "Electron", icon: "https://cdn.simpleicons.org/electron" },
    { name: "Odoo", icon: "https://cdn.simpleicons.org/odoo" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
    { name: "C#", icon: "https://cdn.simpleicons.org/csharp" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab" },
    { name: "Machine Learning", icon: "bot" },
    { name: "Deep Learning", icon: "network" },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
    { name: "Numpy", icon: "https://cdn.simpleicons.org/numpy" },
    { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
    { name: "ThreeJS", icon: "https://cdn.simpleicons.org/threedotjs/000000" }
];

export default function Skills() {
    return (
        <div className="relative w-full min-h-[250px] py-4">
            <div className="px-4 flex flex-col">
                <h2 className="text-[14px] font-jakarta text-[#8e9b42] mb-1">Core</h2>
                <h1 className="font-semibold text-2xl text-[#454545] leading-relaxed tracking-wide -mt-2 mb-6">Skills</h1>

                <div className="flex flex-wrap gap-1 md:gap-2 w-full max-w-4xl">
                    {skillsList.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-1 px-2 py-1 rounded-md border border-dashed border-gray-400 bg-[#2a2a2a]/10"
                        >
                            {skill.icon === "bot" ? (
                                <Bot size={13} className="text-emerald-500" />
                            ) : skill.icon === "network" ? (
                                <Network size={13} className="text-emerald-500" />
                            ) : (
                                <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />
                            )}
                            <span className="text-[12px] font-bold text-[#888] font-sans">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute -top-[50%] left-0 h-[100%] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="absolute -top-[50%] right-0 h-[100%] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent pointer-events-none" />
        </div>
    )
}