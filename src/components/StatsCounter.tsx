"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 300, suffix: "K+", label: "Words Written" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
];

function AnimatedNumber({
    value,
    suffix,
    isVisible,
}: {
    value: number;
    suffix: string;
    isVisible: boolean;
}) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;
            setDisplayValue(Math.min(Math.floor(current), value));

            if (step >= steps) {
                clearInterval(timer);
                setDisplayValue(value);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <span>
            {displayValue}
            {suffix}
        </span>
    );
}

export default function StatsCounter() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Marquee Section */}
            <section className="py-12 bg-[#00ff9d] text-[#0a001f] overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee-content text-4xl md:text-6xl font-bold font-mono">
                        ELEMENTOR DESIGN ▀ GENERATEBLOCKS ▀ SEO AUDITS ▀ AI INTEGRATION ▀
                        CONTENT WRITING ▀ ELEMENTOR DESIGN ▀ GENERATEBLOCKS ▀ SEO AUDITS ▀
                        AI INTEGRATION ▀ CONTENT WRITING ▀
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                id="stats"
                ref={sectionRef}
                className="py-24 container mx-auto px-6"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="stat-card p-8 border border-white/10 reveal"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="stat-number text-5xl md:text-6xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                                <AnimatedNumber
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="text-white uppercase tracking-widest text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
