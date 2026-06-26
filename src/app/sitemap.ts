import type { MetadataRoute } from "next";

const BASE_URL = "http://sandytaxiservice.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Core pages ────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tariff`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // ── Service pages ─────────────────────────────────────────
  const servicesSlugs = [
    "airport-transfer",
    "goa-sightseeing-taxi",
    "outstation-taxi",
    "corporate-taxi",
    "luxury-cab-goa",
    "long-distance-taxi",
    "city-taxi-goa",
    "round-trip-taxi",
  ];

  const servicePages: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── Location pages ────────────────────────────────────────
  const locationSlugs = [
    "candolim-taxi",
    "north-goa-taxi",
    "south-goa-taxi",
    "calangute-taxi",
    "panaji-taxi",
    "goa-airport-taxi",
  ];

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // ── Destination pages ─────────────────────────────────────
  const destinationSlugs = [
    "goa-beach-taxi",
    "dudhsagar-falls-taxi",
    "old-goa-churches-taxi",
    "spice-plantation-taxi",
  ];

  const destinationPages: MetadataRoute.Sitemap = destinationSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/destinations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  return [
    ...corePages,
    ...servicePages,
    ...locationPages,
    ...destinationPages,
  ];
}