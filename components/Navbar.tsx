"use client";

import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Bookings", href: "#book" },
  { label: "Flights", href: "#services" },
  { label: "Hotels", href: "#destinations" },
  { label: "Destinations", href: "#destinations" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5" aria-label="Jadoo home">
          <Plane
            className="w-8 h-8 -rotate-45 text-accent"
            strokeWidth={2.5}
            aria-hidden
          />
          <span className="font-display text-[26px] font-bold text-navy-900">
            Jadoo
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[17px] font-medium text-navy-600 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-7">
          <a
            href="#book"
            className="bg-cta-gradient text-white font-semibold text-[17px] px-8 py-3 rounded-[10px] shadow-btn hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            Plan a trip
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-navy-900 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25 }}
          className="lg:hidden bg-white shadow-lg border-t border-gray-100"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-navy-600 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="inline-block bg-cta-gradient text-white font-semibold text-base px-6 py-2.5 rounded-[10px] shadow-btn"
              >
                Plan a trip
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
