import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import bcrypt from "bcryptjs";

const adapter = new PrismaLibSql({
    url: "file:dev.db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await prisma.user.upsert({
        where: { email: "admin@asadimran.com" },
        update: {},
        create: {
            email: "admin@asadimran.com",
            password: hashedPassword,
            name: "Asad Imran Shah",
            role: "admin",
        },
    });

    console.log("Created admin user:", admin.email);

    // Create initial services
    const services = [
        {
            title: "AI Web Apps & Tools",
            tagline: "Custom AI-Powered Solutions",
            description: "Transform your ideas into intelligent web applications.",
            features: JSON.stringify(["Custom AI Integration", "Automated Workflows", "Data Visualization", "PDF Export"]),
            examples: JSON.stringify(["The Assimilators AI", "Simple SEO Audit Tool", "AI Thesis Drafter"]),
            price: "$500",
            priceNote: "Starting price for basic AI tools",
            popular: false,
            order: 1,
        },
        {
            title: "SEO-Optimized Content",
            tagline: "Content That Ranks & Converts",
            description: "High-quality, keyword-rich content that drives organic traffic.",
            features: JSON.stringify(["Keyword Research", "On-Page SEO", "Long-form Articles", "Product Descriptions"]),
            examples: JSON.stringify(["Fishing content", "Camping guides", "Automotive articles"]),
            price: "$0.05/word",
            priceNote: "Volume discounts available",
            popular: true,
            order: 2,
        },
        {
            title: "Elementor & GenerateBlocks",
            tagline: "High-Converting WordPress Sites",
            description: "Fast, responsive WordPress websites built with modern tools.",
            features: JSON.stringify(["Custom Design", "Mobile Optimized", "Speed Optimization", "CTA Integration"]),
            examples: JSON.stringify(["Business Landing Pages", "Portfolio Websites", "Blog Setup"]),
            price: "$300",
            priceNote: "Starting price for single-page designs",
            popular: false,
            order: 3,
        },
    ];

    for (const service of services) {
        await prisma.service.upsert({
            where: { id: service.title.toLowerCase().replace(/\s+/g, "-") },
            update: service,
            create: { id: service.title.toLowerCase().replace(/\s+/g, "-"), ...service },
        });
    }
    console.log("Created services");

    // Create initial projects
    const projects = [
        {
            title: "The Assimilators AI",
            description: "Allows literary aspirants to generate long questions, MCQs and short questions.",
            category: "AI Tools",
            tags: JSON.stringify(["LocalStorage API", "PDF Export", "Prompt Engineering"]),
            link: "https://iasad1.blogspot.com/",
            featured: true,
            order: 1,
        },
        {
            title: "Simple SEO Audit Tool",
            description: "Analyzes sitemaps/pages for Meta titles/descriptions.",
            category: "AI Tools",
            tags: JSON.stringify(["XML Parsing", "DOM Analysis", "History Persistence"]),
            link: "https://simpleseoaudit.vercel.app/",
            featured: true,
            order: 2,
        },
        {
            title: "WhatsApp Chat Exporter",
            description: "Converts .txt chat history to PDF with visualization.",
            category: "AI Tools",
            tags: JSON.stringify(["Data Visualization", "File Parsing", "PDF Generation"]),
            link: "https://iasad12.github.io/whatsapptranscripttopdf/",
            featured: true,
            order: 3,
        },
    ];

    for (const project of projects) {
        await prisma.project.create({ data: project });
    }
    console.log("Created projects");

    // Create sample testimonial
    await prisma.testimonial.create({
        data: {
            name: "Hassan Tariq Malik",
            role: "Client",
            company: "Content Writer",
            quote: "I found Asad to be very honest with a ready-to-do-the-work attitude. His expertise in blogging helped enhance my ability to deliver well-researched articles at a steady pace.",
            featured: true,
            order: 1,
        },
    });
    console.log("Created testimonial");

    // Create site settings
    await prisma.siteSettings.upsert({
        where: { id: "settings" },
        update: {},
        create: {
            id: "settings",
            siteName: "Asad Imran Shah",
            tagline: "Vibe Coder & Content Writer",
            email: "asadimran328@gmail.com",
            phone: "+92 304 6769150",
            whatsapp: "923046769150",
            location: "Mianwali, Pakistan",
            socialLinks: JSON.stringify({
                linkedin: "https://pk.linkedin.com/in/iasad12",
                facebook: "https://www.facebook.com/iasad12",
                medium: "https://iasad12.medium.com/",
                fiverr: "https://www.fiverr.com/iasad12",
            }),
        },
    });
    console.log("Created site settings");

    console.log("\n✅ Database seeded successfully!");
    console.log("Admin login: admin@asadimran.com / admin123");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
