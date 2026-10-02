import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Asad Imran Shah",
    description: "Professional services including AI Web Apps, SEO-Optimized Content, and Elementor/GenerateBlocks WordPress Design. High-quality solutions for your business.",
    openGraph: {
        title: "Services - Asad Imran Shah",
        description: "Professional services including AI Web Apps, SEO-Optimized Content, and Elementor/GenerateBlocks WordPress Design. High-quality solutions for your business.",
        type: "website",
    },
};

const services = [
    {
        id: "ai-web",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "AI Web Apps & Tools",
        tagline: "Custom AI-Powered Solutions",
        description: "Transform your ideas into intelligent web applications. I specialize in building custom AI-powered tools that automate workflows, enhance productivity, and solve complex problems using the latest in AI technology.",
        features: [
            "Custom AI Integration (OpenAI, Claude, Gemini)",
            "Automated Workflow Solutions",
            "Interactive Data Visualization",
            "PDF/Document Generation & Export",
            "LocalStorage & Database Integration",
            "Real-time Processing & Analysis",
        ],
        examples: [
            "The Assimilators AI - Question generation for literary aspirants",
            "Simple SEO Audit Tool - Sitemap & meta analysis",
            "AI Thesis Drafter - Academic document generation",
            "WhatsApp Chat Exporter - Data visualization & PDF export",
        ],
        price: "$100",
        priceNote: "Starting price for basic AI tools",
    },
    {
        id: "content",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        title: "SEO-Optimized Content",
        tagline: "Content That Ranks & Converts",
        description: "High-quality, keyword-rich content that drives organic traffic and converts visitors into customers. With 300K+ words written across multiple niches, I deliver content that ranks.",
        features: [
            "In-depth Keyword Research",
            "On-Page SEO Optimization",
            "Long-form Blog Articles (2000+ words)",
            "Product Descriptions & Reviews",
            "Guest Posts for Link Building",
            "Social Media Content",
        ],
        examples: [
            "Fishing & Outdoor Recreation content",
            "Camping & Hiking guides",
            "Automotive & Mechanics articles",
            "Home Improvement & Furniture",
        ],
        price: "$0.05/word",
        priceNote: "Volume discounts available for 10k+ words",
    },
    {
        id: "design",
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: "Elementor & GenerateBlocks",
        tagline: "High-Converting WordPress Sites",
        description: "Fast, responsive WordPress websites built with Elementor or GenerateBlocks. Landing pages designed to convert visitors into customers with modern aesthetics and optimized performance.",
        features: [
            "Custom WordPress Theme Design",
            "Mobile-First Responsive Layouts",
            "Speed & Performance Optimization",
            "Strategic CTA Placement",
            "Contact Form Integration",
            "Basic SEO Setup",
        ],
        examples: [
            "Business Landing Pages",
            "Portfolio Websites",
            "Blog Setup & Design",
            "E-commerce Product Pages",
        ],
        price: "$100",
        priceNote: "Starting price for single-page designs",
    },
];

const faqs = [
    {
        question: "How long does a typical AI web app project take?",
        answer: "Most AI-powered web applications take 2-4 weeks to complete, depending on complexity. Simple tools can be delivered in 1 week, while more complex applications may take 6+ weeks.",
    },
    {
        question: "Do you offer revisions with your content writing?",
        answer: "Yes! All content packages include 2 rounds of revisions. I work closely with clients to ensure the content meets their expectations and goals.",
    },
    {
        question: "What CMS do you build WordPress sites on?",
        answer: "I primarily use Elementor Pro or GenerateBlocks with GeneratePress theme for optimal performance. Both options offer excellent flexibility and speed.",
    },
    {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes, I offer maintenance packages for all services. This includes updates, security monitoring, content updates, and technical support.",
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Services"
                description="From AI-powered web applications to SEO-optimized content, I deliver solutions that drive results."
                breadcrumbs={[{ label: "Services", href: "/services" }]}
            />

            {/* Services Grid */}
            <section className="pt-4 md:pt-6 pb-20 md:pb-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                                    <div className="text-[#00ff9d] mb-6">{service.icon}</div>
                                    <span className="text-[#00ff9d] text-sm uppercase tracking-widest mb-2 block">
                                        {service.tagline}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex items-end gap-4 mb-8">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase mb-1">Starting from</p>
                                            <p className="text-4xl font-bold text-[#00ff9d]">{service.price}</p>
                                        </div>
                                        <p className="text-sm text-gray-500 pb-1">{service.priceNote}</p>
                                    </div>

                                    <Link
                                        href="/booking"
                                        className="inline-block bg-[#00ff9d] text-[#0a001f] px-8 py-4 font-bold uppercase hover:bg-white transition-colors"
                                    >
                                        Book Consultation →
                                    </Link>
                                </div>

                                {/* Features Card */}
                                <div className={`bg-[#0f0529] p-8 rounded-lg border border-white/10 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                                    <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                                        What&apos;s Included
                                    </h3>
                                    <ul className="space-y-4 mb-8">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400">
                                                <svg className="w-5 h-5 text-[#00ff9d] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">
                                        Previous Work
                                    </h3>
                                    <ul className="space-y-2">
                                        {service.examples.map((example, i) => (
                                            <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                                                <span className="text-[#00ff9d]">◉</span>
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#0f0529]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-12">
                        <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-[#0a001f] p-6 border border-white/10 rounded-lg">
                                <h3 className="text-white font-bold mb-3">{faq.question}</h3>
                                <p className="text-gray-400 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0a001f] text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
                        Ready to Start?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Let&apos;s discuss your project and find the perfect solution for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/booking"
                            className="bg-[#00ff9d] text-[#0a001f] px-12 py-6 text-lg font-bold uppercase hover:bg-white transition-colors"
                        >
                            Book a Call
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-white/20 text-white px-12 py-6 text-lg font-bold uppercase hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
                        >
                            Send Message
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
