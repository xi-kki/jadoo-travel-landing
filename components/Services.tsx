"use client";

import { motion } from "framer-motion";
import { Plane, CloudSun, PartyPopper, Palette } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    active: true,
  },
  {
    icon: CloudSun,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    active: false,
  },
  {
    icon: PartyPopper,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    active: false,
  },
  {
    icon: Palette,
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers.",
    active: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28" aria-label="Services">
      {/* Decorative plus signs */}
      <div className="absolute right-[8%] top-10 select-none" aria-hidden>
        <span className="text-[28px] font-light text-purpleDeco">+</span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-semibold text-[18px] text-accent uppercase tracking-wide mb-3">
            Category
          </p>
          <h2 className="font-display font-bold text-navy-900 text-[40px] lg:text-[50px] text-balance">
            We Offer Best Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div
                className={`h-full rounded-[36px] px-8 pt-8 pb-10 text-center transition-all duration-300 ${
                  service.active
                    ? "bg-white shadow-[0_20px_50px_rgba(47,45,91,0.08)]"
                    : "bg-white hover:shadow-[0_20px_50px_rgba(47,45,91,0.08)]"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-[92px] h-[92px] mx-auto rounded-full flex items-center justify-center mb-7 ${
                    service.active
                      ? "bg-[#FFF1DA] text-accent"
                      : "bg-[#F5F5F5] text-body group-hover:bg-[#FFF1DA] group-hover:text-accent transition-colors"
                  }`}
                >
                  <service.icon className="w-10 h-10" strokeWidth={1.6} aria-hidden />
                </div>

                <h3 className="font-semibold text-[20px] text-navy-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-body">
                  {service.desc}
                </p>
              </div>

              {/* Decorative blob on active card */}
              {service.active && (
                <div
                  className="absolute -bottom-4 -left-4 w-14 h-14 rounded-tl-[18px] rounded-br-[18px] bg-accent z-[-1]"
                  aria-hidden
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
