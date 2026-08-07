import type { MetadataRoute } from "next";

const projectSlugs = [
  "aura-residence",
  "haven-residence",
  "terra-bedroom",
  "noir-kitchen",
  "linea-living",
  "forma-suite",
];

const journalSlugs = [
  "value-of-restraint",
  "how-to-begin-an-interior-project",
  "smart-living-should-feel-invisible",
  "why-thoughtful-interiors-matter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projectSlugs.map((slug) => ({
  url: `https://jovata.design/portfolio/${slug}`,
  lastModified: new Date(),
}));

const journalPages = journalSlugs.map((slug) => ({
  url: `https://jovata.design/journal/${slug}`,
  lastModified: new Date(),
}));


  return [
    {
      url: "https://jovata.design",
      lastModified: new Date(),
    },
    {
      url: "https://jovata.design/about",
      lastModified: new Date(),
    },
    {
      url: "https://jovata.design/services",
      lastModified: new Date(),
    },
    {
      url: "https://jovata.design/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://jovata.design/journal",
      lastModified: new Date(),
    },
    {
      url: "https://jovata.design/contact",
      lastModified: new Date(),
    },

      ...projectPages,
      ...journalPages,

    ];
}