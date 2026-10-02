import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Asad Imran Shah",
    description: "Read the Privacy Policy for Asad Imran Shah's services. Learn how your data is collected, used, and protected.",
    openGraph: {
        title: "Privacy Policy - Asad Imran Shah",
        description: "Read the Privacy Policy for Asad Imran Shah's services. Learn how your data is collected, used, and protected.",
        type: "website",
    },
};

export default function PrivacyPage() {
    return (
        <>
            <PageHeader
                title="Privacy Policy"
                description="How we collect, use, and protect your personal information."
                breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
            />

            <section className="pt-4 md:pt-6 pb-20 md:pb-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto prose prose-invert">
                        <div className="text-gray-400 space-y-8">
                            <p className="text-sm text-gray-500">
                                Last updated: December 29, 2024
                            </p>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                                <p>
                                    Asad Imran Shah (&ldquo;I&rdquo;, &ldquo;me&rdquo;, or &ldquo;my&rdquo;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how I collect, use, and safeguard your information when you visit my website or use my services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Information I Collect</h2>
                                <p className="mb-4">I may collect the following types of information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number when you contact me or book a consultation.</li>
                                    <li><strong className="text-white">Project Details:</strong> Information about your project requirements that you provide through forms.</li>
                                    <li><strong className="text-white">Usage Data:</strong> Information about how you interact with my website, including pages visited and time spent.</li>
                                    <li><strong className="text-white">Communication Data:</strong> Records of our correspondence if you contact me via email or WhatsApp.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">3. How I Use Your Information</h2>
                                <p className="mb-4">I use the collected information to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Respond to your inquiries and provide requested services</li>
                                    <li>Communicate with you about projects and deliverables</li>
                                    <li>Improve my website and services</li>
                                    <li>Send relevant updates about my services (with your consent)</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
                                <p>
                                    I implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and I cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
                                <p className="mb-4">My website may use third-party services that collect information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">Calendly:</strong> For booking consultations</li>
                                    <li><strong className="text-white">Analytics:</strong> To understand website usage</li>
                                    <li><strong className="text-white">Netlify:</strong> For website hosting</li>
                                </ul>
                                <p className="mt-4">Each of these services has their own privacy policies governing their use of your data.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
                                <p>
                                    This website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookies through your browser settings.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                                <p className="mb-4">You have the right to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access the personal data I hold about you</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
                                <p>
                                    For any privacy-related questions or requests, please contact me at:
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li><strong className="text-white">Email:</strong> <a href="mailto:asadimran328@gmail.com" className="text-[#00ff9d] hover:underline">asadimran328@gmail.com</a></li>
                                    <li><strong className="text-white">WhatsApp:</strong> +92 304 6769150</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                                <p>
                                    I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#0f0529] text-center">
                <div className="container mx-auto px-6">
                    <Link
                        href="/terms"
                        className="text-[#00ff9d] hover:underline"
                    >
                        View Terms of Service →
                    </Link>
                </div>
            </section>
        </>
    );
}
