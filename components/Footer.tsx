"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Plane, Apple, Play } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Mobile"],
  },
  {
    title: "Contact",
    links: ["Help/FAQ", "Press", "Affilates"],
  },
  {
    title: "More",
    links: ["Airlinefees", "Airline", "Low fare tips"],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-10" aria-label="Footer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10"
      >
        {/* Brand */}
        <div className="col-span-2">
          <a href="#" className="flex items-center gap-1.5 mb-5" aria-label="Jadoo home">
            <Plane
              className="w-8 h-8 -rotate-45 text-accent"
              strokeWidth={2.5}
              aria-hidden
            />
            <span className="font-display text-[44px] font-bold text-navy-900">
              Jadoo
            </span>
          </a>
          <p className="text-[13px] leading-[1.8] text-body max-w-[230px]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <nav key={col.title} aria-label={`Footer ${col.title}`}>
            <h3 className="font-bold text-[21px] text-navy-900 mb-7">
              {col.title}
            </h3>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[18px] text-body hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Socials + app */}
        <div>
          <h3 className="font-bold text-[21px] text-navy-900 mb-7">Social</h3>
          <div className="flex items-center gap-4 mb-7">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-white shadow-[0_5px_20px_rgba(47,45,91,0.1)] flex items-center justify-center text-body hover:text-accent hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-5 h-5" aria-hidden />
              </a>
            ))}
          </div>
          <p className="font-semibold text-[20px] text-navy-800 mb-4">
            Discover our app
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-navy-900 text-white rounded-[12px] px-5 py-2.5 hover:bg-navy-800 transition-colors"
              aria-label="Download on Google Play"
            >
              <Play className="w-5 h-5" aria-hidden />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-gray-300">
                  GET IT ON
                </span>
                <span className="block text-[14px] font-semibold">
                  Google Play
                </span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-navy-900 text-white rounded-[12px] px-5 py-2.5 hover:bg-navy-800 transition-colors"
              aria-label="Download on the App Store"
            >
              <Apple className="w-5 h-5" aria-hidden />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-gray-300">
                  Available on the
                </span>
                <span className="block text-[14px] font-semibold">
                  App Store
                </span>
              </span>
            </a>
          </div>
        </div>
      </motion.div>

      <p className="text-center text-[14px] text-body mt-16">
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
}
