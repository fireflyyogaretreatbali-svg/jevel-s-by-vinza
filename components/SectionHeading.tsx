"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">{eyebrow}</p>
      <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
    </motion.div>
  );
}
