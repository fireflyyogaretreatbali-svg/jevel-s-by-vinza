"use client";

import { Product } from "@/lib/data";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

export default function ProductRail({
  eyebrow,
  title,
  products,
}: {
  eyebrow: string;
  title: string;
  products: Product[];
}) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow={eyebrow} title={title} align="left" />
      </div>
      <div className="mt-12 flex gap-6 overflow-x-auto px-6 pb-4 md:px-10 [scrollbar-width:thin]">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
