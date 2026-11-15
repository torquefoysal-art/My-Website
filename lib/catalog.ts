export type ShirtColor = {
  name: string;
  body: string;
  collar: string;
};

export type Shirt = {
  slug: string;
  name: string;
  price: number;
  category: "Essential" | "Heavyweight" | "Studio";
  summary: string;
  fabric: string;
  fit: string;
  details: string[];
  colors: ShirtColor[];
};

export const categories = ["All", "Essential", "Heavyweight", "Studio"] as const;

export const sizes = ["XS", "S", "M", "L", "XL"] as const;

export const shirts: Shirt[] = [
  {
    slug: "harbor-navy",
    name: "Harbor Navy",
    price: 42,
    category: "Essential",
    summary: "The house tee. A deep navy body with a clean crew and a collar that keeps its shape.",
    fabric: "180gsm combed cotton",
    fit: "Regular, true to size",
    details: [
      "Set-in sleeves with a narrow double-needle hem.",
      "Rib collar taped at the neck so it stays round after washing.",
      "Cut to sit at the hip, not the thigh.",
    ],
    colors: [
      { name: "Navy", body: "#16325c", collar: "#0d2244" },
      { name: "Ink", body: "#1c2430", collar: "#10161f" },
    ],
  },
  {
    slug: "sky-standard",
    name: "Sky Standard",
    price: 38,
    category: "Essential",
    summary: "A light sky shirt for warm days. Soft color, sharp edges, no logo shouting from the chest.",
    fabric: "160gsm cotton jersey",
    fit: "Regular, slightly easy",
    details: [
      "Shoulder seam sits on the shoulder, not halfway down the arm.",
      "Side seams are straight so the shirt hangs as a column.",
      "Pre-washed so the first wear is already the right size.",
    ],
    colors: [
      { name: "Sky", body: "#8ec8ea", collar: "#6aafd4" },
      { name: "Mist", body: "#d7ebf6", collar: "#b7d4e6" },
    ],
  },
  {
    slug: "white-field",
    name: "White Field",
    price: 36,
    category: "Essential",
    summary: "Optical white with a pale blue stitch. The shirt that makes the rest of the rail look organized.",
    fabric: "170gsm cotton",
    fit: "Regular",
    details: [
      "Collar is a tone deeper than the body so the neckline reads as finished.",
      "Hem is even all the way around.",
      "No chest print. The cloth is the design.",
    ],
    colors: [
      { name: "White", body: "#f7fbff", collar: "#d5e4f0" },
      { name: "Bone", body: "#f3efe6", collar: "#e2d8c8" },
    ],
  },
  {
    slug: "cobalt-heavy",
    name: "Cobalt Heavy",
    price: 54,
    category: "Heavyweight",
    summary: "A denser blue that holds a shape of its own. For people who want the shirt to feel like a garment, not a wipe.",
    fabric: "240gsm heavyweight cotton",
    fit: "Boxy, cropped at the hip",
    details: [
      "Shoulders are dropped half an inch for a quieter drape.",
      "Sleeve opening is narrow enough that it does not bell.",
      "Collar rib is the same cloth, folded twice.",
    ],
    colors: [
      { name: "Cobalt", body: "#1f5fbf", collar: "#163f86" },
      { name: "Navy", body: "#16325c", collar: "#0d2244" },
    ],
  },
  {
    slug: "night-cut",
    name: "Night Cut",
    price: 48,
    category: "Heavyweight",
    summary: "Near-black with a sky collar binding. The heaviest shirt in the essential family, still cut on the same block.",
    fabric: "220gsm cotton",
    fit: "Regular",
    details: [
      "Dyed after sewing so the seams stay the same depth as the body.",
      "A short side vent keeps the hem from pulling when you sit.",
      "Pairs with Sky Standard without looking like a set.",
    ],
    colors: [
      { name: "Night", body: "#1a1e27", collar: "#8ec8ea" },
      { name: "Navy", body: "#16325c", collar: "#8ec8ea" },
    ],
  },
  {
    slug: "cloud-pocket",
    name: "Cloud Pocket",
    price: 46,
    category: "Studio",
    summary: "White body, one sky pocket, placed where a hand actually rests. Nothing else on the front.",
    fabric: "180gsm cotton",
    fit: "Regular",
    details: [
      "Pocket is a single piece, bar-tacked at the corners.",
      "The pocket color is the same sky as the Sky Standard body.",
      "Back is plain so the shirt still reads as quiet from behind.",
    ],
    colors: [
      { name: "White / Sky", body: "#f7fbff", collar: "#8ec8ea" },
      { name: "Sky / Navy", body: "#8ec8ea", collar: "#16325c" },
    ],
  },
  {
    slug: "ink-stripe",
    name: "Ink Stripe",
    price: 58,
    category: "Studio",
    summary: "Navy ground with one white stripe across the chest. A studio piece that still folds into the same drawer.",
    fabric: "190gsm cotton",
    fit: "Regular",
    details: [
      "The stripe is knit in, not printed, so it does not crack.",
      "Stripe sits 14cm below the collar on every size, scaled with the block.",
      "Sleeve and body share one continuous grain.",
    ],
    colors: [
      { name: "Navy stripe", body: "#16325c", collar: "#f7fbff" },
      { name: "Sky stripe", body: "#1f5fbf", collar: "#f7fbff" },
    ],
  },
  {
    slug: "daybreak",
    name: "Daybreak",
    price: 52,
    category: "Studio",
    summary: "A pale shirt that moves from white at the shoulder to sky at the hem. Same block as the essentials.",
    fabric: "170gsm cotton, garment dyed",
    fit: "Regular",
    details: [
      "The color change is a dip dye, softer at the chest.",
      "Collar stays white so the neckline stays crisp.",
      "Limited to the studio rail. The block is the same as Harbor Navy.",
    ],
    colors: [
      { name: "Daybreak", body: "#b9dff3", collar: "#f7fbff" },
      { name: "White", body: "#f7fbff", collar: "#d5e4f0" },
    ],
  },
];

export function formatPrice(centsOrDollars: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    centsOrDollars,
  );
}

export function getShirt(slug: string) {
  return shirts.find((shirt) => shirt.slug === slug);
}
