"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 lg:pt-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF7F3 45%, #FFF1EA 100%)",
      }}
      aria-label="Hero"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — copy */}
        <div className="relative z-10">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-bold text-[20px] text-accent mb-6"
          >
            Best Destinations around the world
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display font-bold text-navy-900 text-[48px] leading-[1.15] sm:text-[64px] lg:text-[76px] xl:text-[84px] text-balance"
          >
            Travel, enjoy and live a new and full life
          </motion.h1>

          {/* Dashed underline deco */}
          <motion.div
            custom={1.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative -mt-5 mb-6 hidden sm:block"
            aria-hidden
          >
            <svg
              width="340"
              height="14"
              viewBox="0 0 340 14"
              fill="none"
              className="text-accent"
            >
              <path
                d="M2 11.5C60 4.5 140 2.5 220 4.5C275 6 310 8.5 338 11"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="7 7"
              />
            </svg>
          </motion.div>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[16px] sm:text-[17px] leading-[1.9] text-body max-w-[470px] mb-10"
          >
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-8 flex-wrap"
          >
            <a
              href="#destinations"
              className="bg-cta-gradient text-white font-semibold text-[18px] px-9 py-4.5 py-[18px] rounded-[10px] shadow-btn hover:shadow-btnYellow hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              Find out more
            </a>
            <button
              type="button"
              className="group flex items-center gap-4 text-[17px] font-medium text-navy-600 hover:text-accent transition-colors"
              aria-label="Play demo video"
            >
              <span className="w-[52px] h-[52px] rounded-full bg-white shadow-[0_10px_30px_rgba(47,45,91,0.12)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden
                >
                  <path d="M2.5 1.5L12.5 7.5L2.5 13.5V1.5Z" fill="#DF6951" />
                </svg>
              </span>
              Play Demo
            </button>
          </motion.div>
        </div>

        {/* RIGHT — traveller image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 max-w-[560px] mx-auto w-full"
        >
          {/* Orange deco blob behind */}
          <div
            className="absolute -top-10 -right-6 w-64 h-64 rounded-full bg-accent/90 blur-[1px]"
            aria-hidden
          />
          <div
            className="absolute -top-6 -right-2 w-52 h-52 rounded-full bg-accent/80"
            aria-hidden
          />

          {/* Flying plane doodle */}
          <svg
            viewBox="0 0 170 160"
            className="absolute -top-16 right-24 w-32 h-32 text-blueDeco animate-planeFly"
            fill="currentColor"
            aria-hidden
          >
            <path d="M85 8c8 34 4 62-6 82-6 12-16 22-24 30 14 2 30-2 44-10 18-10 34-26 46-46 8-13 12-28 10-42l-8 4c2 10 0 20-5 30-8 16-20 30-34 40-10 7-22 11-34 11l14-10c8-6 15-13 20-22-6 2-12 6-17 11-12 12-22 27-28 44-4 10-6 21-6 32l9-2c-1-9 1-18 4-26 6-16 15-30 28-40l12-10c-14 2-26 8-36 16-8 7-15 15-20 25-8 16-12 33-10 51l8-4c-2-14 1-28 7-40 8-17 20-31 36-41 12-8 26-12 40-12-8-6-12-14-14-24-3-14-3-30 1-48l-6-2Z" />
          </svg>

          <Image
            src="/assets/hero-traveller.png"
            alt="Smiling traveler with luggage surrounded by travel decorations"
            width={765}
            height={764}
            priority
            className="relative z-10 w-full h-auto drop-shadow-2xl animate-floatSlow"
          />

          {/* Floating white card — trip details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="absolute left-0 bottom-6 z-20 bg-white rounded-2xl shadow-card p-4 pr-6 flex items-center gap-4 animate-float max-w-[300px]"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <Image
                src="/assets/trip-card.png"
                alt="Trip to Greece preview"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold text-[18px] text-navy-900 leading-tight">
                Trip To Greece
              </p>
              <p className="text-[14px] text-muted mt-0.5">
                14-29 June <span className="mx-1">|</span> by Robbin Joseph
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex -space-x-1.5" aria-hidden>
                  {["bg-yellow", "bg-accent", "bg-blueDeco"].map((c, i) => (
                    <span
                      key={i}
                      className={`w-5 h-5 rounded-full ${c} border-2 border-white`}
                    />
                  ))}
                </div>
                <p className="text-[13px] font-medium text-muted">
                  24 people going
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — ongoing trip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="absolute -right-2 lg:right-0 top-16 z-20 bg-white rounded-2xl shadow-card p-4 pr-6 animate-floatSlow w-[230px]"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full bg-card-gradient flex items-center justify-center shrink-0"
                aria-hidden
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 6V4M16 6V4M3 10H21"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-medium text-muted">Ongoing</p>
                <p className="text-[15px] font-semibold text-navy-900">
                  Trip to Rome
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full w-[40%] bg-accent rounded-full"
                  aria-label="40 percent complete"
                />
              </div>
              <span className="text-[12px] font-medium text-muted">40%</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
