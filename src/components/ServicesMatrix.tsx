"use client";

import { useState } from "react";

const services = [
    {
        id: "ai-web",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        title: "AI Web Apps & Tools",
        description:
            "Custom AI-powered web applications that automate workflows, enhance productivity, and solve complex problems. From thesis drafters to SEO audit tools.",
        features: [
            "Custom AI Integration",
            "Automated Workflows",
            "Data Visualization",
            "PDF/Doc Export",
        ],
        price: "$100",
        popular: false,
    },
    {
        id: "content",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
            </svg>
        ),
        title: "SEO-Optimized Content",
        description:
            "High-converting, keyword-rich content that ranks. 300K+ words written across fishing, camping, automotive, furniture, and tech niches.",
        features: [
            "Keyword Research",
            "On-Page SEO",
            "Blog Articles",
            "Product Descriptions",
        ],
        price: "$0.05/word",
        popular: true,
    },
    {
        id: "design",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
            </svg>
        ),
        title: "Elementor & GenerateBlocks",
        description:
            "Fast, responsive WordPress websites built with Elementor or GenerateBlocks. Landing pages that convert visitors into customers.",
        features: [
            "Custom Designs",
            "Mobile Optimized",
            "Speed Optimization",
            "CTA Integration",
        ],
        price: "$100",
        popular: false,
    },
];

export default function ServicesMatrix() {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    return (
        <section id="services" className="py-24 bg-[#0a001f]">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-16 reveal">
                    <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-card bg-[#0f0529] p-8 rounded-lg relative reveal ${service.popular ? "ring-1 ring-[#00ff9d]" : ""
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00ff9d] text-[#0a001f] px-4 py-1 text-xs font-bold uppercase rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-[#00ff9d] mb-6">{service.icon}</div>

                            <h3 className="text-2xl font-bold text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 mb-6 min-h-[80px]">
                                {service.description}
                            </p>

                            <ul className="space-y-2 mb-8">
                                {service.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-gray-500 flex items-center gap-2"
                                    >
                                        <span className="text-[#00ff9d]">◉</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">
                                        Starting from
                                    </p>
                                    <p className="text-2xl font-bold text-[#00ff9d]">
                                        {service.price}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setActiveModal(service.id)}
                                    className="text-white border-b border-[#00ff9d] pb-1 hover:text-[#00ff9d] transition-colors"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeModal && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        className="bg-[#0f0529] max-w-2xl w-full p-8 rounded-lg border border-white/10 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {services
                            .filter((s) => s.id === activeModal)
                            .map((service) => (
                                <div key={service.id}>
                                    <div className="text-[#00ff9d] mb-4">{service.icon}</div>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">{service.description}</p>

                                    <h4 className="text-white font-bold mb-4">What's Included:</h4>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="text-gray-400 flex items-center gap-3"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-[#00ff9d]"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href="#contact"
                                            className="btn-primary px-8 py-4"
                                            onClick={() => setActiveModal(null)}
                                        >
                                            Get Started
                                        </a>
                                        <span className="text-2xl font-bold text-[#00ff9d]">
                                            {service.price}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </section>
    );
}
