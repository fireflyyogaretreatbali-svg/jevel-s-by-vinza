"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { FACET_CLIP } from "@/lib/facet";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-28 md:px-10">
      <SectionHeading eyebrow="Testimonials" title="Words From Our Clients" />

      <div className="relative mt-16">
        <div
          className="border border-line bg-white/[0.02] p-10 text-center md:p-14"
          style={{ clipPath: FACET_CLIP }}
        >
          <Quote className="mx-auto mb-6 text-gold" size={28} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-xl italic leading-relaxed text-ink md:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest text-gold">{current.name}</p>
              <p className="mt-1 text-xs text-ink/50">{current.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-gold" : "bg-ink/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ink hover:border-gold hover:text-gold"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
