"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { instagramPosts } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function InstagramGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading eyebrow="@jevelbyvinza" title="Follow The Atelier" />
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {instagramPosts.map((src, i) => (
          <motion.a
            key={src}
            href="https://instagram.com/jevelbyvinza"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={src}
              alt="JEVEL by VINZA on Instagram"
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-bg/0 transition-colors duration-300 group-hover:bg-bg/60">
              <Instagram
                size={20}
                className="text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
