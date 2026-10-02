import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Asad Imran Shah",
    description: "Browse my portfolio of AI tools, SEO content projects, and WordPress websites. See what I've built and written for clients worldwide.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
