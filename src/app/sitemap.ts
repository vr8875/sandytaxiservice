import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sandytaxiservice.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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

  const locationSlugs = [
    "candolim-taxi",
    "north-goa-taxi",
    "south-goa-taxi",
    "calangute-taxi",
    "goa-airport-taxi",
  ];

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const destinationSlugs = [
    "dudhsagar-falls-taxi",
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