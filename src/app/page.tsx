import Hero from "@/components/Hero";
import ServicesMatrix from "@/components/ServicesMatrix";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatsCounter from "@/components/StatsCounter";
import Experience from "@/components/Experience";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AboutSection from "@/components/AboutSection";
import BookingEmbed from "@/components/BookingEmbed";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Services Matrix */}
      <ServicesMatrix />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Stats Counter with Marquee */}
      <StatsCounter />

      {/* Experience Timeline */}
      <Experience />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* About Section */}
      <AboutSection />

      {/* Booking System */}
      <BookingEmbed />

      {/* FAQ Section */}
      <FAQAccordion />

      {/* CTA Banner with Contact Form */}
      <CTABanner />
    </>
  );
}
