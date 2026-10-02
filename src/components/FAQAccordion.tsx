"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "I offer three main services: AI-powered web applications and tools, SEO-optimized content writing, and Elementor/GenerateBlocks website design. Each service can be customized to meet your specific needs.",
    },
    {
        question: "How much do your services cost?",
        answer:
            "Pricing varies based on project scope. AI tool development starts at $100, content writing at $0.05/word, and website design at $100. I offer free 15-minute consultations to provide accurate quotes for your specific project.",
    },
    {
        question: "What is your typical turnaround time?",
        answer:
            "Most projects are completed within 1-3 weeks. Simple landing pages or short content pieces can be delivered in 3-5 days. Complex AI tools may take 2-4 weeks. I'll provide a specific timeline during our initial consultation.",
    },
    {
        question: "What is 'Vibe Coding'?",
        answer:
            "Vibe coding is a modern approach to development that leverages AI assistance to create sophisticated applications. It combines human creativity with AI capabilities to build solutions faster while maintaining high quality and customization.",
    },
    {
        question: "Do you offer revisions?",
        answer:
            "Yes! All projects include 2 rounds of revisions at no extra cost. Additional revisions can be arranged at an hourly rate. I work collaboratively to ensure the final product meets your expectations.",
    },
    {
        question: "What niches have you written for?",
        answer:
            "I've written extensively for outdoor recreation (fishing, camping, hunting), automotive, home improvement, furniture, pets, and academia. My English Literature background helps me adapt to any niche quickly.",
    },
    {
        question: "How do we communicate during the project?",
        answer:
            "I primarily use WhatsApp and email for project communication. We'll have regular check-ins, and I provide progress updates at key milestones. You'll always know the status of your project.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "I accept payments via PayPal, Wise, and bank transfer. For larger projects, I typically require 50% upfront and 50% upon completion. Payment terms are flexible and can be discussed.",
    },
];

export default function FAQAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-[#0f0529]">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-12 reveal">
                    <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item border-b border-white/10 reveal ${activeIndex === index ? "active" : ""
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 flex items-center justify-between text-left"
                            >
                                <span className="text-lg font-semibold text-white pr-8">
                                    {faq.question}
                                </span>
                                <span className="faq-icon text-[#00ff9d] text-2xl flex-shrink-0">
                                    +
                                </span>
                            </button>

                            <div className="faq-content">
                                <p className="text-gray-400 pb-6 pr-12">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional CTA */}
                <div className="text-center mt-12 reveal">
                    <p className="text-gray-400 mb-4">Still have questions?</p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=923046769150&text=Hi%2C+I+have+a+question+about+your+services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#00ff9d] hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        Ask on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
