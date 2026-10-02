"use client";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description:
            "We start with a deep dive into your business goals, target audience, and competitors. Together, we define the project scope and create a strategic roadmap.",
        deliverables: ["Project Brief", "Competitor Analysis", "Timeline"],
        duration: "1-2 days",
    },
    {
        number: "02",
        title: "AI-Enhanced Development",
        description:
            "Using cutting-edge AI tools and vibe coding techniques, I build your solution with precision. Regular check-ins ensure we stay aligned with your vision.",
        deliverables: ["Working Prototype", "Content Draft", "Design Mockups"],
        duration: "5-14 days",
    },
    {
        number: "03",
        title: "Launch & Optimize",
        description:
            "After thorough testing, we deploy your project. I provide post-launch support and analytics setup to ensure continued success and growth.",
        deliverables: ["Live Deployment", "Analytics Setup", "Support Period"],
        duration: "1-3 days",
    },
];

export default function ProcessTimeline() {
    return (
        <section className="py-24 bg-[#0f0529]">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-16 reveal">
                    <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        How I Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative reveal">
                            {/* Connector Line (hidden on last item and mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block timeline-connector" />
                            )}

                            <div className="bg-[#0a001f] p-8 border border-white/10 h-full">
                                <div className="text-6xl font-bold text-[#00ff9d]/20 mb-4 font-[family-name:var(--font-space-grotesk)]">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 mb-6">{step.description}</p>

                                <div className="mb-4">
                                    <p className="text-xs text-[#00ff9d] uppercase tracking-widest mb-2">
                                        Deliverables
                                    </p>
                                    <ul className="space-y-1">
                                        {step.deliverables.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-500">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4 text-[#00ff9d]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-gray-400">{step.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
