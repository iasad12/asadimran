"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPageContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", service: "", budget: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: "asadimran328@gmail.com",
            href: "mailto:asadimran328@gmail.com",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
            ),
            label: "WhatsApp",
            value: "+92 304 6769150",
            href: "https://api.whatsapp.com/send/?phone=923046769150&text=Greetings%2C+Are+you+available+for+a+project?",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: "Location",
            value: "Mianwali, Pakistan",
            href: null,
        },
    ];

    const socials = [
        { name: "LinkedIn", href: "https://pk.linkedin.com/in/iasad12" },
        { name: "Facebook", href: "https://www.facebook.com/iasad12" },
        { name: "Medium", href: "https://iasad12.medium.com/" },
        { name: "Fiverr", href: "https://www.fiverr.com/iasad12" },
    ];

    return (
        <>
            <PageHeader
                title="Get in Touch"
                description="Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
                breadcrumbs={[{ label: "Contact", href: "/contact" }]}
            />

            <section className="pt-4 md:pt-6 pb-20 md:pb-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

                            {isSubmitted ? (
                                <div className="bg-[#00ff9d]/10 border border-[#00ff9d] p-8 text-center">
                                    <svg className="w-16 h-16 text-[#00ff9d] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 mb-4">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[#00ff9d] hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#0f0529] border border-white/10 px-4 py-3 text-white focus:border-[#00ff9d] focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#0f0529] border border-white/10 px-4 py-3 text-white focus:border-[#00ff9d] focus:outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="service" className="block text-sm text-gray-400 mb-2">
                                                Service Interested In
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-[#0f0529] border border-white/10 px-4 py-3 text-white focus:border-[#00ff9d] focus:outline-none transition-colors"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="ai-tools">AI Web Apps & Tools</option>
                                                <option value="content">SEO-Optimized Content</option>
                                                <option value="wordpress">Elementor / WordPress</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm text-gray-400 mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full bg-[#0f0529] border border-white/10 px-4 py-3 text-white focus:border-[#00ff9d] focus:outline-none transition-colors"
                                            >
                                                <option value="">Select budget range</option>
                                                <option value="under-500">Under $500</option>
                                                <option value="500-1000">$500 - $1,000</option>
                                                <option value="1000-2500">$1,000 - $2,500</option>
                                                <option value="2500+">$2,500+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full bg-[#0f0529] border border-white/10 px-4 py-3 text-white focus:border-[#00ff9d] focus:outline-none transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#00ff9d] text-[#0a001f] py-4 font-bold uppercase hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-[#0f0529] border border-white/10">
                                        <div className="text-[#00ff9d]">{info.icon}</div>
                                        <div>
                                            <p className="text-gray-500 text-sm uppercase tracking-widest mb-1">
                                                {info.label}
                                            </p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    target={info.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="text-white hover:text-[#00ff9d] transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick WhatsApp */}
                            <div className="bg-[#00ff9d]/10 border border-[#00ff9d] p-6 mb-12">
                                <h3 className="text-white font-bold mb-3">Prefer WhatsApp?</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Get a faster response by messaging me directly on WhatsApp.
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=923046769150&text=Greetings%2C+Are+you+available+for+a+project?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#00ff9d] text-[#0a001f] px-6 py-3 font-bold uppercase hover:bg-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-white font-bold mb-4">Follow Me</h3>
                                <div className="flex flex-wrap gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-white/20 text-gray-400 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors text-sm uppercase tracking-widest"
                                        >
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map/Location Section */}
            <section className="py-24 bg-[#0f0529]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Based in Mianwali, Pakistan</h2>
                    <p className="text-gray-400 mb-8">Working remotely with clients worldwide</p>
                    <div className="bg-[#0a001f] border border-white/10 p-8 max-w-2xl mx-auto">
                        <div className="text-6xl mb-4">🌍</div>
                        <p className="text-gray-400">
                            Available for remote projects globally. Timezone: PKT (UTC+5)
                        </p>
                        <p className="text-[#00ff9d] mt-4 text-sm">
                            Typical response time: Within 24 hours
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}