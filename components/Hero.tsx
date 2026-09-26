"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { FACET_CLIP } from "@/lib/facet";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=2000&auto=format&fit=crop"
          alt="Close-up of a faceted diamond ring catching light"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
      </motion.div>

      {/* ambient floating facet */}
      <div
        className="pointer-events-none absolute right-[8%] top-1/3 h-40 w-40 animate-float bg-gold/10 blur-2xl md:h-64 md:w-64"
        style={{ clipPath: FACET_CLIP }}
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity }}
        className="mx-auto max-w-4xl px-6 text-center md:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 text-xs uppercase tracking-widest2 text-gold"
        >
          Est. Atelier — Cut for a Lifetime
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display text-5xl leading-[1.05] text-ink md:text-7xl"
        >
          Jewelry cut to hold
          <br />
          <span className="gold-text animate-shimmer italic">a lifetime of light</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto mt-7 max-w-xl text-base text-ink/70 md:text-lg"
        >
          Diamond rings, wedding sets, and fine watches, hand-finished in
          18k gold. Each piece leaves the atelier once, and only once, it is
          worthy of the name.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="group relative overflow-hidden border border-gold px-9 py-4 text-xs uppercase tracking-widest text-gold transition-colors duration-500 hover:text-bg">
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative">Explore Collections</span>
          </button>
          <button className="px-9 py-4 text-xs uppercase tracking-widest text-ink/70 transition-colors hover:text-gold">
            Book a Private Viewing
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/60"
        aria-hidden="true"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
