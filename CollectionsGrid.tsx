"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/data";
import { FACET_CLIP } from "@/lib/facet";
import SectionHeading from "./SectionHeading";

export default function CollectionsGrid() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading eyebrow="Featured" title="Our Collections" />

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
          >
            <Link
              href={`/collections/${c.slug}`}
              className="group relative block h-80 overflow-hidden"
              style={{ clipPath: FACET_CLIP }}
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent transition-opacity duration-500 group-hover:from-bg/95" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                <p className="mt-2 max-w-[85%] text-sm text-ink/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {c.copy}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  Shop now <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
