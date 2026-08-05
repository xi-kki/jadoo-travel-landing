"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Navigation } from "lucide-react";

const destinations = [
  {
    img: "/assets/dest-rome.png",
    title: "Rome, Italy",
    trip: "10 Days Trip",
    price: "$5,42k",
    rating: 4.8,
  },
  {
    img: "/assets/dest-london.png",
    title: "London, UK",
    trip: "12 Days Trip",
    price: "$4.2k",
    rating: 4.9,
  },
  {
    img: "/assets/dest-europe.png",
    title: "Full Europe",
    trip: "28 Days Trip",
    price: "$15k",
    rating: 5.0,
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-24 lg:py-28" aria-label="Top destinations">
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
            Top Selling
          </p>
          <h2 className="font-display font-bold text-navy-900 text-[40px] lg:text-[50px] text-balance">
            Top Destinations
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
          {destinations.map((dest, i) => (
            <motion.article
              key={dest.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group bg-white rounded-[26px] shadow-[0_10px_30px_rgba(47,45,91,0.08)] hover:shadow-[0_25px_60px_rgba(47,45,91,0.15)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-[330px] overflow-hidden">
                <Image
                  src={dest.img}
                  alt={`${dest.title} destination`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-[18px] text-body">
                    {dest.title}
                  </h3>
                  <span className="font-medium text-[18px] text-body">
                    {dest.price}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="flex items-center gap-2 text-[16px] text-body">
                    <Navigation
                      className="w-4 h-4 text-body"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {dest.trip}
                  </p>
                  <p className="flex items-center gap-1.5 text-[16px] text-body">
                    <Star
                      className="w-4 h-4 fill-star text-star"
                      aria-hidden
                    />
                    {dest.rating.toFixed(1)}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
