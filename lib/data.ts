export type Product = {
  slug: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
};

export const collections = [
  {
    slug: "diamond-rings",
    title: "Diamond Rings",
    copy: "Solitaires and pavé bands cut for maximum fire.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "wedding",
    title: "Wedding Collection",
    copy: "Bridal sets designed to be worn for a lifetime.",
    image:
      "https://images.unsplash.com/photo-1546457124-fbc3a5e58e56?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "necklaces",
    title: "Necklaces",
    copy: "Chains and pendants in 18k gold and platinum.",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "bracelets",
    title: "Bracelets",
    copy: "Tennis lines and cuffs, hand-set stone by stone.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "watches",
    title: "Luxury Watches",
    copy: "Swiss movements in gem-set gold housings.",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
  },
] as const;

export const products: Product[] = [
  {
    slug: "eternal-solitaire-ring",
    name: "Eternal Solitaire Ring",
    collection: "Diamond Rings",
    price: 8400,
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 128,
    isNew: true,
  },
  {
    slug: "aurelia-pave-band",
    name: "Aurelia Pavé Band",
    collection: "Wedding Collection",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 76,
  },
  {
    slug: "lumiere-pendant",
    name: "Lumière Pendant",
    collection: "Necklaces",
    price: 3600,
    image:
      "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?q=80&w=1000&auto=format&fit=crop",
    rating: 5.0,
    reviewCount: 54,
  },
  {
    slug: "vinza-tennis-bracelet",
    name: "VINZA Tennis Bracelet",
    collection: "Bracelets",
    price: 12800,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 41,
    isNew: true,
  },
  {
    slug: "regalia-gold-timepiece",
    name: "Regalia Gold Timepiece",
    collection: "Luxury Watches",
    price: 24500,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 33,
  },
  {
    slug: "halo-cluster-earrings",
    name: "Halo Cluster Earrings",
    collection: "Necklaces",
    price: 4100,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 62,
  },
];

export const testimonials = [
  {
    name: "Amara Whitfield",
    quote:
      "Every piece feels like it was cut for me alone. The craftsmanship is unlike anything I've owned.",
    role: "Private client, London",
  },
  {
    name: "Daniyal Raza",
    quote:
      "I proposed with the Eternal Solitaire. The presentation alone was worth the trip to the atelier.",
    role: "Private client, Karachi",
  },
  {
    name: "Sophie Marchetti",
    quote:
      "JEVEL understands restraint. Nothing is loud, everything is deliberate.",
    role: "Private client, Milan",
  },
];

export const instagramPosts = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518544866330-4c728cf9ba6a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=600&auto=format&fit=crop",
];
