"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const validate = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed))
      return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(email);
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }
    setError("");
    setStatus("success");
    setEmail("");
    // Reset success state after a while so the form can be used again
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section className="relative py-24 lg:py-28" aria-label="Newsletter subscription">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#FDF8F4] rounded-[60px] px-8 py-16 lg:px-20 lg:py-20 text-center overflow-hidden"
        >
          {/* Decorative plane + plusses */}
          <Image
            src="/assets/subscribe-plane.png"
            alt=""
            width={148}
            height={132}
            className="absolute -top-1 right-8 lg:right-24 animate-planeFly"
            aria-hidden
          />
          <div className="absolute top-8 left-10 select-none text-purpleDeco text-3xl font-light" aria-hidden>
            +
          </div>
          <div className="absolute bottom-10 left-24 select-none text-blueDeco text-3xl font-light" aria-hidden>
            +
          </div>
          <div className="absolute top-14 right-16 select-none text-purpleDeco text-3xl font-light hidden lg:block" aria-hidden>
            +
          </div>

          <h2 className="font-display font-bold text-navy-900 text-[28px] lg:text-[33px] leading-[1.5] max-w-[700px] mx-auto text-balance mb-12">
            Get flight deals and trip ideas — one email a week, never spam.
          </h2>

          {/* Form */}
          <div className="max-w-[460px] mx-auto">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 rounded-[10px] px-6 py-5 flex items-center justify-center gap-3 font-medium"
                  role="status"
                >
                  <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden />
                  You're on the list. Your first deal lands this Friday.
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <label htmlFor="subscribe-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="subscribe-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") {
                          setStatus("idle");
                          setError("");
                        }
                      }}
                      placeholder="Your email"
                      aria-invalid={status === "error"}
                      aria-describedby={status === "error" ? "email-error" : undefined}
                      className="w-full flex-1 rounded-[10px] bg-white px-6 py-[18px] text-[14px] font-normal text-navy-800 placeholder:text-[#9CA0B0] outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-accent transition-shadow"
                    />
                    <button
                      type="submit"
                      className="bg-cta-gradient text-white font-semibold text-[17px] px-8 py-[18px] rounded-[10px] shadow-btn hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                    >
                      Get deals
                    </button>
                  </div>
                  {status === "error" && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-1.5 text-red-500 text-sm font-medium mt-3"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4" aria-hidden />
                      {error}
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
