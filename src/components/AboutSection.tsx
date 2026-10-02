"use client";

import { useState } from "react";

const skills = [
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "Python", level: 70 },
    { name: "Prompt Engineering", level: 95 },
    { name: "Elementor/WordPress", level: 90 },
    { name: "GenerateBlocks", level: 85 },
    { name: "Technical SEO", level: 90 },
    { name: "Content Strategy", level: 88 },
    { name: "AI Integration", level: 80 },
];

export default function AboutSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="py-24 bg-[#0f0529]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Bio Section */}
                    <div className="reveal">
                        <div className="flex items-center mb-8">
                            <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                                About Me
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-400">
                            <p className="text-lg">
                                I'm <span className="text-white font-semibold">Asad Imran Shah</span>,
                                a <span className="text-[#00ff9d]">Vibe Coder</span> and Content Writer
                                based in Mianwali, Pakistan. My journey began with a deep love for
                                English Literature, which evolved into a passion for technical SEO
                                and web development.
                            </p>

                            <div
                                className={`space-y-4 overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p>
                                    With over 5 years of experience, I've written 300K+ words across
                                    diverse niches—from outdoor recreation to automotive to academia.
                                    My self-taught technical journey has equipped me with unique skills
                                    in building AI-powered tools that solve real problems.
                                </p>

                                <p>
                                    I specialize in "vibe coding"—leveraging AI assistance to create
                                    sophisticated web applications while maintaining creative control.
                                    Whether it's a thesis drafting tool for students or an SEO audit
                                    application for agencies, I bring both technical precision and
                                    creative flair to every project.
                                </p>

                                <p>
                                    Beyond coding, I manage The Assimilators—a community platform for
                                    English Literature students—where I combine content creation with
                                    community management across Facebook and WhatsApp groups.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-[#00ff9d] hover:text-white transition-colors flex items-center gap-2 mt-4"
                            >
                                {isExpanded ? "Show Less" : "Read More"}
                                <svg
                                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="reveal">
                        <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">
                            Skills & Expertise
                        </h3>

                        <div className="space-y-6">
                            {skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">{skill.name}</span>
                                        <span className="text-[#00ff9d] text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="bg-[#0a001f] p-4 border border-white/10">
                                <p className="text-[#00ff9d] text-xs uppercase tracking-widest mb-1">
                                    Location
                                </p>
                                <p className="text-white">Mianwali, Pakistan</p>
                            </div>
                            <div className="bg-[#0a001f] p-4 border border-white/10">
                                <p className="text-[#00ff9d] text-xs uppercase tracking-widest mb-1">
                                    Availability
                                </p>
                                <p className="text-white">Open for Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
