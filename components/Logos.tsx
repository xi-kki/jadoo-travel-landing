"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/assets/logo-1.png", alt: "Partner logo one" },
  { src: "/assets/logo-2.png", alt: "Partner logo two" },
  { src: "/assets/logo-3.png", alt: "Partner logo three" },
  { src: "/assets/logo-4.png", alt: "Partner logo four" },
  { src: "/assets/logo-5.png", alt: "Partner logo five" },
];

export default function Logos() {
  return (
    <section className="py-16" aria-label="Our partners">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] mx-auto px-6 flex items-center justify-center flex-wrap gap-10 lg:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      >
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={130}
            height={40}
            className="h-10 w-auto object-contain"
          />
        ))}
      </motion.div>
    </section>
  );
}
