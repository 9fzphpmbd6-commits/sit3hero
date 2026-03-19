export type ProductCategory =
  | "kits"
  | "holders"
  | "car-reamers"
  | "step-reamers"
  | "step-drills"
  | "taps";

export type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  specs: Record<string, string>;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  badge?: string;
};

export const products: Product[] = [
  // KITS
  {
    id: "kit-ultimate-12",
    slug: "ultimate-12-piece-kit",
    sku: "S3HU1",
    name: "Ultimate 12-Piece Kit",
    category: "kits",
    shortDescription: "3 step drills + 3 step reamers + 3 car reamers + 3 taps",
    longDescription:
      "The complete SIT3HERO™ system in one box. Covers every hole operation you'll encounter on the job site — drilling, expanding, threading, and aligning. Works with any 1/2\" or 3/4\" impact wrench.",
    keyFeatures: [
      "Full coverage: drill, expand, thread, align",
      "Proprietary high-temp coating to 356°F",
      "Works with 1/2\" and 3/4\" impact wrenches",
      "Includes holder + 11 cutting tools",
      "Hard carry case included",
    ],
    specs: {
      Contents: "3 Step Drills, 3 Step Reamers, 3 Car Reamers, 3 Taps, 1 Holder",
      Compatibility: "1/2\" & 3/4\" impact wrenches",
      "Hole Range": "1/8\" to 1-3/8\"",
      Coating: "SIT3HERO™ high-temp proprietary",
    },
    price: 780.0,
    compareAtPrice: 920.0,
    imageUrl: "/images/kit-ultimate-12.jpg",
    isFeatured: true,
    isBestSeller: true,
    badge: "Best Value",
  },
  {
    id: "kit-car-reamer-13",
    slug: "car-reamer-13-piece-kit",
    sku: "S3HCR3",
    name: "Car Reamer 13-Piece Kit",
    category: "kits",
    shortDescription: "5/16\" through 1-1/16\" — all sizes",
    longDescription:
      "Every car reamer size in one kit. The go-to for ironworkers who need to align mismatched bolt holes across all 13 major diameter sizes.",
    keyFeatures: [
      "All 13 major diameter sizes",
      "Spiral flute for fast chip evacuation",
      "Built-in safety collar on every reamer",
      "Includes holder",
    ],
    specs: {
      Sizes: '5/16" through 1-1/16" (all 13)',
      Compatibility: '1/2" & 3/4" impact wrenches',
      Operation: "Hole alignment",
    },
    price: 990.0,
    imageUrl: "/images/kit-car-reamer-13.jpg",
    isFeatured: true,
    badge: "Complete Set",
  },
  {
    id: "kit-car-reamer-6",
    slug: "car-reamer-6-piece-kit",
    sku: "S3HCR2",
    name: "Car Reamer 6-Piece Kit",
    category: "kits",
    shortDescription: '3/8" through 1" — most common sizes',
    longDescription:
      "Six most-used car reamer sizes. Perfect for contractors who need the core sizes without the full set.",
    keyFeatures: [
      "6 most common sizes",
      "Spiral flute design",
      "Safety collar included on each",
      "Includes holder",
    ],
    specs: {
      Sizes: '3/8" through 1"',
      Compatibility: '1/2" & 3/4" impact wrenches',
      Operation: "Hole alignment",
    },
    price: 450.0,
    imageUrl: "/images/kit-car-reamer-6.jpg",
  },
  {
    id: "kit-car-reamer-4",
    slug: "car-reamer-4-piece-kit",
    sku: "S3HCR1",
    name: "Car Reamer 4-Piece Kit",
    category: "kits",
    shortDescription: '3/8", 1/2", 5/8", 3/4"',
    longDescription:
      "The four most-called-for sizes on structural steel jobs. Compact kit for ironworkers who work a tight range.",
    keyFeatures: [
      "4 top-used sizes",
      "Compact carry pouch",
      "Includes holder",
    ],
    specs: {
      Sizes: '3/8", 1/2", 5/8", 3/4"',
      Compatibility: '1/2" & 3/4" impact wrenches',
      Operation: "Hole alignment",
    },
    price: 264.0,
    imageUrl: "/images/kit-car-reamer-4.jpg",
  },
  {
    id: "kit-step-reamer-3",
    slug: "step-reamer-3-piece-kit",
    sku: "S3HSR1",
    name: "Step Reamer 3-Piece Kit",
    category: "kits",
    shortDescription: '15 sizes from 5/16" to 1-1/16"',
    longDescription:
      "Three step reamers cover 15 sizes. The fastest way to run through a range of hole expansions on one job.",
    keyFeatures: [
      "15 sizes in 3 tools",
      "5 steps per reamer",
      "Includes holder",
    ],
    specs: {
      Sizes: '5/16" to 1-1/16" (15 sizes)',
      "Steps per tool": "5",
      Compatibility: '1/2" & 3/4" impact wrenches',
    },
    price: 212.4,
    imageUrl: "/images/kit-step-reamer-3.jpg",
  },
  {
    id: "kit-step-drill-3",
    slug: "step-drill-3-piece-kit",
    sku: "S3HSD1",
    name: "Step Drill 3-Piece Kit",
    category: "kits",
    shortDescription: '1/8" to 1-3/8" — all sizes',
    longDescription:
      "Complete step drill coverage in three tools. Drill new holes in thin gauge material across the full range.",
    keyFeatures: [
      "Full size range in 3 tools",
      "Split point for accurate positioning",
      "Spiral flute chip evacuation",
      "Includes holder",
    ],
    specs: {
      Sizes: '1/8" to 1-3/8"',
      Compatibility: '1/2" & 3/4" impact wrenches',
      Operation: "New hole drilling",
    },
    price: 195.0,
    imageUrl: "/images/kit-step-drill-3.jpg",
  },

  // HOLDERS
  {
    id: "holder-half-inch",
    slug: "holder-half-inch",
    sku: "S3HH1",
    name: 'SIT3HERO™ Holder — 1/2"',
    category: "holders",
    shortDescription: 'Quick-release holder for 1/2" impact wrenches',
    longDescription:
      "The heart of the SIT3HERO™ system. Attaches to your 1/2\" impact wrench in seconds and accepts all SIT3HERO™ cutting tools.",
    keyFeatures: [
      "Quick-release locking mechanism",
      "Accepts all SIT3HERO™ tools",
      "Patent pending WO2024/100390",
      "Heavy-duty steel construction",
    ],
    specs: {
      Compatibility: '1/2" impact wrenches',
      "Patent Status": "Pending WO2024/100390",
      Material: "Heat-treated steel",
    },
    price: 89.0,
    imageUrl: "/images/holder-half.jpg",
    isFeatured: true,
  },
  {
    id: "holder-three-quarter",
    slug: "holder-three-quarter",
    sku: "S3HH2",
    name: 'SIT3HERO™ Holder — 3/4"',
    category: "holders",
    shortDescription: 'Quick-release holder for 3/4" impact wrenches',
    longDescription:
      "Heavy-duty holder built for 3/4\" impact wrenches. Same quick-release system, more torque capacity for larger operations.",
    keyFeatures: [
      "Quick-release locking mechanism",
      "Accepts all SIT3HERO™ tools",
      "Built for high-torque 3/4\" wrenches",
      "Patent pending WO2024/100390",
    ],
    specs: {
      Compatibility: '3/4" impact wrenches',
      "Patent Status": "Pending WO2024/100390",
      Material: "Heat-treated steel",
    },
    price: 99.0,
    imageUrl: "/images/holder-three-quarter.jpg",
  },

  // STEP DRILLS
  {
    id: "step-drill-small",
    slug: "step-drill-small",
    sku: "S3HSD-S",
    name: "Step Drill — Small",
    category: "step-drills",
    shortDescription: '1/8" to 1/2" in thin gauge material',
    longDescription:
      "Drill new holes in thin gauge material from 1/8\" to 1/2\". Split point ensures accurate positioning without walking.",
    keyFeatures: [
      "Split point — no walking",
      "Spiral flute for fast chip evacuation",
      "SIT3HERO™ coating — 75% longer life",
    ],
    specs: { Range: '1/8" to 1/2"', Material: "HSS with SIT3HERO™ coating" },
    price: 55.0,
    imageUrl: "/images/step-drill-s.jpg",
  },
  {
    id: "step-drill-medium",
    slug: "step-drill-medium",
    sku: "S3HSD-M",
    name: "Step Drill — Medium",
    category: "step-drills",
    shortDescription: '1/2" to 1" in thin gauge material',
    longDescription:
      "Mid-range step drill covering the most common structural bolt sizes. Works on material up to 1/4\" thick.",
    keyFeatures: [
      "Split point — no walking",
      "Covers major bolt sizes",
      "SIT3HERO™ coating",
    ],
    specs: { Range: '1/2" to 1"', Material: "HSS with SIT3HERO™ coating" },
    price: 65.0,
    imageUrl: "/images/step-drill-m.jpg",
    isBestSeller: true,
  },
  {
    id: "step-drill-large",
    slug: "step-drill-large",
    sku: "S3HSD-L",
    name: "Step Drill — Large",
    category: "step-drills",
    shortDescription: '1" to 1-3/8" in thin gauge material',
    longDescription:
      "Largest step drill in the range. For oversized holes in thin gauge structural steel.",
    keyFeatures: [
      "Largest range available",
      "Split point accuracy",
      "SIT3HERO™ coating",
    ],
    specs: { Range: '1" to 1-3/8"', Material: "HSS with SIT3HERO™ coating" },
    price: 75.0,
    imageUrl: "/images/step-drill-l.jpg",
  },

  // STEP REAMERS
  {
    id: "step-reamer-1",
    slug: "step-reamer-1",
    sku: "S3HSR-1",
    name: "Step Reamer — Set 1",
    category: "step-reamers",
    shortDescription: '5/16" to 9/16" — 5 steps',
    longDescription:
      "Expand and clean existing holes across 5 sizes. Each step is precisely machined to major bolt diameters.",
    keyFeatures: ["5 steps", "Spiral flute", "SIT3HERO™ coating"],
    specs: { Range: '5/16" to 9/16"', Steps: "5" },
    price: 62.8,
    imageUrl: "/images/step-reamer-1.jpg",
  },
  {
    id: "step-reamer-2",
    slug: "step-reamer-2",
    sku: "S3HSR-2",
    name: "Step Reamer — Set 2",
    category: "step-reamers",
    shortDescription: '5/8" to 7/8" — 5 steps',
    longDescription:
      "Mid-range step reamer covering 5/8\" through 7/8\" in 5 steps.",
    keyFeatures: ["5 steps", "Spiral flute", "SIT3HERO™ coating"],
    specs: { Range: '5/8" to 7/8"', Steps: "5" },
    price: 68.8,
    imageUrl: "/images/step-reamer-2.jpg",
    isBestSeller: true,
  },
  {
    id: "step-reamer-3",
    slug: "step-reamer-3",
    sku: "S3HSR-3",
    name: "Step Reamer — Set 3",
    category: "step-reamers",
    shortDescription: '15/16" to 1-1/16" — 5 steps',
    longDescription:
      "Large end of the range. Covers the biggest bolt hole sizes in 5 precision steps.",
    keyFeatures: ["5 steps", "Spiral flute", "SIT3HERO™ coating"],
    specs: { Range: '15/16" to 1-1/16"', Steps: "5" },
    price: 80.8,
    imageUrl: "/images/step-reamer-3.jpg",
  },

  // CAR REAMERS (select sizes)
  {
    id: "car-reamer-38",
    slug: "car-reamer-3-8",
    sku: "S3HCR-38",
    name: 'Car Reamer 3/8"',
    category: "car-reamers",
    shortDescription: "Precision alignment reamer — single size",
    longDescription:
      "Single-size car reamer for precise 3/8\" bolt hole alignment. Spiral flute and safety collar for fast, safe operation.",
    keyFeatures: ["Spiral flute", "Safety collar", "SIT3HERO™ coating"],
    specs: { Size: '3/8"', Operation: "Hole alignment" },
    price: 48.0,
    imageUrl: "/images/car-reamer-38.jpg",
  },
  {
    id: "car-reamer-12",
    slug: "car-reamer-1-2",
    sku: "S3HCR-12",
    name: 'Car Reamer 1/2"',
    category: "car-reamers",
    shortDescription: "Precision alignment reamer — single size",
    longDescription:
      "Single-size car reamer for 1/2\" bolt hole alignment. The most called-for size on structural jobs.",
    keyFeatures: ["Spiral flute", "Safety collar", "SIT3HERO™ coating"],
    specs: { Size: '1/2"', Operation: "Hole alignment" },
    price: 52.0,
    imageUrl: "/images/car-reamer-12.jpg",
    isBestSeller: true,
  },
  {
    id: "car-reamer-34",
    slug: "car-reamer-3-4",
    sku: "S3HCR-34",
    name: 'Car Reamer 3/4"',
    category: "car-reamers",
    shortDescription: "Precision alignment reamer — single size",
    longDescription:
      "Workhorse 3/4\" car reamer for heavy structural steel alignment work.",
    keyFeatures: ["Spiral flute", "Safety collar", "SIT3HERO™ coating"],
    specs: { Size: '3/4"', Operation: "Hole alignment" },
    price: 58.0,
    imageUrl: "/images/car-reamer-34.jpg",
  },

  // TAPS
  {
    id: "tap-1-4",
    slug: "tap-1-4-unc",
    sku: "S3HT-14",
    name: 'Tap 1/4" UNC',
    category: "taps",
    shortDescription: "Spiral point tap — 20× faster than hand tapping",
    longDescription:
      "SIT3HERO™ spiral point machine tap for 1/4\" UNC threads. Pushes swarf forward for clean threads in material up to 1/2\" thick.",
    keyFeatures: [
      "20× faster than hand tapping",
      "Spiral point pushes swarf forward",
      "Works up to 1/2\" material thickness",
      "SIT3HERO™ coating",
    ],
    specs: { Size: '1/4" UNC', "Max Material": '1/2"' },
    price: 38.0,
    imageUrl: "/images/tap-14.jpg",
  },
  {
    id: "tap-3-8",
    slug: "tap-3-8-unc",
    sku: "S3HT-38",
    name: 'Tap 3/8" UNC',
    category: "taps",
    shortDescription: "Spiral point tap — 20× faster than hand tapping",
    longDescription:
      "3/8\" UNC spiral point machine tap. One of the most common thread sizes on structural steel jobs.",
    keyFeatures: [
      "20× faster threading",
      "Spiral point design",
      "SIT3HERO™ coating",
    ],
    specs: { Size: '3/8" UNC', "Max Material": '1/2"' },
    price: 42.0,
    imageUrl: "/images/tap-38.jpg",
    isBestSeller: true,
  },
  {
    id: "tap-1-2",
    slug: "tap-1-2-unc",
    sku: "S3HT-12",
    name: 'Tap 1/2" UNC',
    category: "taps",
    shortDescription: "Spiral point tap — 20× faster than hand tapping",
    longDescription:
      "1/2\" UNC spiral point tap for impact wrench threading at speed.",
    keyFeatures: [
      "20× faster threading",
      "Spiral point design",
      "SIT3HERO™ coating",
    ],
    specs: { Size: '1/2" UNC', "Max Material": '1/2"' },
    price: 48.0,
    imageUrl: "/images/tap-12.jpg",
  },
];

export const categories: { id: ProductCategory; label: string }[] = [
  { id: "kits", label: "Kits" },
  { id: "holders", label: "Holders" },
  { id: "car-reamers", label: "Car Reamers" },
  { id: "step-reamers", label: "Step Reamers" },
  { id: "step-drills", label: "Step Drills" },
  { id: "taps", label: "Taps" },
];

export const getProductsByCategory = (cat: ProductCategory) =>
  products.filter((p) => p.category === cat);

export const getFeaturedProducts = () =>
  products.filter((p) => p.isFeatured);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
