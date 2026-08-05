"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Wallet, CalendarCheck, Heart, Leaf, Send, Building2 } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: Wallet,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: CalendarCheck,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

export default function BookTrip() {
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
                  aria-label="Add to favorites"
                  className="text-muted hover:text-accent transition-colors"
                >
                  <Heart className="w-6 h-6" aria-hidden />
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
    </section>
  );
}
