"use client";

const experiences = [
    {
        period: "Aug 2023 - Jan 2024",
        title: "Remote Content Writer",
        company: "NicheAffect",
        description:
            "Specialized in creating high-impact content for niches including Fishing, Camping, Hunting, and Home Improvement.",
        highlights: [
            "Keyword Research & On-Page SEO Optimization",
            "Creation of Social Media Macros & Micro-Blog Articles",
            "Guest Posts for Link-Building campaigns",
        ],
        current: false,
    },
    {
        period: "2018 - Present",
        title: "Manager & Writer",
        company: "The Assimilators",
        description:
            "Personal Blog on English Literature. Self-taught Technical SEO and Web Design through this platform.",
        highlights: [
            "Conducting Research for Writing Content",
            "Technical SEO & Simple Website Design",
            "Community Management (Facebook & WhatsApp Groups)",
        ],
        current: true,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-16 reveal">
                    <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        Experience & Projects
                    </h2>
                </div>

                <div className="space-y-8 border-l border-white/20 ml-4 pl-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="reveal relative">
                            <div
                                className={`absolute -left-[37px] top-2 w-4 h-4 rounded-full ${exp.current
                                        ? "bg-[#00ff9d]"
                                        : "border-2 border-white bg-[#0a001f]"
                                    }`}
                            />

                            <div
                                className={`text-sm mb-1 font-mono ${exp.current ? "text-[#00ff9d]" : "text-gray-500"
                                    }`}
                            >
                                {exp.period}
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                {exp.title} | {exp.company}
                            </h3>

                            <div className="mt-4 text-gray-400 max-w-2xl">
                                <p className="mb-2">{exp.description}</p>
                                <ul className="list-disc list-inside text-sm text-gray-500 mt-2 space-y-1">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
