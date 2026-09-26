"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FACET_CLIP } from "@/lib/facet";

export default function AboutBrand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1200&auto=format&fit=crop"
            alt="Jeweler hand-setting a diamond at the JEVEL by VINZA atelier"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ clipPath: FACET_CLIP }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">The House</p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Three generations of stone-setters,
            <span className="italic text-gold"> one uncompromising standard</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink/60 md:text-base">
            JEVEL by VINZA began as a single bench in a family atelier, where
            every stone was set by hand and every setting was tested against
            one question: would this still be worn, and loved, in fifty
            years? That standard hasn&apos;t moved. Today the same
            question shapes every ring, chain, and clasp that leaves our
            workshop.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              ["40+", "Years of craft"],
              ["12k", "Pieces delivered"],
              ["100%", "Conflict-free stones"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-2xl text-gold">{stat}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-ink/50">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
