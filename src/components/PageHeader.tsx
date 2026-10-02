"use client";

import Link from "next/link";

interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
    const jsonLd = breadcrumbs ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://asadimran.pages.dev',
            },
            ...breadcrumbs.map((crumb, index) => ({
                '@type': 'ListItem',
                'position': index + 2,
                'name': crumb.label,
                'item': `https://asadimran.pages.dev${crumb.href}`,
            })),
        ],
    } : null;

    return (
        <section className="pt-4 pb-4 md:pt-8 md:pb-6 bg-[#0a001f] relative overflow-hidden">
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6d28d9]/10 rounded-full filter blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="text-sm mb-3 md:mb-4 text-gray-400 flex flex-wrap items-center">
                        <Link href="/" className="hover:text-[#00ff9d] transition-colors">
                            Home
                        </Link>
                        {breadcrumbs.map((crumb, index) => (
                            <span key={index} className="inline-flex items-center">
                                <span className="mx-2 text-gray-500 font-semibold">&gt;</span>
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-[#00ff9d] break-words">{crumb.label}</span>
                                ) : (
                                    <Link href={crumb.href} className="hover:text-[#00ff9d] transition-colors whitespace-nowrap">
                                        {crumb.label}
                                    </Link>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                {/* Title */}
                <div className="flex items-center mb-3 md:mb-4">
                    <span className="text-[#00ff9d] mr-3 md:mr-4 text-2xl md:text-3xl">↘</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] uppercase leading-tight">
                        {title}
                    </h1>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
