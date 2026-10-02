import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get in Touch - Asad Imran Shah",
    description: "Contact Asad Imran Shah for your web development and content writing needs. Available via email, WhatsApp, or contact form.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
