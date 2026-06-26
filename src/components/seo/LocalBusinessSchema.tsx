import { BUSINESS } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: BUSINESS.name,
    description:
      "Sandy Taxi Service provides reliable, affordable 24x7 taxi services in Goa including airport transfers, sightseeing tours, outstation trips, and corporate cab services. Based in Candolim, North Goa.",
    url: "http://sandytaxiservice.com",
    telephone: `+91${BUSINESS.phone}`,
    image: "http://sandytaxiservice.com/og-image.jpg",
    logo: "http://sandytaxiservice.com/logo.png",
    priceRange: "₹₹",
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Goa" },
      { "@type": "Place", name: "North Goa" },
      { "@type": "Place", name: "South Goa" },
      { "@type": "Place", name: "Candolim" },
      { "@type": "Place", name: "Calangute" },
      { "@type": "Place", name: "Baga" },
      { "@type": "Place", name: "Anjuna" },
      { "@type": "Place", name: "Panaji" },
      { "@type": "Place", name: "Margao" },
      { "@type": "Place", name: "Vasco da Gama" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taxi Services in Goa",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer Goa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Goa Sightseeing Taxi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outstation Taxi from Goa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Taxi Goa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Cab Goa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "North Goa Taxi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "South Goa Taxi" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviews,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.google.com/maps/place/Sandy+Taxi+Service",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}