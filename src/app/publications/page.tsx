import PageHeader from "@/components/PageHeader";
import { publications } from "@/data/publications";
import PublicationCard from "@/components/PublicationCard";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Publications - Asad Imran Shah",
    description: "Explore my research papers, handbooks, and linguistic collections. From Saraiki proverbs to AI in language learning.",
    openGraph: {
        title: "Publications - Asad Imran Shah",
        description: "Explore my research papers, handbooks, and linguistic collections. From Saraiki proverbs to AI in language learning.",
        type: "website",
    },
};

export default function PublicationsPage() {
    return (
        <>
            <PageHeader
                title="Publications"
                description="A collection of my research work, handbooks, and linguistic studies."
                breadcrumbs={[{ label: "Publications", href: "/publications" }]}
            />

            {/* Publications Grid */}
            <section className="pt-4 md:pt-6 pb-20 md:pb-24 bg-[#0a001f]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {publications.map((publication, index) => (
                            <PublicationCard 
                                key={publication.id} 
                                publication={publication} 
                                index={index} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0f0529] text-center border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
                        Interested in Collaboration?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        I am always open to discussing new research opportunities, writing projects, or AI implementations.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#00ff9d] text-[#0a001f] px-12 py-6 text-lg font-bold uppercase hover:bg-white transition-colors"
                    >
                        Get In Touch →
                    </Link>
                </div>
            </section>
        </>
    );
}
