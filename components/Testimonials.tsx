"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Chris Thomas",
    role: "CEO of Red Button",
    avatar: "/assets/avatar-1.png",
    color: "bg-accent",
  },
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike Taylor",
    role: "Lahore, Pakistan",
    avatar: "/assets/avatar-1.png",
    color: "bg-blueDeco",
  },
  {
    quote:
      "Jadoo made booking our honeymoon effortless — from flights to hotels, everything was perfectly planned. Highly recommended for every traveler.",
    name: "Sarah Mitchell",
    role: "Travel Blogger",
    avatar: "/assets/avatar-1.png",
    color: "bg-yellow",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay every 6s (paused on hover/focus)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[400px_1fr] gap-16 items-center">
        {/* Heading */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-[18px] text-accent uppercase tracking-wide mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-navy-900 text-[40px] lg:text-[50px] leading-[1.2] text-balance"
          >
            What people say about Us.
          </motion.h2>

          {/* Arrows (desktop) */}
          <div className="hidden lg:flex items-center gap-6 mt-12">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="text-muted hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="text-accent hover:text-accentDeep transition-colors"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-8 lg:mt-10" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-accent" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative" role="region" aria-roledescription="carousel" aria-label="Customer reviews">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative bg-white rounded-[10px] shadow-card p-10 lg:p-12 max-w-[540px]"
              >
                <Quote
                  className="w-14 h-14 text-accent/90 -mt-8 mb-4"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <blockquote className="font-open text-[16px] leading-[2] text-body mb-8">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-5">
                  <div className={`w-[68px] h-[68px] rounded-full ${t.color} p-1.5`}>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={68}
                      height={68}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[18px] text-navy-800">
                      {t.name}
                    </p>
                    <p className="text-[14px] text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Mobile arrows */}
          <div className="lg:hidden flex items-center gap-6 mt-8 justify-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="text-muted hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="text-accent hover:text-accentDeep transition-colors"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
