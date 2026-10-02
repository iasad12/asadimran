"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "AI Tools", "Mobile App", "Content", "Web Design", "Full Stack", "Web Tools"];

export default function ProjectShowcase() {
    const [activeCategory, setActiveCategory] = useState("All");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -180 : 180;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 bg-[#0a001f] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-12 reveal">
                    <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        Featured Projects
                    </h2>
                </div>

                {/* Filter Tabs */}
                <div className="relative mb-12 flex items-center justify-center">
                    {/* Left Arrow (Mobile only) */}
                    <button
                        onClick={() => handleScroll("left")}
                        aria-label="Previous categories"
                        className="md:hidden flex items-center justify-center w-9 h-9 border border-white/20 bg-[#0a001f] text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d] shrink-0 mr-2 transition-colors active:scale-95"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Scrollable on Mobile, Wrapped on Desktop */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto no-scrollbar scroll-smooth gap-3 py-1 md:flex-wrap md:justify-center md:gap-4 md:overflow-visible w-full md:w-auto"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`filter-tab px-5 py-2 text-xs md:text-sm uppercase tracking-widest border transition-all whitespace-nowrap shrink-0 md:shrink ${
                                    activeCategory === cat
                                        ? "active border-[#00ff9d] text-[#00ff9d]"
                                        : "border-white/20 text-gray-400 hover:border-white/40"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Right Arrow (Mobile only) */}
                    <button
                        onClick={() => handleScroll("right")}
                        aria-label="Next categories"
                        className="md:hidden flex items-center justify-center w-9 h-9 border border-white/20 bg-[#0a001f] text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d] shrink-0 ml-2 transition-colors active:scale-95"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {filteredProjects.slice(0, 6).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {filteredProjects.length > 6 && (
                    <div className="text-center mt-12">
                        <Link
                            href="/projects"
                            className="inline-block border border-[#00ff9d] text-[#00ff9d] px-8 py-4 font-bold uppercase hover:bg-[#00ff9d] hover:text-[#0a001f] transition-colors"
                        >
                            View All Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
