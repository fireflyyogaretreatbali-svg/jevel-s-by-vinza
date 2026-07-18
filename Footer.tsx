import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Diamond Rings", href: "/collections/diamond-rings" },
      { label: "Wedding Collection", href: "/collections/wedding" },
      { label: "Necklaces", href: "/collections/necklaces" },
      { label: "Bracelets", href: "/collections/bracelets" },
      { label: "Luxury Watches", href: "/collections/watches" },
    ],
  },
  {
    title: "House",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Craftsmanship", href: "/craftsmanship" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Ring Sizing", href: "/sizing" },
      { label: "Care Guide", href: "/care" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="font-display text-xl tracking-[0.3em] uppercase gold-text">
              JEVEL
            </Link>
            <p className="mt-2 text-xs uppercase tracking-widest text-ink/40">by VINZA</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/50">
              Fine jewelry, hand-finished in 18k gold, designed to be worn
              for a lifetime and passed down for another.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com/jevelbyvinza" aria-label="Instagram" className="text-ink/50 hover:text-gold">
                <Instagram size={17} />
              </a>
              <a href="https://facebook.com/jevelbyvinza" aria-label="Facebook" className="text-ink/50 hover:text-gold">
                <Facebook size={17} />
              </a>
              <a href="https://twitter.com/jevelbyvinza" aria-label="Twitter" className="text-ink/50 hover:text-gold">
                <Twitter size={17} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs uppercase tracking-widest text-gold">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink/50 hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-ink/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} JEVEL by VINZA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ink">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
