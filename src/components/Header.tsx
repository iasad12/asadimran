"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = Math.max(0, window.scrollY);
            setIsScrolled(currentScrollY > 50);

            if (currentScrollY <= 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                // Hide when scrolling down past header
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                // Show when scrolling up
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/publications", label: "Publications" },
        { href: "/contact", label: "Contact" },
    ];

    const shouldShowHeader = isVisible || isMobileMenuOpen;

    return (
        <header
            className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
                shouldShowHeader ? "translate-y-0" : "-translate-y-full"
            } ${
                isScrolled
                    ? "bg-[#0a001f]/95 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 h-24 flex justify-between items-center">
                {/* Logo & Name */}
                <Link href="/" className="z-50 flex items-center gap-3 group">
                    <img
                        src="/images/logo.webp"
                        alt="Asad Imran Shah Logo"
                        className="h-10 md:h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
                    />
                    <span className="font-bold text-lg md:text-xl text-white font-[family-name:var(--font-space-grotesk)] tracking-wider group-hover:text-[#00ff9d] transition-colors whitespace-nowrap">
                        Asad Imran
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-400 hover:text-[#00ff9d] transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff9d] transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="https://api.whatsapp.com/send/?phone=923046769150&text=Greetings%2C+Are+you+available+for+a+project?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block text-sm uppercase tracking-widest hover:text-[#00ff9d] transition-colors border border-white/20 px-4 py-2 rounded-full hover:border-[#00ff9d]"
                >
                    Let&apos;s Talk ↘
                </a>

                {/* Mobile Menu Button */}
                {!isMobileMenuOpen && (
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        aria-label="Open menu"
                    >
                        <span className="w-6 h-0.5 bg-white transition-all" />
                        <span className="w-6 h-0.5 bg-white transition-all" />
                        <span className="w-6 h-0.5 bg-white transition-all" />
                    </button>
                )}

                {/* Mobile Menu */}
                <div
                    className={`mobile-menu fixed inset-0 bg-[#0a001f] flex flex-col items-center justify-center gap-8 md:hidden h-screen z-[101] ${isMobileMenuOpen ? "open" : ""
                        }`}
                >
                    {/* Explicit Close Button for Mobile Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-7 right-6 w-10 h-10 border border-white flex items-center justify-center text-white hover:text-[#00ff9d] hover:border-[#00ff9d] transition-all"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-bold uppercase tracking-widest text-white hover:text-[#00ff9d] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://api.whatsapp.com/send/?phone=923046769150&text=Greetings%2C+Are+you+available+for+a+project?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 bg-[#00ff9d] text-[#0a001f] px-8 py-4 font-bold uppercase"
                    >
                        Let&apos;s Talk
                    </a>
                </div>
            </div>
        </header>
    );
}
