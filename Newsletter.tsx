"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FACET_CLIP } from "@/lib/facet";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden border border-line bg-gradient-to-br from-white/[0.03] to-transparent p-12 text-center md:p-20"
        style={{ clipPath: FACET_CLIP }}
      >
        <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Private Access</p>
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Be first to new collections
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/60">
          Join our private list for early access to limited releases and
          atelier invitations. No spam, ever.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-gold">
            <Check size={16} /> You&apos;re on the list.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border border-line bg-transparent px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gold px-6 py-3 text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-90"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
