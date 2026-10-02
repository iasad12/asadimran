import ContactPageContent from "@/components/ContactPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get in Touch - Asad Imran Shah",
    description: "Contact Asad Imran Shah for your web development and content writing needs. Available via email, WhatsApp, or contact form.",
    openGraph: {
        title: "Get in Touch - Asad Imran Shah",
        description: "Contact Asad Imran Shah for your web development and content writing needs. Available via email, WhatsApp, or contact form.",
        type: "website",
    },
};

export default function ContactPage() {
    return <ContactPageContent />;
}