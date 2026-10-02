import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me - Asad Imran Shah",
    description: "Learn about Asad Imran Shah, a Vibe Coder and Content Writer blending English Literature with AI web development. Based in Mianwali, serving globally.",
    openGraph: {
        title: "About Me - Asad Imran Shah",
        description: "Learn about Asad Imran Shah, a Vibe Coder and Content Writer blending English Literature with AI web development. Based in Mianwali, serving globally.",
        type: "website",
    },
};

const skills = [
    { name: "AI Development", level: 90, category: "Development" },
    { name: "Vibe Coding", level: 95, category: "Development" },
    { name: "JavaScript/React", level: 85, category: "Development" },
    { name: "Next.js", level: 80, category: "Development" },
    { name: "SEO Writing", level: 95, category: "Content" },
    { name: "Content Strategy", level: 90, category: "Content" },
    { name: "Technical Writing", level: 85, category: "Content" },
    { name: "Keyword Research", level: 90, category: "Content" },
    { name: "Elementor", level: 90, category: "Web Design" },
    { name: "GenerateBlocks", level: 85, category: "Web Design" },
    { name: "WordPress", level: 90, category: "Web Design" },
    { name: "UI/UX Design", level: 75, category: "Web Design" },
];

const experiences = [
    {
        period: "Aug 2023 - Jan 2024",
        title: "Remote Content Writer",
        company: "NicheAffect",
        description: "Specialized in creating high-impact content for niches including Fishing, Camping, Hunting, and Home Improvement.",
        achievements: [
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
        description: "Personal Blog on English Literature. Self-taught Technical SEO and Web Design through this platform.",
        achievements: [
            "Conducting Research for Writing Content",
            "Technical SEO & Simple Website Design",
            "Community Management (Facebook & WhatsApp Groups)",
        ],
        current: true,
    },
];

const values = [
    {
        icon: "🎯",
        title: "Quality First",
        description: "Every project is treated with utmost care. I believe in delivering work that exceeds expectations.",
    },
    {
        icon: "⚡",
        title: "Innovation",
        description: "Constantly exploring new technologies and methodologies to provide cutting-edge solutions.",
    },
    {
        icon: "🤝",
        title: "Collaboration",
        description: "Working closely with clients to understand their vision and bring it to life effectively.",
    },
    {
        icon: "📈",
        title: "Results-Driven",
        description: "Focused on delivering measurable results that contribute to business growth.",
    },
];

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Me"
                description="A journey from English Literature scholar to AI-powered web developer and content strategist."
                breadcrumbs={[{ label: "About", href: "/about" }]}
            />

            {/* Bio Section */}
            <section className="pt-4 md:pt-6 pb-20 md:pb-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="w-full max-w-md mx-auto aspect-square relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9]/30 to-[#00ff9d]/20 rounded-2xl transform rotate-3" />
                                <img
                                    src="/images/profile.webp"
                                    alt="Asad Imran Shah"
                                    className="w-full h-full object-cover rounded-2xl relative z-10 border-2 border-[#00ff9d]/30"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <span className="text-[#00ff9d] text-sm uppercase tracking-widest mb-4 block">
                                The Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                                From Literature to Technology
                            </h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    I&apos;m Asad Imran Shah, a Vibe Coder and Content Writer based in Mianwali, Pakistan. My journey began with a deep love for English Literature, which I pursued academically. This foundation gave me a unique perspective on language, communication, and the power of words.
                                </p>
                                <p>
                                    In 2018, I started &ldquo;The Assimilators&rdquo; - a blog dedicated to helping literary aspirants. Through this platform, I self-taught myself web design, SEO, and eventually, web development. The curiosity to automate and enhance my workflow led me to explore AI-powered tools.
                                </p>
                                <p>
                                    Today, I blend the analytical precision of a literature scholar with the technical prowess of a modern web developer. I specialize in building AI-driven web applications using &ldquo;Vibe Coding&rdquo; - a methodology where AI assists in rapid development while maintaining code quality.
                                </p>
                                <p>
                                    With 300K+ words written across multiple niches and several AI tools built, I help businesses leverage the power of intelligent web solutions and high-converting content.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-[#00ff9d] text-[#0a001f] px-8 py-4 font-bold uppercase hover:bg-white transition-colors"
                                >
                                    Get in Touch
                                </Link>
                                <a
                                    href="https://drive.google.com/drive/folders/1711ZE81HnaUFZVMnObQYKVtG1yznRsZd?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white/20 text-white px-8 py-4 font-bold uppercase hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
                                >
                                    Work Samples
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#0f0529]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-12">
                        <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            Core Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-[#0a001f] p-6 border border-white/10 hover:border-[#00ff9d] transition-colors">
                                <span className="text-4xl mb-4 block">{value.icon}</span>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-12">
                        <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            Skills & Expertise
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-[#0f0529] p-6 border border-white/10">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-medium">{skill.name}</span>
                                    <span className="text-[#00ff9d] text-sm">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-[#6d28d9] to-[#00ff9d] h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                                <span className="text-gray-500 text-xs uppercase tracking-widest mt-2 block">
                                    {skill.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-24 bg-[#0f0529]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-12">
                        <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            Experience
                        </h2>
                    </div>

                    <div className="space-y-8 border-l border-white/20 ml-4 pl-8 max-w-3xl">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                <div className={`absolute -left-[37px] top-2 w-4 h-4 rounded-full ${exp.current ? "bg-[#00ff9d]" : "border-2 border-white bg-[#0f0529]"}`} />
                                <div className="text-sm text-[#00ff9d] mb-1 font-mono">{exp.period}</div>
                                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                <p className="text-gray-400 mb-2">{exp.company}</p>
                                <p className="text-gray-500 mb-4">{exp.description}</p>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                                            <span className="text-[#00ff9d]">◉</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-12">
                        <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            Education
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0f0529] p-8 border border-white/10">
                            <span className="text-[#00ff9d] text-sm uppercase tracking-widest mb-2 block">Post-Graduate</span>
                            <h3 className="text-xl font-bold text-white mb-2">English Linguistics</h3>
                            <p className="text-gray-400">M. Phil</p>
                            <p className="text-gray-500 text-sm mt-2">University of Mianwali</p>
                        </div>
                        <div className="bg-[#0f0529] p-8 border border-white/10">
                            <span className="text-[#00ff9d] text-sm uppercase tracking-widest mb-2 block">Graduate</span>
                            <h3 className="text-xl font-bold text-white mb-2">English Literature</h3>
                            <p className="text-gray-400">Master of Arts (MA)</p>
                            <p className="text-gray-500 text-sm mt-2">University of Sargodha</p>
                        </div>
                        <div className="bg-[#0f0529] p-8 border border-white/10">
                            <span className="text-[#00ff9d] text-sm uppercase tracking-widest mb-2 block">Self-Taught</span>
                            <h3 className="text-xl font-bold text-white mb-2">Web Development & AI</h3>
                            <p className="text-gray-400">Continuous Learning</p>
                            <p className="text-gray-500 text-sm mt-2">SEO, WordPress, React, Next.js, AI Integration through practical projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0f0529] text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Ready to bring your project to life? I&apos;m here to help.
                    </p>
                    <Link
                        href="/booking"
                        className="inline-block bg-[#00ff9d] text-[#0a001f] px-12 py-6 text-lg font-bold uppercase hover:bg-white transition-colors"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}
