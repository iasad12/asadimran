import PageHeader from "@/components/PageHeader";
import BookingEmbed from "@/components/BookingEmbed";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Consultation - Asad Imran Shah",
    description: "Schedule a free 30-minute discovery call with Asad Imran Shah. Discuss your AI web app, content strategy, or WordPress project needs today.",
    openGraph: {
        title: "Book a Consultation - Asad Imran Shah",
        description: "Schedule a free 30-minute discovery call with Asad Imran Shah. Discuss your AI web app, content strategy, or WordPress project needs today.",
        type: "website",
    },
};

const process = [
    {
        step: "01",
        title: "Book a Call",
        description: "Select a convenient time slot and briefly describe your project needs.",
    },
    {
        step: "02",
        title: "Discovery Call",
        description: "We'll discuss your goals, requirements, timeline, and budget in detail.",
    },
    {
        step: "03",
        title: "Proposal",
        description: "Receive a detailed proposal with scope, timeline, and pricing within 48 hours.",
    },
    {
        step: "04",
        title: "Kick-off",
        description: "Once approved, we start working on your project with regular updates.",
    },
];

export default function BookingPage() {
    return (
        <>
            <PageHeader
                title="Book a Consultation"
                description="Schedule a free 30-minute discovery call to discuss your project requirements and how I can help."
                breadcrumbs={[{ label: "Booking", href: "/booking" }]}
            />

            {/* Process Steps */}
            <section className="py-16 bg-[#0f0529]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <div key={index} className="relative">
                                {/* Connector Line */}
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-white/10" />
                                )}
                                <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 bg-[#00ff9d] text-[#0a001f] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Embed Section */}
            <section className="py-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <BookingEmbed />
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="py-24 bg-[#0f0529]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-12">
                        <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            What to Expect
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        <div className="bg-[#0a001f] p-6 border border-white/10">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#00ff9d]">✓</span>
                                Free 30-Minute Call
                            </h3>
                            <p className="text-gray-400 text-sm">
                                No obligation consultation to understand your needs and explore how we can work together.
                            </p>
                        </div>
                        <div className="bg-[#0a001f] p-6 border border-white/10">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#00ff9d]">✓</span>
                                Project Assessment
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Get an honest assessment of your project scope, feasibility, and recommended approach.
                            </p>
                        </div>
                        <div className="bg-[#0a001f] p-6 border border-white/10">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#00ff9d]">✓</span>
                                Custom Proposal
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Receive a detailed proposal within 48 hours with clear deliverables and pricing.
                            </p>
                        </div>
                        <div className="bg-[#0a001f] p-6 border border-white/10">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#00ff9d]">✓</span>
                                Flexible Scheduling
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Choose a time that works best for you. Available for calls across multiple time zones.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Contact */}
            <section className="py-24 bg-[#0a001f] text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Prefer a Different Approach?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Not ready for a call? No problem. Send me a message or reach out on WhatsApp instead.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="border border-white/20 text-white px-8 py-4 font-bold uppercase hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
                        >
                            Send a Message
                        </Link>
                        <a
                            href="https://api.whatsapp.com/send/?phone=923046769150&text=Greetings%2C+Are+you+available+for+a+project?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#00ff9d] text-[#0a001f] px-8 py-4 font-bold uppercase hover:bg-white transition-colors"
                        >
                            WhatsApp Me
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
