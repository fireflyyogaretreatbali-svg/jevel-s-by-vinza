"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 1.6,
  size: 2 + Math.random() * 3,
}));

export default function Loader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"ring" | "logo" | "done">("ring");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 2000);
    const t2 = setTimeout(() => setPhase("done"), 3400);
    const t3 = setTimeout(onDone, 3900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          {/* floating gold particles */}
          {PARTICLES.map((p) => (
            <motion.span
              key={p.id}
              className="pointer-events-none absolute rounded-full bg-gold"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                boxShadow: "0 0 8px 1px rgba(212,175,55,0.7)",
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 0.9, 0], y: -30 }}
              transition={{
                duration: 2.6,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <AnimatePresence mode="wait">
            {phase === "ring" ? (
              <motion.div
                key="ring"
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative flex items-center justify-center"
              >
                <motion.svg
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                >
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8A6A1F" />
                      <stop offset="45%" stopColor="#F1D48C" />
                      <stop offset="55%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#8A6A1F" />
                    </linearGradient>
                  </defs>
                  {/* band */}
                  <circle
                    cx="70"
                    cy="90"
                    r="34"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="7"
                  />
                  {/* diamond facets */}
                  <polygon
                    points="70,28 90,46 82,58 58,58 50,46"
                    fill="url(#ringGrad)"
                    opacity="0.95"
                  />
                  <polygon points="70,28 90,46 70,52" fill="#F1D48C" opacity="0.9" />
                  <polygon points="70,28 50,46 70,52" fill="#D4AF37" opacity="0.75" />
                  <polygon points="58,58 70,52 82,58 70,74" fill="#8A6A1F" opacity="0.9" />
                </motion.svg>
                <div className="absolute inset-0 blur-2xl bg-gold/20 rounded-full" />
              </motion.div>
            ) : (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-center"
              >
                <motion.h1
                  className="font-display gold-text text-5xl md:text-6xl tracking-widest2 uppercase animate-shimmer"
                  initial={{ letterSpacing: "0.05em", opacity: 0 }}
                  animate={{ letterSpacing: "0.35em", opacity: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  JEVEL
                </motion.h1>
                <motion.p
                  className="mt-3 text-sm tracking-[0.5em] uppercase text-ink/70"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                >
                  by VINZA
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
