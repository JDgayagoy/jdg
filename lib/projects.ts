export const PROJECTS = [
    {
        id: 1,
        title: "UtangPh",
        description: "Manage your personal debts and finances with ease with our comprehensive tracker.",
        image: "/images/utangph.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["React", "Next.js", "Tailwind", "Supabase"]
    },
    {
        id: 2,
        title: "CookMe",
        description: "A recipe sharing platform for food enthusiasts to discover and share culinary delights.",
        image: "/images/cookme.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"]
    },
    {
        id: 3,
        title: "Kicks",
        description: "Modern e-commerce platform for high-end sneakers with a seamless shopping experience.",
        image: "/images/mockup.png",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["React", "Framer Motion", "Stripe", "Tailwind"]
    },
    {
        id: 4,
        title: "NiceRice",
        description: "Restaurant management and ordering system designed for efficiency and speed.",
        image: "/images/nicerice.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["Vue.js", "Firebase", "TailwindCSS"]
    },
    {
        id: 5,
        title: "Self-Hosted n8n Automations",
        description: "Automating complex workflows with self-hosted n8n instances for maximum control.",
        image: "/images/selfhostn8n.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["n8n", "Docker", "Self-hosting", "Automation"]
    }
];

export type ProjectType = typeof PROJECTS[0];
