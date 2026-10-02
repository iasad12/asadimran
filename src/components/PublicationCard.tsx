"use client";

import { Publication } from "@/data/publications";

interface PublicationCardProps {
    publication: Publication;
    index: number;
}

export default function PublicationCard({ publication, index }: PublicationCardProps) {
    const isDownload = !!publication.fileUrl;
    const link = publication.fileUrl || publication.externalUrl;

    return (
        <div className="bg-[#0f0529] border border-white/10 overflow-hidden group hover:border-[#00ff9d] transition-all duration-300 relative flex flex-col h-full">
            {/* Wrap whole card in link functionality */}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    download={isDownload}
                    aria-label={`${isDownload ? 'Download' : 'Read'} ${publication.title}`}
                />
            )}

            {/* Thumbnail */}
            <div className="h-48 bg-gradient-to-br from-[#6d28d9]/30 to-[#00ff9d]/10 overflow-hidden relative">
                {publication.thumbnail ? (
                    <img
                        src={publication.thumbnail}
                        alt={publication.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: publication.thumbnailPosition || "top" }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#00ff9d]/30">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                )}

                <div className="absolute top-4 right-4 text-white/20 text-4xl font-bold group-hover:text-[#00ff9d] transition-colors z-10 drop-shadow-md">
                    {String(index + 1).padStart(2, "0")}
                </div>

                <span className="absolute top-4 left-4 bg-[#00ff9d] text-[#0a001f] text-xs uppercase tracking-widest px-3 py-1 font-bold z-10">
                    {publication.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ff9d] transition-colors">
                    {publication.title}
                </h3>

                <p className="text-gray-400 mb-8 line-clamp-3 flex-grow leading-relaxed">
                    {publication.description}
                </p>

                <div className="mt-auto pointer-events-none">
                    {link && (
                        <div className="inline-flex items-center gap-2 text-[#00ff9d] font-bold text-sm uppercase tracking-widest">
                            {isDownload ? (
                                <>
                                    Download PDF
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    Read Article
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
