"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ShoppingBag, Star, X } from "lucide-react";
import { Product } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";
import { FACET_CLIP } from "@/lib/facet";

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="group relative w-72 shrink-0 sm:w-80"
      >
        <div
          className="relative h-80 overflow-hidden bg-white/5"
          style={{ clipPath: FACET_CLIP }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-[10px] uppercase tracking-widest text-bg">
              New
            </span>
          )}

          <button
            onClick={() => setWishlisted((w) => !w)}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wishlisted}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-bg/60 backdrop-blur-sm transition-colors hover:bg-bg/90"
          >
            <Heart
              size={16}
              className={cn("transition-colors", wishlisted ? "fill-gold text-gold" : "text-ink")}
            />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-bg/70 py-4 backdrop-blur-sm transition-transform duration-400 group-hover:translate-y-0">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-gold"
            >
              <Eye size={14} /> Quick View
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-widest text-ink/50">{product.collection}</p>
          <h3 className="mt-1 font-display text-lg text-ink">{product.name}</h3>
          <div className="mt-1 flex items-center gap-1.5">
            <Star size={12} className="fill-gold text-gold" />
            <span className="text-xs text-ink/60">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-display text-lg text-gold">{formatPrice(product.price)}</span>
            <button
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
              className="flex items-center gap-2 border border-gold/40 px-3 py-2 text-[11px] uppercase tracking-widest text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <ShoppingBag size={13} />
              {added ? "Added" : "Add"}
            </button>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {quickViewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-bg/90 backdrop-blur-md px-6"
            onClick={() => setQuickViewOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} quick view`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="grid w-full max-w-3xl grid-cols-1 gap-8 border border-line bg-bg p-8 md:grid-cols-2"
            >
              <div className="relative h-72 md:h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="400px"
                  className="object-cover"
                  style={{ clipPath: FACET_CLIP }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[11px] uppercase tracking-widest text-ink/50">
                  {product.collection}
                </p>
                <h3 className="mt-2 font-display text-3xl text-ink">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  Hand-finished in 18k gold and set with conflict-free stones.
                  Includes complimentary resizing and a signed authenticity
                  certificate from the atelier.
                </p>
                <p className="mt-5 font-display text-2xl text-gold">
                  {formatPrice(product.price)}
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 border border-gold bg-gold py-3 text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-90"
                  >
                    {added ? "Added to bag" : "Add to bag"}
                  </button>
                  <button
                    onClick={() => setWishlisted((w) => !w)}
                    aria-label="Toggle wishlist"
                    className="flex h-11 w-11 items-center justify-center border border-gold/40 hover:border-gold"
                  >
                    <Heart size={16} className={wishlisted ? "fill-gold text-gold" : "text-ink"} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => setQuickViewOpen(false)}
                aria-label="Close quick view"
                className="absolute right-5 top-5 text-ink/60 hover:text-gold"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
