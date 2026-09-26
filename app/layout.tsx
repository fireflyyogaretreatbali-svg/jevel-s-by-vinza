import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JEVEL by VINZA — Luxury Fine Jewelry",
    template: "%s | JEVEL by VINZA",
  },
  description:
    "Diamond rings, wedding sets, necklaces, bracelets, and luxury watches hand-finished in 18k gold. Each piece leaves the atelier once, and only once, it is worthy of the name.",
  openGraph: {
    title: "JEVEL by VINZA — Luxury Fine Jewelry",
    description:
      "Diamond rings, wedding sets, necklaces, bracelets, and luxury watches hand-finished in 18k gold.",
    siteName: "JEVEL by VINZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JEVEL by VINZA — Luxury Fine Jewelry",
    description:
      "Diamond rings, wedding sets, necklaces, bracelets, and luxury watches hand-finished in 18k gold.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JEVEL by VINZA",
  description:
    "Luxury fine jewelry atelier crafting diamond rings, wedding sets, necklaces, bracelets, and watches in 18k gold.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
