import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const study = caseStudies.find((s) => s.id === id);

    if (!study) {
        return {
            title: "Case Study Not Found - Asad Imran Shah",
        };
    }

    return {
        title: `${study.title} - Asad Imran Shah`,
        description: study.excerpt,
        openGraph: {
            title: `${study.title} - Asad Imran Shah`,
            description: study.excerpt,
            type: "article",
        },
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const study = caseStudies.find((s) => s.id === id);

    if (!study) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={study.title}
                description={study.excerpt}
                breadcrumbs={[
                    { label: "Case Studies", href: "/case-studies" },
                    { label: study.title, href: `/case-studies/${study.id}` }
                ]}
            />

            <article className="pt-2 md:pt-4 pb-16 md:pb-24 bg-[#0a001f] min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-8 mb-12 border-b border-white/10 pb-8">
                        <div>
                            <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Category</span>
                            <span className="text-[#00ff9d] font-bold text-lg">{study.category}</span>
                        </div>
                        <div>
                            <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Date</span>
                            <span className="text-white font-medium text-lg">{study.date}</span>
                        </div>
                        <div className="ml-auto self-end">
                            <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                                ← Back to Case Studies
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    {study.image && (
                        <div className="mb-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00ff9d]/5 group">
                            <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {study.content.split('\n').map((line, index) => {
                            // Headers
                            if (line.startsWith('## ')) {
                                return <h2 key={index} className="text-3xl font-bold text-white mt-12 mb-6">{line.replace('## ', '')}</h2>;
                            }
                            if (line.startsWith('### ')) {
                                return <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{line.replace('### ', '')}</h3>;
                            }
                            
                            // Lists (simplified handling)
                            if (line.match(/^\d+\. /)) {
                                return (
                                    <div key={index} className="flex gap-4 mb-4 pl-4 border-l-2 border-[#00ff9d]/30">
                                        <span className="text-[#00ff9d] font-bold min-w-[1.5rem]">{line.split('.')[0]}.</span>
                                        <p className="m-0 text-gray-300">{line.substring(line.indexOf('.') + 1).trim()}</p>
                                    </div>
                                );
                            }

                            // Empty lines
                            if (line.trim() === '') {
                                return <div key={index} className="h-4"></div>;
                            }

                            // Normal paragraphs
                            return <p key={index} className="mb-6 leading-relaxed text-lg text-gray-300/90">{line}</p>;
                        })}
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="py-24 bg-[#0f0529] text-center border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Want similar results for your brand?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        I help businesses and individuals build authority through strategic content and SEO.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#00ff9d] text-[#0a001f] px-10 py-4 text-lg font-bold uppercase hover:bg-white transition-colors rounded-sm"
                    >
                        Let's Talk Strategy
                    </Link>
                </div>
            </section>
        </>
    );
}
