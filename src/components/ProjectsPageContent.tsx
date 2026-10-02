"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "AI Tools", "Mobile App", "Content", "Web Design", "Full Stack", "Web Tools"];

export default function ProjectsPageContent() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <>
            <PageHeader
                title="Projects"
                description="A showcase of AI-powered tools, content writing projects, and web design work."
                breadcrumbs={[{ label: "Projects", href: "/projects" }]}
            />

            {/* Stats Bar */}
            <section className="py-8 bg-[#00ff9d] text-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
                        <div>
                            <p className="text-3xl font-bold">{projects.length}+</p>
                            <p className="text-sm uppercase tracking-widest">Projects</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">300K+</p>
                            <p className="text-sm uppercase tracking-widest">Words Written</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">5+</p>
                            <p className="text-sm uppercase tracking-widest">AI Tools Built</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">100%</p>
                            <p className="text-sm uppercase tracking-widest">Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter Note */}
            <section className="py-12 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 text-sm uppercase tracking-widest border transition-all ${activeCategory === cat
                                        ? "border-[#00ff9d] text-[#00ff9d]"
                                        : "border-white/20 text-gray-400 hover:border-white/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 pb-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0f0529] text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Let&apos;s build something amazing together. Whether it&apos;s an AI tool, content strategy, or a new website.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#00ff9d] text-[#0a001f] px-12 py-6 text-lg font-bold uppercase hover:bg-white transition-colors"
                    >
                        Start a Project →
                    </Link>
                </div>
            </section>
        </>
    );
}