import PageHeader from "@/components/PageHeader";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies - Asad Imran Shah",
    description: "Explore in-depth case studies of my projects. See how I solve problems and deliver results through AI tools, SEO content, and web design.",
    openGraph: {
        title: "Case Studies - Asad Imran Shah",
        description: "Explore in-depth case studies of my projects. See how I solve problems and deliver results through AI tools, SEO content, and web design.",
        type: "website",
    },
};

export default function CaseStudiesPage() {
    return (
        <>
            <PageHeader
                title="Case Studies"
                description="In-depth analysis of selected projects, exploring the challenges, solutions, and impact."
                breadcrumbs={[{ label: "Case Studies", href: "/case-studies" }]}
            />

            <section className="pt-4 md:pt-6 pb-20 md:pb-24 bg-[#0a001f] min-h-[60vh] flex items-center">
                <div className="container mx-auto px-6">
                    {caseStudies.length > 0 ? (
                        <div className="space-y-12">
                            {caseStudies.map((study) => (
                                <Link href={`/case-studies/${study.id}`} key={study.id} className="block group">
                                    <article className="bg-[#0f0529] border border-white/10 rounded-lg overflow-hidden group-hover:border-[#00ff9d] transition-colors flex flex-col md:flex-row">
                                        {study.image && (
                                            <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                                                <img 
                                                    src={study.image} 
                                                    alt={study.title} 
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-[#00ff9d] text-sm uppercase tracking-widest font-bold">
                                                    {study.category}
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    {study.date}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ff9d] transition-colors">
                                                {study.title}
                                            </h3>
                                            <p className="text-gray-400 mb-6 leading-relaxed">
                                                {study.excerpt}
                                            </p>
                                            <span className="text-[#00ff9d] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                                Read Case Study →
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-block p-4 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] mb-8">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-[family-name:var(--font-space-grotesk)]">
                                Case Studies <span className="text-[#00ff9d]">Coming Soon</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                I&apos;m currently documenting the technical journeys and impact analysis of my latest projects. 
                                Check back soon for in-depth deep dives.
                            </p>
                            <div className="mt-12">
                                <a 
                                    href="/projects" 
                                    className="text-[#00ff9d] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border-b border-[#00ff9d] pb-1"
                                >
                                    View Portfolio Instead →
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0f0529] text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Let&apos;s collaborate to build something that solves real problems.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#00ff9d] text-[#0a001f] px-12 py-6 text-lg font-bold uppercase hover:bg-white transition-colors"
                    >
                        Start a Project →
                    </a>
                </div>
            </section>
        </>
    );
}
