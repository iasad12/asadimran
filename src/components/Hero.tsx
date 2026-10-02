"use client";

import { useEffect, useRef } from "react";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://pk.linkedin.com/in/iasad12",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/iasad12",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/923046769150",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
        ),
    },
    {
        name: "Medium",
        href: "https://iasad12.medium.com/",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.39-2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
        ),
    },
];

export default function Hero() {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Create particles
        if (particlesRef.current) {
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement("div");
                particle.className = "particle";
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 15}s`;
                particle.style.animationDuration = `${15 + Math.random() * 10}s`;
                particlesRef.current.appendChild(particle);
            }
        }

        // Reveal animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            className="min-h-[calc(100vh-6rem)] flex items-center justify-center relative px-6 pt-4 md:pt-0 overflow-hidden"
        >
            {/* Particle Background */}
            <div ref={particlesRef} className="particles" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a001f] via-[#0a001f] to-[#1a0a3f] opacity-80" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="order-1 md:order-1 reveal text-left">
                    <p className="text-[#00ff9d] mb-4 tracking-widest text-sm uppercase font-bold">
                        AI Dev & Content Writer
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white font-[family-name:var(--font-space-grotesk)]">
                        Helping Businesses Go Digital{" "}
                        <span className="text-[#00ff9d]">in Days</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                        I use AI not as a shortcut but as a tool to build you the online presence that will boost your visibility in search and in context-specific AI answers, with content that will help you achieve your business goals. Ideas don't have to sit locked in a drawer; let's realize them with AI. 
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2"
                        >
                            Start Project
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                        <a
                            href="#projects"
                            className="btn-outline px-8 py-4 text-lg rounded-none"
                        >
                            View Portfolio
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6 items-center justify-center md:justify-start">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="hover:text-[#00ff9d] transition transform hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 md:order-2 hidden md:flex justify-center reveal">
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                        <img
                            src="/images/profile.webp"
                            alt="Asad Imran Shah"
                            className="hero-img w-full h-full border-2 border-[#00ff9d]/30 shadow-[0_0_30px_rgba(0,255,157,0.2)]"
                        />
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#00ff9d]/20 rounded-full animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#00ff9d]/20 rounded-full animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Decorative Background Text */}
            <div className="absolute top-1/2 left-0 w-full -z-10 opacity-5 pointer-events-none overflow-hidden">
                <h1 className="text-[10rem] md:text-[20rem] font-bold whitespace-nowrap font-[family-name:var(--font-space-grotesk)]">
                    DEVELOPER
                </h1>
            </div>
        </section>
    );
}
