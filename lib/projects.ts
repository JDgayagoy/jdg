export interface ProjectType {
    id: number;
    title: string;
    description: string;
    features?: string[];
    image: string;
    gradient: string;
    website: string;
    source: string;
    techStack: string[];
    featured?: boolean;
}

export const PROJECTS: ProjectType[] = [
    {
        id: 1, // I'll handle IDs in a moment or just use unique ones
        title: "Toco",
        description: "A detective puzzle PWA where you interrogate an AI witness whose memory is deliberately limited by a visible token budget. Teaches AI context management skills.",
        features: [
            "AI Context Management: Strategically load facts into a limited token budget",
            "Detective Gameplay: Interrogate witnesses and summarize facts to save memory",
            "PWA Support: Fully installable with service worker and offline manifest",
            "Progressive Difficulty: Multiple cases from Easy to Hard with interactive tutorial"
        ],
        image: "/images/projects/toco.png",
        gradient: "from-purple-600 via-indigo-500 to-blue-400",
        website: "https://toco-game.vercel.app/",
        source: "https://github.com/Spod101/batilpatong",
        techStack: ["Vite", "JavaScript", "js-tiktoken", "IndexedDB", "PWA"]
    },
    {
        id: 2,
        title: "UtangPh",
        description: "Shared Expense Tracker. Track shared expenses and settle up with your roommates easily!",
        features: [
            "Member Management: Add and remove members",
            "Expense Tracking: Each member can add items they purchased",
            "Flexible Splitting: Choose who splits each expense",
            "Settlement Matrix: See who owes whom at a glance",
            "Mobile Responsive: Works great on all devices"
        ],
        image: "/images/projects/utangph.png",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "https://utangph.vercel.app/",
        source: "https://github.com/JDgayagoy/utangph",
        techStack: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Vercel", "GitHub Actions"]
    },
    {
        id: 3,
        title: "CookMe",
        featured: true,
        description: "AI Interview Prep Generator. An intelligent web application that helps you prepare for technical interviews by analyzing job descriptions and your resume.",
        features: [
            "Tech Stack Extraction: Automatically identifies core technologies from job postings",
            "Personalized Questions: Generates behavioral and situational questions",
            "Deep Technical Drills: Stack-specific conceptual questions",
            "Practical Coding Challenges: Real-world tasks you might face",
            "Export to PDF: Save your preparation guide for offline study"
        ],
        image: "/images/projects/cookme.png",
        gradient: "from-purple-600 via-indigo-500 to-blue-400",
        website: "https://cookme-orpin.vercel.app/",
        source: "https://github.com/JDgayagoy/CookMe",
        techStack: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Vercel", "GitHub Actions"]
    },
    {
        id: 4,
        title: "Kicks",
        description: "A mobile-based e-commerce app for sneakers enthusiasts. Features a modern shopping experience with high-end sneaker listings.",
        image: "/images/mockup.png",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "https://github.com/JDgayagoy/Kicks", // Using github as website if live is none
        source: "https://github.com/JDgayagoy/Kicks",
        techStack: ["Ionic/Angular", "Firebase", "GitHub", "NativeWind"]
    },
    {
        id: 5,
        title: "NiceRice",
        description: "An IOT-based automated rice drying machine with mobile app integration for small scale farmers, helping them monitor and control the drying process remotely.",
        image: "/images/nicerice.jpg",
        gradient: "from-orange-500 via-pink-500 to-indigo-600",
        website: "#",
        source: "#",
        techStack: ["C++", "Arduino", "Firebase", "Flutter", "Render"]
    },
    {
        id: 6,
        title: "Travel Ops",
        featured: true,
        description: "A SAAS built for Batanes travel agencies to manage their tours and reservations. Currently deployed to local agencies, streamlining their booking and operations.",
        image: "/images/projects/travelops.png",
        gradient: "from-purple-600 via-indigo-500 to-blue-400",
        website: "https://travel-operations-alpha.vercel.app/",
        source: "#",
        techStack: ["Laravel", "PHP", "MySQL", "TailwindCSS", "AlpineJS", "Livewire", "Vercel", "GitHub Actions"]
    },
    {
        id: 7,
        title: "DigiTalino",
        description: "A cross-platform digital literacy mobile application developed for the #DigiTalinong Cagayano extension project. DigiTalino helps users build digital media and information literacy skills while promoting responsible and ethical digital citizenship.",
        features: [
            "Interactive Learning Modules: Access educational content on digital literacy and responsible online behavior",
            "User Authentication: Secure account management and personalized learning progress",
            "Digital Media Literacy Training: Learn how to evaluate, verify, and use online information responsibly",
            "Cross-Platform Mobile Experience: Seamless support for both Android and iOS devices",
            "Community-Focused Education: Designed for youth, educators, senior citizens, and other community groups"
        ],
        image: "/images/projects/digitalino.png",
        gradient: "from-blue-500 via-cyan-500 to-emerald-500",
        website: "#", // replace if available
        source: "https://github.com/JDgayagoy/DigiTalino",
        techStack: [
            "React Native",
            "Expo",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB"
        ]
    },
    {
        id: 8,
        title: "Telehealth Pro",
        description: "A full-stack telemedicine platform that connects patients and healthcare providers through secure appointment scheduling, medical record management, and real-time video consultations.",
        image: "/images/projects/telehealth.png",
        gradient: "from-cyan-500 via-emerald-500 to-blue-600",
        website: "https://wc-telehealth-nu.vercel.app/", // replace if available
        source: "https://github.com/JDgayagoy/wc-telehealth", // replace if available
        techStack: [
            "Next.js 14",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Socket.io",
            "JWT",
            "Tailwind CSS",
            "Shadcn UI"
        ]
    },
    {
        id: 9,
        title: "Visit Batanes",
        featured: true,
        description: "A travel agency website showcasing the beauty, culture, and attractions of Batanes while helping travelers discover destinations, tour packages, and travel experiences.",
        features: [
            "Destination Showcase: Explore Batanes' iconic landscapes, attractions, and cultural landmarks",
            "Tour Package Listings: Browse curated travel packages and itineraries",
            "Responsive Design: Optimized experience across desktop, tablet, and mobile devices",
            "Inquiry & Booking System: Easily connect with travel agents for trip planning and reservations",
            "Photo Gallery: Immersive visuals highlighting the natural beauty of Batanes"
        ],
        image: "/images/projects/northernisland.png",
        gradient: "from-purple-600 via-indigo-500 to-blue-400",
        website: "#", // replace if available
        source: "#", // replace if available
        techStack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React",
            "Vercel"
        ]
    },
];
