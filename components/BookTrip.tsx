"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Wallet, CalendarCheck, Heart, Leaf, Send, Building2, CheckCircle2, AlertCircle } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Destination",
    desc: "Pick where you're going — or tell us your dates and budget, and we'll suggest three that fit.",
  },
  {
    icon: Wallet,
    title: "Make Payment",
    desc: "Secure checkout in under two minutes. Card, bank transfer, or split it with friends.",
  },
  {
    icon: CalendarCheck,
    title: "Reach Airport on Selected Date",
    desc: "Your full itinerary lands in your inbox the moment you book. Just show up — we handle the rest.",
  },
];

export default function BookTrip() {
  const [faved, setFaved] = useState(false);
  const [form, setForm] = useState({ destination: "Rome, Italy", dates: "", travelers: "2", email: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.trim()) {
      setFormError("Please enter your email so we can send the itinerary.");
      setFormStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      setFormError("Please enter a valid email address.");
      setFormStatus("error");
      return;
    }
    if (!form.dates.trim()) {
      setFormError("Tell us roughly when you'd like to travel.");
      setFormStatus("error");
      return;
    }
    setFormError("");
    setFormStatus("success");
    setForm({ destination: "Rome, Italy", dates: "", travelers: "2", email: "" });
  };
  return (
    <section id="book" className="relative py-24 lg:py-32" aria-label="How to book a trip">
      {/* Background deco */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[600px] rounded-l-full bg-creamDeco/60"
        aria-hidden
      />
      <div
        className="absolute left-0 bottom-0 w-40 h-40 rounded-full bg-blueDeco/40"
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — steps */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-[18px] text-accent uppercase tracking-wide mb-4"
          >
            Easy and Fast
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-navy-900 text-[40px] lg:text-[50px] leading-[1.2] text-balance mb-14"
          >
            Book your next trip in 3 easy steps
          </motion.h2>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-yellow text-white flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-[16px] text-navy-800 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[1.75] text-body max-w-[320px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Greece card mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-[460px] mx-auto w-full"
        >
          {/* Purple blob behind */}
          <div
            className="absolute -top-14 -right-10 w-[354px] h-[367px] rounded-full bg-purpleDeco/30"
            aria-hidden
          />

          {/* Main card */}
          <div className="relative z-10 bg-white rounded-[26px] shadow-card-lg p-6">
            <div className="relative h-[200px] rounded-[24px] overflow-hidden">
              <Image
                src="/assets/trip-card.png"
                alt="Trip to Greece photo"
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover"
              />
            </div>

            <div className="pt-5 pb-2">
              <h3 className="font-semibold text-[18px] text-navy-900">
                Trip To Greece
              </h3>
              <p className="text-[16px] text-muted mt-1">
                14-29 June <span className="mx-1">|</span> by Robbin Joseph
              </p>

              <div className="flex items-center gap-2 mt-4">
                <Leaf className="w-4 h-4 text-yellow" aria-hidden />
                <Send className="w-4 h-4 text-accent" aria-hidden />
                <MapPin className="w-4 h-4 text-blueDeco" aria-hidden />
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5" aria-hidden>
                    {["bg-accent", "bg-yellow", "bg-blueDeco"].map((c, i) => (
                      <span
                        key={i}
                        className={`w-7 h-7 rounded-full ${c} border-2 border-white`}
                      />
                    ))}
                  </div>
                  <p className="text-[16px] text-muted">24 people going</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFaved(!faved)}
                  aria-label={faved ? "Remove from favorites" : "Add to favorites"}
                  aria-pressed={faved}
                  className={`transition-colors ${faved ? "text-accent" : "text-muted hover:text-accent"}`}
                >
                  <Heart className="w-6 h-6" aria-hidden fill={faved ? "currentColor" : "none"} />
                </button>
              </div>
            </div>
          </div>

          {/* Ongoing mini card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-10 -left-4 lg:-left-10 z-20 bg-white rounded-[18px] shadow-card-lg p-5 w-[260px] animate-float"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-card-gradient flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-white" aria-hidden />
              </div>
              <div>
                <p className="text-[14px] font-medium text-muted">Ongoing</p>
                <p className="text-[15px] font-semibold text-navy-900">
                  Trip to Rome
                </p>
              </div>
              <span className="text-[14px] font-semibold text-accent ml-auto">
                40%
              </span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-[12px] font-medium text-muted mb-1.5">
                <span>Completed</span>
                <span>24%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[24%] bg-accent rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
        {/* Trip inquiry form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[760px] mx-auto mt-20 bg-white rounded-[40px] shadow-card p-8 lg:p-12"
        >
          <h3 className="font-display font-bold text-navy-900 text-[26px] lg:text-[30px] text-center mb-2">
            Get your itinerary planned
          </h3>
          <p className="text-center text-body text-[16px] mb-8">
            Tell us where and when — a real travel planner replies within 24
            hours. No payment needed to ask.
          </p>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 text-green-700 rounded-[16px] px-6 py-6 flex items-center justify-center gap-3 font-medium text-center"
              role="status"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden />
              Request received. We'll email your itinerary within 24 hours.
            </motion.div>
          ) : (
            <form onSubmit={handleInquiry} noValidate className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label htmlFor="inquiry-destination" className="block text-[14px] font-medium text-navy-800 mb-1.5">
                  Destination
                </label>
                <select
                  id="inquiry-destination"
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  className="w-full rounded-[10px] bg-white px-5 py-[14px] text-[15px] text-navy-800 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-accent transition-shadow"
                >
                  <option>Rome, Italy</option>
                  <option>London, UK</option>
                  <option>Full Europe</option>
                  <option>Somewhere else</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="inquiry-travelers" className="block text-[14px] font-medium text-navy-800 mb-1.5">
                  Travelers
                </label>
                <select
                  id="inquiry-travelers"
                  value={form.travelers}
                  onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                  className="w-full rounded-[10px] bg-white px-5 py-[14px] text-[15px] text-navy-800 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-accent transition-shadow"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="inquiry-dates" className="block text-[14px] font-medium text-navy-800 mb-1.5">
                  When are you traveling?
                </label>
                <input
                  id="inquiry-dates"
                  type="text"
                  placeholder="e.g. June 2026"
                  value={form.dates}
                  onChange={(e) => setForm({ ...form, dates: e.target.value })}
                  className="w-full rounded-[10px] bg-white px-5 py-[14px] text-[15px] text-navy-800 placeholder:text-[#9CA0B0] outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-accent transition-shadow"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="inquiry-email" className="block text-[14px] font-medium text-navy-800 mb-1.5">
                  Email
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (formStatus === "error") {
                      setFormStatus("idle");
                      setFormError("");
                    }
                  }}
                  className="w-full rounded-[10px] bg-white px-5 py-[14px] text-[15px] text-navy-800 placeholder:text-[#9CA0B0] outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-accent transition-shadow"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button
                  type="submit"
                  className="bg-cta-gradient text-white font-semibold text-[17px] px-9 py-[16px] rounded-[10px] shadow-btn hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request my itinerary
                </button>
                {formStatus === "error" && (
                  <p className="flex items-center gap-1.5 text-red-500 text-sm font-medium" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden />
                    {formError}
                  </p>
                )}
              </div>
            </form>
          )}
        </motion.div>
    </section>
  );
}
