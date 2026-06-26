import type { Metadata } from "next";
import {
   MapPin,
  Star,  Car, Phone, MessageCircle,
} from "lucide-react";
import { BUSINESS, CALL_URL, REVIEWS } from "@/lib/constants";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import { Plane, Compass, Route } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi in Candolim Goa — 24x7 Cab Service | Sandy Taxi",
  description:
    "Looking for a taxi in Candolim, Goa? Sandy Taxi Service is based in Candolim and offers 24x7 cab service for airport transfers, sightseeing, outstation and local rides. Call +91 91486 80513.",
  alternates: {
    canonical: "http://sandytaxiservice.com/candolim-taxi",
  },
  openGraph: {
    title: "Taxi in Candolim Goa — 24x7 Cab Service | Sandy Taxi",
    description:
      "Candolim-based taxi service. 24x7 airport transfers, sightseeing & outstation. Call +91 91486 80513.",
    url: "http://sandytaxiservice.com/candolim-taxi",
  },
};

function CandolimSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Sandy Taxi Service — Candolim Goa",
    telephone: `+91${BUSINESS.phone}`,
    url: "http://sandytaxiservice.com/candolim-taxi",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: "Candolim",
      addressRegion: "Goa",
      postalCode: BUSINESS.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: [
      { "@type": "Place", name: "Candolim" },
      { "@type": "Place", name: "Calangute" },
      { "@type": "Place", name: "Sinquerim" },
      { "@type": "Place", name: "Nerul" },
      { "@type": "Place", name: "Aguada" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviews,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const NEARBY_AREAS = [
  { name: "Sinquerim",       km: "1 km"  },
  { name: "Nerul",           km: "3 km"  },
  { name: "Calangute",       km: "4 km"  },
  { name: "Aguada Fort",     km: "4 km"  },
  { name: "Baga",            km: "7 km"  },
  { name: "Anjuna",          km: "9 km"  },
  { name: "Panaji",          km: "14 km" },
  { name: "Mapusa",          km: "10 km" },
  { name: "Dabolim Airport", km: "30 km" },
  { name: "Mopa Airport",    km: "45 km" },
  { name: "Vagator",         km: "12 km" },
  { name: "Margao",          km: "40 km" },
];

const SERVICES_OFFERED = [
  { icon: Plane,   label: "Airport Transfer",  desc: "Dabolim & Mopa — fixed fares, flight tracking"  },
  { icon: Compass, label: "Sightseeing Tours", desc: "North & South Goa — full day & half day"        },
  { icon: Route,   label: "Outstation Trips",  desc: "Pune, Mumbai, Bangalore & beyond"               },
  { icon: Car,     label: "Local City Rides",  desc: "Beach to beach, hotel to market — 24x7"         },
];

export default function CandolimTaxiPage() {
  return (
    <>
      <CandolimSchema />
      <LocationPageLayout
        badge="Candolim, North Goa"
        title="Taxi in"
        titleHighlight="Candolim, Goa"
        description="Sandy Taxi Service is based right in Candolim — so when you need a cab, we are already nearby. 24x7 availability, fixed fares, and a local driver who knows every road in North Goa."
        icon={<MapPin size={28} />}
        areaName="Candolim"
      >

        {/* ── Why Candolim locals choose us ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div>
                <span className="badge-gold mb-5 inline-flex">
                  Based in Candolim
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-6">
                  Your Local Taxi in{" "}
                  <span className="text-sandy-gold">Candolim</span>
                </h2>
                <div className="space-y-4 text-white/55 text-base leading-relaxed">
                  <p>
                    Sandy Taxi Service is based in Ordra, Candolim — right in the
                    heart of North Goa&apos;s most popular tourist belt. Being local means
                    faster pickup times, zero travel surcharges, and a driver who
                    genuinely knows the area.
                  </p>
                  <p>
                    Whether you need an early morning ride to Dabolim airport, a
                    full-day sightseeing tour, or just a quick cab to Calangute or
                    Baga — we are always close by and ready.
                  </p>
                  <p>
                    Tourists and residents in Candolim trust Sandy Taxi for reliable,
                    punctual and affordable cab service — available 24 hours a day,
                    7 days a week.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  {[
                    { value: "24x7",  label: "Available"        },
                    { value: "5.0★",  label: "Google Rating"    },
                    { value: "Fixed", label: "Transparent Fare" },
                    { value: "Local", label: "Candolim Based"   },
                  ].map(({ value, label }) => (
                    <div key={label} className="card-dark p-4 text-center">
                      <p className="font-display font-extrabold text-sandy-gold text-xl">{value}</p>
                      <p className="text-white/35 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={`https://api.whatsapp.com/send?phone=${BUSINESS.whatsapp}&text=${encodeURIComponent(BUSINESS.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center"
                  >
                    <MessageCircle size={16} />
                    Book on WhatsApp
                  </a>
                  <a href={CALL_URL} className="btn-outline justify-center">
                    <Phone size={16} />
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {SERVICES_OFFERED.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="card-dark p-5 flex items-center gap-5 hover:border-sandy-gold/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-sandy-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-sandy-gold" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white text-base">{label}</p>
                      <p className="text-white/45 text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Nearby areas ── */}
        <section className="section-pad bg-night-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Areas We Cover from{" "}
                <span className="text-sandy-gold">Candolim</span>
              </h2>
              <p className="text-white/45 text-base max-w-lg mx-auto">
                We serve all nearby beaches, resorts and destinations from our Candolim base.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {NEARBY_AREAS.map(({ name, km }) => (
                <div
                  key={name}
                  className="card-dark p-4 flex items-center justify-between hover:border-goa-cyan/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-goa-cyan shrink-0" />
                    <span className="text-white/70 text-sm font-medium">{name}</span>
                  </div>
                  <span className="text-white/30 text-xs">{km}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                What Guests{" "}
                <span className="text-sandy-gold">Say</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REVIEWS.map((review) => (
                <div
                  key={review.name}
                  className="card-dark p-6 flex flex-col gap-4 hover:border-sandy-gold/25 transition-colors"
                >
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={13} className="text-sandy-gold fill-sandy-gold" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-sandy-gold/10 border border-sandy-gold/20 flex items-center justify-center">
                      <span className="text-sandy-gold font-bold text-xs">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{review.name}</p>
                      <p className="text-white/30 text-xs">Google Review</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </LocationPageLayout>
    </>
  );
}