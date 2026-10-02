"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isHovered && project.images.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
            }, 2000); // Change slide every 2 seconds
        } else {
            setCurrentImageIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, project.images.length]);

    const hasLink = !!project.link;

    return (
        <div
            className="bg-[#0f0529] border border-white/10 overflow-hidden group hover:border-[#00ff9d] transition-all duration-300 relative flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/projects/${project.id}`} className="absolute inset-0 z-0" aria-label={`View details for ${project.title}`} />
            
            {/* Image Carousel */}
            <div className="h-48 bg-gradient-to-br from-[#6d28d9]/30 to-[#00ff9d]/10 overflow-hidden relative pointer-events-none">
                {project.images.length > 0 ? (
                    <div className="w-full h-full relative">
                        {project.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`${project.title} - Slide ${i + 1}`}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${i === currentImageIndex ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#00ff9d]/30">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                )}

                <div className="absolute top-4 right-4 text-white/20 text-4xl font-bold group-hover:text-[#00ff9d] transition-colors z-10 drop-shadow-md">
                    {String(index + 1).padStart(2, "0")}
                </div>

                <span className="absolute top-4 left-4 bg-[#00ff9d] text-[#0a001f] text-xs uppercase tracking-widest px-3 py-1 font-bold z-10">
                    {project.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-500 font-mono mb-8">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <li key={i}>◉ {tag}</li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-auto pointer-events-auto relative z-10">
                    <Link
                        href={`/projects/${project.id}`}
                        className="inline-block text-white border-b border-[#00ff9d] pb-1 hover:text-[#00ff9d] transition-colors"
                    >
                        View Details
                    </Link>
                    {hasLink && (
                        <a
                            href={project.link!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400 border-b border-gray-600 pb-1 hover:text-white hover:border-white transition-colors"
                        >
                            Demo ↗
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400 border-b border-gray-600 pb-1 hover:text-white hover:border-white transition-colors"
                        >
                            Github ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
