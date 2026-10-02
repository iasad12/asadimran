import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - Asad Imran Shah",
    description: "Understand the Terms of Service for working with Asad Imran Shah. Covers payments, revisions, intellectual property, and more.",
    openGraph: {
        title: "Terms of Service - Asad Imran Shah",
        description: "Understand the Terms of Service for working with Asad Imran Shah. Covers payments, revisions, intellectual property, and more.",
        type: "website",
    },
};

export default function TermsPage() {
    return (
        <>
            <PageHeader
                title="Terms of Service"
                description="Terms and conditions for using my services."
                breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
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
                                    These Terms of Service (&ldquo;Terms&rdquo;) govern your use of services provided by Asad Imran Shah (&ldquo;I&rdquo;, &ldquo;me&rdquo;, or &ldquo;my&rdquo;), including AI web application development, SEO content writing, and WordPress/Elementor web design services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                                <p className="mb-4">I offer the following services:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">AI Web Apps & Tools:</strong> Custom AI-powered web applications and automation tools.</li>
                                    <li><strong className="text-white">SEO-Optimized Content:</strong> Blog articles, product descriptions, and other SEO content.</li>
                                    <li><strong className="text-white">WordPress Design:</strong> Website design using Elementor or GenerateBlocks.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Project Process</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>All projects begin with a consultation to understand requirements.</li>
                                    <li>A detailed proposal with scope, timeline, and pricing will be provided.</li>
                                    <li>Work commences upon approval and receipt of any required deposit.</li>
                                    <li>Regular updates will be provided throughout the project.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Payment terms will be specified in individual project proposals.</li>
                                    <li>For larger projects, a 50% deposit may be required upfront.</li>
                                    <li>Final payment is due upon project completion and before final delivery.</li>
                                    <li>Accepted payment methods will be communicated during the proposal phase.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Revisions</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Each project includes a specified number of revision rounds (typically 2).</li>
                                    <li>Additional revisions beyond the agreed scope may incur extra charges.</li>
                                    <li>Revision requests must be submitted in writing (email or message).</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Upon full payment, you receive full ownership of the deliverables.</li>
                                    <li>I retain the right to display the work in my portfolio unless otherwise agreed.</li>
                                    <li>Any third-party assets used will be properly licensed or attributed.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Confidentiality</h2>
                                <p>
                                    I respect the confidentiality of your business information. Any sensitive data shared during our collaboration will be kept confidential and will not be disclosed to third parties without your consent.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Cancellation & Refunds</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Either party may cancel a project with written notice.</li>
                                    <li>Work completed up to the cancellation date will be billed.</li>
                                    <li>Deposits are non-refundable once work has commenced.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                                <p>
                                    While I strive to deliver high-quality work, I am not liable for any indirect, incidental, or consequential damages arising from the use of my services. My total liability shall not exceed the amount paid for the specific service.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Warranty</h2>
                                <p>
                                    I provide a 30-day warranty period after project delivery for fixing bugs or errors in the delivered work. This warranty does not cover changes in requirements or new feature requests.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">11. Contact</h2>
                                <p>
                                    For questions about these Terms, please contact:
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li><strong className="text-white">Email:</strong> <a href="mailto:asadimran328@gmail.com" className="text-[#00ff9d] hover:underline">asadimran328@gmail.com</a></li>
                                    <li><strong className="text-white">WhatsApp:</strong> +92 304 6769150</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                                <p>
                                    I reserve the right to modify these Terms at any time. Continued use of my services after changes constitutes acceptance of the new Terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#0f0529] text-center">
                <div className="container mx-auto px-6">
                    <Link
                        href="/privacy"
                        className="text-[#00ff9d] hover:underline"
                    >
                        ← View Privacy Policy
                    </Link>
                </div>
            </section>
        </>
    );
}
