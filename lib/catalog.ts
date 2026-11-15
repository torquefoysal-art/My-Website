export type ShirtColor = {
  name: string;
  body: string;
  collar: string;
};

export type Shirt = {
  slug: string;
  name: string;
  number: string;
  price: number;
  category: "Grid" | "Aero" | "Pit";
  summary: string;
  fabric: string;
  fit: string;
  details: string[];
  colors: ShirtColor[];
};

export const categories = ["All", "Grid", "Aero", "Pit"] as const;

export const sizes = ["XS", "S", "M", "L", "XL"] as const;

export const shirts: Shirt[] = [
  {
    slug: "harbor-navy",
    name: "Grid 44",
    number: "44",
    price: 78,
    category: "Grid",
    summary: "Carbon jersey with a red shoulder yoke and a race number that reads from the stand.",
    fabric: "145gsm recycled polyester mesh",
    fit: "Race cut, close through the chest",
    details: [
      "Short sleeves with a contrast cuff, cut to stay clear of the elbow.",
      "Shoulder panels are a second cloth so the yoke keeps its color.",
      "Number is woven, not a sticker, and sits on the same block for every size.",
    ],
    colors: [
      { name: "Carbon / Red", body: "#141820", collar: "#e10600" },
      { name: "Ink / White", body: "#1c212b", collar: "#f4f6f8" },
    ],
  },
  {
    slug: "sky-standard",
    name: "Apex 16",
    number: "16",
    price: 78,
    category: "Grid",
    summary: "The signal-red jersey. White collar trim, white number, built to look fast standing still.",
    fabric: "145gsm recycled polyester mesh",
    fit: "Race cut",
    details: [
      "Side panels run from the armhole to the hem.",
      "Collar rib is pale so the neck stays visible against the red.",
      "Mesh back panel is the same red, a shade deeper.",
    ],
    colors: [
      { name: "Red / White", body: "#e10600", collar: "#f4f6f8" },
      { name: "Red / Carbon", body: "#b10500", collar: "#141820" },
    ],
  },
  {
    slug: "white-field",
    name: "Pole 63",
    number: "63",
    price: 74,
    category: "Grid",
    summary: "A white grid jersey with a black number and a thin carbon collar. The cleanest shirt in the garage.",
    fabric: "140gsm polyester",
    fit: "Race cut, true to size",
    details: [
      "Number is carbon black so it holds on a white ground.",
      "Hem is shaped, shorter at the front.",
      "A four-square flag sits under the number.",
    ],
    colors: [
      { name: "White / Carbon", body: "#f4f6f8", collar: "#141820" },
      { name: "White / Red", body: "#f7f7f5", collar: "#e10600" },
    ],
  },
  {
    slug: "cobalt-heavy",
    name: "Sector 4",
    number: "04",
    price: 86,
    category: "Aero",
    summary: "Deep blue with a white yoke. The aero jersey, still cut on the same race block.",
    fabric: "150gsm polyester, tighter knit",
    fit: "Race cut, slightly longer sleeve",
    details: [
      "Yoke color carries onto the sleeve cuff.",
      "Chest bar is the only word on the front.",
      "Side inserts keep the torso from reading as a flat panel.",
    ],
    colors: [
      { name: "Blue / White", body: "#123a8a", collar: "#f4f6f8" },
      { name: "Blue / Red", body: "#0e2f72", collar: "#e10600" },
    ],
  },
  {
    slug: "night-cut",
    name: "Carbon 1",
    number: "01",
    price: 88,
    category: "Aero",
    summary: "Near-black cloth, silver collar, number one. The night race jersey.",
    fabric: "150gsm polyester",
    fit: "Race cut",
    details: [
      "Silver yoke catches light without turning the shirt grey.",
      "Sleeves are the same carbon as the body.",
      "Flag mark under the number is silver and black.",
    ],
    colors: [
      { name: "Carbon / Silver", body: "#0e1116", collar: "#c5ccd6" },
      { name: "Carbon / Red", body: "#10141b", collar: "#e10600" },
    ],
  },
  {
    slug: "cloud-pocket",
    name: "Safety 81",
    number: "81",
    price: 82,
    category: "Pit",
    summary: "Signal yellow, the color the pit lane already understands. Black number, black collar.",
    fabric: "145gsm polyester mesh",
    fit: "Race cut",
    details: [
      "Yellow is bright enough to read under garage light.",
      "Black side panels stop the shirt looking like a vest.",
      "Same sleeve length as the grid jerseys.",
    ],
    colors: [
      { name: "Yellow / Carbon", body: "#d6ff3f", collar: "#141820" },
      { name: "Yellow / Red", body: "#e4ff6a", collar: "#e10600" },
    ],
  },
  {
    slug: "ink-stripe",
    name: "Monaco 55",
    number: "55",
    price: 90,
    category: "Pit",
    summary: "A green pit jersey with a white number. One accent, no extra graphics.",
    fabric: "145gsm polyester",
    fit: "Race cut",
    details: [
      "White yoke and cuffs against the green body.",
      "Number sits in the same place as Grid 44.",
      "Collar opening is finished in the body color.",
    ],
    colors: [
      { name: "Green / White", body: "#0e7a4b", collar: "#f4f6f8" },
      { name: "Green / Carbon", body: "#0b5e3a", collar: "#141820" },
    ],
  },
  {
    slug: "daybreak",
    name: "Pit 7",
    number: "07",
    price: 84,
    category: "Pit",
    summary: "Silver body, red yoke, a small number. The spare jersey that still looks like it belongs on the grid.",
    fabric: "145gsm polyester",
    fit: "Race cut",
    details: [
      "Silver cloth takes the sheen of a pit suit without the bulk.",
      "Red collar and side panels are the only color.",
      "Cut matches the rest of the garage, size for size.",
    ],
    colors: [
      { name: "Silver / Red", body: "#9aa3b2", collar: "#e10600" },
      { name: "Silver / Carbon", body: "#b7c0cc", collar: "#141820" },
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
