import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Script from "next/script";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://asadimran.pages.dev"),
    title: "Asad Imran Shah | Vibe Coder & Content Writer in Mianwali",
    description:
        "Need a high-converting landing page or custom AI tool? Asad Imran Shah delivers SEO-optimized web solutions that rank. Contact me to start building.",
    keywords: [
        "AI Web Developer",
        "Content Writer",
        "Mianwali",
        "Pakistan",
        "Elementor Design",
        "GenerateBlocks",
        "SEO Writer",
        "Vibe Coder",
    ],
    authors: [{ name: "Asad Imran Shah" }],
    verification: {
        google: "tjawfWdGZuJDGygLROacQfxqbyfm7xX9FnB9QiH4mCg",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Asad Imran Shah",
        title: "Asad Imran Shah | Vibe Coder & Content Writer",
        description:
            "AI-Powered Websites & Content That Converts. From Mianwali to the global web.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Asad Imran Shah | Vibe Coder & Content Writer",
        description: "AI-Powered Websites & Content That Converts",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0a001f] text-gray-200`}
            >
                <Header />
                <main className="pt-24">{children}</main>
                <Footer />
                <ScrollReveal />
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-V16FC2F03P"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-V16FC2F03P');
                    `}
                </Script>
            </body>
        </html>
    );
}
