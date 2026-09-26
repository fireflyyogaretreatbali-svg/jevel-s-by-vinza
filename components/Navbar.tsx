"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Rings", href: "/collections/diamond-rings" },
  { label: "Wedding", href: "/collections/wedding" },
  { label: "Necklaces", href: "/collections/necklaces" },
  { label: "Bracelets", href: "/collections/bracelets" },
  { label: "Watches", href: "/collections/watches" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-display text-xl tracking-[0.3em] uppercase gold-text">
          JEVEL
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-sm uppercase tracking-widest text-ink/80 transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="text-ink/80 transition-colors hover:text-gold"
          >
            <Search size={18} />
          </button>
          <button aria-label="Wishlist" className="hidden text-ink/80 transition-colors hover:text-gold sm:block">
            <Heart size={18} />
          </button>
          <button aria-label="Shopping bag" className="hidden text-ink/80 transition-colors hover:text-gold sm:block">
            <ShoppingBag size={18} />
          </button>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            aria-label="Open menu"
            className="text-ink/80 md:hidden"
            onClick={() => setMenuOpen((m) => !m)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* AI-powered search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-md"
          >
            <div className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-5">
              <Sparkles size={16} className="shrink-0 text-gold" />
              <input
                autoFocus
                type="text"
                placeholder='Ask JEVEL — "a rose gold band under $5,000"'
                className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-sm uppercase tracking-widest text-ink/80 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
