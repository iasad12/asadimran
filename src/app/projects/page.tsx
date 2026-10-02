import ProjectsPageContent from "@/components/ProjectsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Asad Imran Shah",
    description: "Browse my portfolio of AI tools, SEO content projects, and WordPress websites. See what I've built and written for clients worldwide.",
    openGraph: {
        title: "Projects - Asad Imran Shah",
        description: "Browse my portfolio of AI tools, SEO content projects, and WordPress websites. See what I've built and written for clients worldwide.",
        type: "website",
    },
};

export default function ProjectsPage() {
    return <ProjectsPageContent />;
}
