"use client";

import { useState } from "react";

const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
];

const services = [
    { id: "discovery", name: "15-Min Discovery Call", duration: "15 min", price: "Free" },
    { id: "strategy", name: "1-Hour Strategy Session", duration: "60 min", price: "$50" },
    { id: "project", name: "Project Consultation", duration: "90 min", price: "$150" },
];

export default function BookingEmbed() {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState(1);

    // Generate next 14 days
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            // Skip weekends
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                dates.push(date);
            }
        }
        return dates;
    };

    const availableDates = generateDates();

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
    };

    const handleBooking = () => {
        const service = services.find((s) => s.id === selectedService);
        const dateStr = selectedDate?.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
        });
        const message = `Hi, I'd like to book a ${service?.name} on ${dateStr} at ${selectedTime} (Pakistan Time). Please confirm availability.`;
        window.open(
            `https://api.whatsapp.com/send/?phone=923046769150&text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <section id="booking" className="py-24 bg-[#0f0529]">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-12 reveal">
                    <span className="text-[#00ff9d] mr-4 text-2xl">↘</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        Book a Call
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s
                                            ? "bg-[#00ff9d] text-[#0a001f]"
                                            : "bg-white/10 text-gray-400"
                                        }`}
                                >
                                    {s}
                                </div>
                                {s < 3 && (
                                    <div
                                        className={`w-16 h-0.5 ${step > s ? "bg-[#00ff9d]" : "bg-white/10"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#0a001f] border border-white/10 p-8 reveal">
                        {/* Step 1: Select Service */}
                        {step === 1 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">
                                    Select a Service
                                </h3>
                                <div className="space-y-4">
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => {
                                                setSelectedService(service.id);
                                                setStep(2);
                                            }}
                                            className={`w-full p-4 border text-left transition-all ${selectedService === service.id
                                                    ? "border-[#00ff9d] bg-[#00ff9d]/10"
                                                    : "border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-white font-semibold">{service.name}</p>
                                                    <p className="text-gray-400 text-sm">{service.duration}</p>
                                                </div>
                                                <span className="text-[#00ff9d] font-bold">{service.price}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Select Date */}
                        {step === 2 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">
                                    Select a Date
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {availableDates.map((date, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setSelectedDate(date);
                                                setStep(3);
                                            }}
                                            className={`p-3 border text-center transition-all ${selectedDate?.getTime() === date.getTime()
                                                    ? "border-[#00ff9d] bg-[#00ff9d]/10"
                                                    : "border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            <p className="text-white text-sm">{formatDate(date)}</p>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setStep(1)}
                                    className="mt-6 text-gray-400 hover:text-white transition-colors"
                                >
                                    ← Back
                                </button>
                            </div>
                        )}

                        {/* Step 3: Select Time */}
                        {step === 3 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Select a Time
                                </h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    Times shown in Pakistan Standard Time (PKT, UTC+5)
                                </p>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`p-3 border text-center transition-all ${selectedTime === time
                                                    ? "border-[#00ff9d] bg-[#00ff9d]/10"
                                                    : "border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            <p className="text-white text-sm">{time}</p>
                                        </button>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        ← Back
                                    </button>
                                    <button
                                        onClick={handleBooking}
                                        disabled={!selectedTime}
                                        className="btn-primary flex-1 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Confirm Booking via WhatsApp
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Selected Summary */}
                    {(selectedService || selectedDate || selectedTime) && (
                        <div className="mt-6 p-4 bg-white/5 border border-white/10 reveal">
                            <p className="text-sm text-gray-400">
                                <span className="text-[#00ff9d]">Selected: </span>
                                {selectedService &&
                                    services.find((s) => s.id === selectedService)?.name}
                                {selectedDate && ` • ${formatDate(selectedDate)}`}
                                {selectedTime && ` • ${selectedTime} PKT`}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
