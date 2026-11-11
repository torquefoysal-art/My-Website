export const profile = {
  name: "Foysal Islam",
  role: "Web developer",
  github: "https://github.com/torquefoysal-art",
  repository: "https://github.com/torquefoysal-art/My-Website",
} as const;

export const disciplines = [
  "Interfaces",
  "Design systems",
  "Three-dimensional web",
  "Typography",
  "Performance",
  "Next.js",
  "Accessibility",
] as const;

export const studies = [
  {
    id: "nur",
    index: "01",
    title: "Nur",
    summary: "A reading room for long writing.",
    detail:
      "A study in measure and night. One column, type that can hold a paragraph, and a dark theme that is actually dark. Nothing on the page competes with the sentence.",
    tags: ["Editorial", "Type", "2026"],
    mood: "ivory",
  },
  {
    id: "sahn",
    index: "02",
    title: "Sahn",
    summary: "A courtyard for an architecture practice.",
    detail:
      "A study with almost no chrome. Large type, a quiet grid, and plans drawn as line. The site behaves like a room you enter, not a brochure you scroll past.",
    tags: ["Studio site", "Layout", "2026"],
    mood: "green",
  },
  {
    id: "miqyas",
    index: "03",
    title: "Miqyas",
    summary: "Instruments for reading a product.",
    detail:
      "A study in calm instrumentation. Dense numbers, a steady grid, and no neon dashboard. The interface stays legible when the data gets heavy.",
    tags: ["Product", "Systems", "2026"],
    mood: "gold",
  },
] as const;

export type SceneMood = (typeof studies)[number]["mood"];

export const method = [
  {
    title: "Listen",
    text: "Find the real constraint before drawing anything. Speed, tone, content, and who the page is for.",
  },
  {
    title: "Shape",
    text: "Set the structure, the type, and the motion together. The surface is not a coat of paint at the end.",
  },
  {
    title: "Build",
    text: "Engineer it in the open. Accessible markup, a fast load, and interaction that still makes sense without decoration.",
  },
  {
    title: "Refine",
    text: "Leave it quieter and quicker than it started. The last ten percent is where a page starts to feel inevitable.",
  },
] as const;

export const capabilities = [
  ["Language", "TypeScript, modern CSS, semantic HTML"],
  ["Interface", "React, Next.js, design systems"],
  ["Motion", "WebGL, considered transitions, reduced-motion support"],
  ["Quality", "Accessibility, performance, careful release"],
] as const;
