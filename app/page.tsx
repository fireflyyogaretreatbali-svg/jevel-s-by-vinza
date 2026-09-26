"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionsGrid from "@/components/CollectionsGrid";
import ProductRail from "@/components/ProductRail";
import AboutBrand from "@/components/AboutBrand";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/lib/data";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <CollectionsGrid />
        <ProductRail
          eyebrow="New Arrivals"
          title="Fresh From the Atelier"
          products={newArrivals.length ? newArrivals : products}
        />
        <AboutBrand />
        <ProductRail
          eyebrow="Best Sellers"
          title="Most Loved Pieces"
          products={products}
        />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
