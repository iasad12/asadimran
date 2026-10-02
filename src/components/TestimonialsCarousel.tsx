"use client";

import { useState } from "react";

const testimonials = [
    {
        id: 1,
        quote:
            "I found Asad to be very honest with a ready-to-do-the-work attitude. His expertise in blogging helped enhance my ability to deliver well-researched articles at a steady pace. I recommend Asad for his ability to adapt to any niche.",
        author: "Hassan Tariq Malik",
        role: "Content Manager",
        project: "Content Writing",
        rating: 5,
        featured: true,
    }
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? "text-[#00ff9d]" : "text-gray-600"
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsCarousel() {
    const currentIndex = 0;

    return (
        <section id="reviews" className="py-24 bg-white/5">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-12 reveal">
                    <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        Reviews
                    </h2>
                </div>

                <div className="reveal relative bg-[#0a001f] p-10 md:p-16 border border-white/10 max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <svg
                        className="absolute top-8 left-8 w-12 h-12 text-[#00ff9d]/20"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                    >
                        <path d="M10 8v6l-2.5 6h5.5v6H0V8h10zm19 0v6l-2.5 6h5.5v6H19V8h10z" />
                    </svg>

                    {/* Testimonial Content */}
                    <div className="relative z-10">
                        <blockquote>
                            <StarRating rating={testimonials[currentIndex].rating} />

                            <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic my-8">
                                &ldquo;{testimonials[currentIndex].quote}&rdquo;
                            </p>

                            <footer className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#00ff9d] to-[#6d28d9] rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonials[currentIndex].author.charAt(0)}
                                </div>
                                <div>
                                    <cite className="text-white font-bold not-italic block">
                                        {testimonials[currentIndex].author}
                                    </cite>
                                    <span className="text-gray-400 text-sm">
                                        {testimonials[currentIndex].role}
                                    </span>
                                    <span className="text-[#00ff9d] text-sm ml-2">
                                        • {testimonials[currentIndex].project}
                                    </span>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
