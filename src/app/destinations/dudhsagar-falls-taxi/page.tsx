import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin, Clock, Car, CheckCircle,
  Navigation, Sun, ShieldCheck, Camera,
} from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import { WHATSAPP_URL, DUDHSAGAR_PRICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Taxi to Dudhsagar Falls Goa — Day Trip Cab | Sandy Taxi",
  description:
    "Book a taxi to Dudhsagar Falls from anywhere in Goa. Full day round trip cab service to India's tallest waterfall. Fixed fares, experienced driver. Sandy Taxi +9191486 80513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/destinations/dudhsagar-falls-taxi",
  },
  openGraph: {
    title: "Taxi to Dudhsagar Falls Goa — Day Trip Cab | Sandy Taxi",
    description:
      "Full day taxi to Dudhsagar Falls from Goa. Round trip, fixed fares, experienced driver.",
    url: "https://www.sandytaxiservice.com/destinations/dudhsagar-falls-taxi",
  },
};

function DudhsagarSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Taxi to Dudhsagar Falls — Day Trip from Goa",
    description:
      "Full day taxi round trip to Dudhsagar Falls, Goa. Pickup and drop from your hotel or location in Goa.",
    touristType: "Adventure tourists, nature lovers, sightseers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Pickup from your location in Goa",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Drive to Dudhsagar Falls via Mollem National Park",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Visit Dudhsagar Falls — explore and enjoy",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Drop back to your hotel in Goa",
        },
      ],
    },
    provider: {
      "@type": "TaxiService",
      name: "Sandy Taxi Service",
      telephone: "+919148680513",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Candolim",
        addressRegion: "Goa",
        addressCountry: "IN",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const TRIP_HIGHLIGHTS = [
  {
    icon: Navigation,
    title: "Distance from Candolim",
    value: "~90 km",
    desc: "Approx 2.5 to 3 hours drive each way through Goa&apos;s lush interior.",
    accent: "gold",
  },
  {
    icon: Sun,
    title: "Best Time to Visit",
    value: "Jun – Dec",
    desc: "Monsoon and post-monsoon season when the falls are at peak flow and most spectacular.",
    accent: "cyan",
  },
  {
    icon: Clock,
    title: "Trip Duration",
    value: "Full Day",
    desc: "Depart early morning, spend 2–3 hours at the falls, return by evening.",
    accent: "pink",
  },
  {
    icon: Camera,
    title: "Falls Height",
    value: "310 m",
    desc: "One of India&apos;s tallest waterfalls — a four-tiered cascade on the Goa–Karnataka border.",
    accent: "gold",
  },
];

const ACCENT_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold", border: "hover:border-sandy-gold/35" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan",   border: "hover:border-goa-cyan/35"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink", border: "hover:border-beach-pink/35" },
};

const ITINERARY = [
  {
    time: "06:30 AM",
    title: "Pickup from your hotel",
    desc: "Early morning departure from your hotel or resort in Goa for the best experience.",
  },
  {
    time: "09:00 AM",
    title: "Arrive at Dudhsagar",
    desc: "Reach the falls entry point. Your driver will wait while you trek to the viewpoint.",
  },
  {
    time: "09:00 – 12:00",
    title: "Explore the falls",
    desc: "Enjoy the falls, take photos, swim in the natural pool (seasonal). Time is yours.",
  },
  {
    time: "12:30 PM",
    title: "Depart back to Goa",
    desc: "Begin the return journey. Optional stop for lunch at a local dhaba on the way.",
  },
  {
    time: "03:30 PM",
    title: "Drop at your hotel",
    desc: "Back at your hotel in North or South Goa by afternoon.",
  },
];

const WHAT_TO_KNOW = [
  "Entry permits for Dudhsagar are required — obtained at the forest check post",
  "Only jeeps are allowed inside the forest — your cab drops you at the jeep point",
  "Jeep charges and entry fees are paid separately at the spot (not included in cab fare)",
  "Wear comfortable shoes — the trek to the falls involves walking on uneven terrain",
  "Carry water, snacks and a change of clothes if you plan to swim",
  "Mobile network is weak inside the forest — inform your driver of your return time",
  "Best visited June to December — falls may be dry in summer months",
  "Book your cab the night before to secure an early morning slot",
];

export default function DudhsagarFallsTaxiPage() {
  return (
    <>
      <DudhsagarSchema />
      <LocationPageLayout
        badge="Dudhsagar Falls Day Trip"
        title="Taxi to Dudhsagar"
        titleHighlight="Falls, Goa"
        description="One of India&apos;s tallest and most spectacular waterfalls — just a day trip away from anywhere in Goa. Book your round trip cab with Sandy Taxi and make it a day to remember."
        icon={<Navigation size={28} />}
        areaName="Dudhsagar Falls"
      >

        {/* ── Hero image section ── */}
        <section className="bg-[#080810]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 pt-0">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/5">

              {/* Image */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
                <Image
                  src="/dudhsagar.jpg"
                  alt="Dudhsagar Falls Goa — Four-tiered waterfall in Mollem National Park"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,16,0.85) 0%, rgba(8,8,16,0.2) 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* Caption over image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-1">
                      Dudhsagar Falls
                    </h2>
                    <p className="text-white/60 text-sm flex items-center gap-2">
                      <MapPin size={13} className="text-sandy-gold" />
                      Mollem National Park · Goa–Karnataka Border
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-white/40 text-xs mb-1">Starting from</p>
                    <p className="font-display font-extrabold text-sandy-gold text-2xl">
                      ₹3,500
                    </p>
                    <p className="text-white/40 text-xs">round trip</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Trip highlights ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                About the <span className="text-sandy-gold">Trip</span>
              </h2>
              <p className="text-white/45 text-base max-w-lg mx-auto">
                Everything you need to know about the Dudhsagar day trip from Goa.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TRIP_HIGHLIGHTS.map(({ icon: Icon, title, value, desc, accent }) => {
                const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
                return (
                  <div
                    key={title}
                    className={`card-dark p-7 flex flex-col gap-3 ${styles.border} transition-colors`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.bg}`}>
                      <Icon size={20} className={styles.text} />
                    </div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{title}</p>
                    <p className={`font-display font-extrabold text-2xl ${styles.text}`}>{value}</p>
                    <p
                      className="text-white/45 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="section-pad bg-night-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Dudhsagar Trip <span className="text-sandy-gold">Fares</span>
              </h2>
              <p className="text-white/45 text-base">
                Round trip — pickup and drop included. Jeep & entry fees paid separately at the spot.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {DUDHSAGAR_PRICES.map(({ vehicle, price }) => (
                <div
                  key={vehicle}
                  className="card-dark p-7 text-center hover:border-goa-cyan/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-goa-cyan/10 flex items-center justify-center mx-auto mb-4">
                    <Car size={22} className="text-goa-cyan" />
                  </div>
                  <p className="font-display font-bold text-white text-lg mb-1">{vehicle}</p>
                  <p className="font-display font-extrabold text-goa-cyan text-3xl mb-2">{price}</p>
                  <p className="text-white/35 text-xs mb-5">Pickup &amp; Drop · Full Day</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-sm py-3"
                  >
                    Book {vehicle}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Itinerary ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Sample <span className="text-sandy-gold">Itinerary</span>
              </h2>
              <p className="text-white/45 text-base">
                A typical Dudhsagar day trip schedule from North Goa.
              </p>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/5" />

              <div className="space-y-6">
                {ITINERARY.map(({ time, title, desc }, index) => (
                  <div key={index} className="flex gap-5 items-start">
                    {/* Dot */}
                    <div className="w-10 h-10 rounded-full bg-sandy-gold/10 border border-sandy-gold/30 flex items-center justify-center shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-sandy-gold" />
                    </div>
                    <div className="card-dark p-5 flex-1">
                      <p className="text-sandy-gold text-xs font-mono font-bold mb-1">{time}</p>
                      <p className="font-display font-bold text-white text-base mb-1">{title}</p>
                      <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What to know ── */}
        <section className="section-pad bg-night-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Important <span className="text-sandy-gold">Things to Know</span>
              </h2>
            </div>
            <div className="card-dark p-8">
              <div className="space-y-4">
                {WHAT_TO_KNOW.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-goa-cyan mt-0.5 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery strip ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                The <span className="text-sandy-gold">Experience</span>
              </h2>
              <p className="text-white/40 text-sm">
                Dudhsagar is best visited between June and December when the falls are at full power.
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              {[
                { value: "310 m",  label: "Falls Height"      },
                { value: "4",      label: "Tiers"             },
                { value: "~90 km", label: "From Candolim"     },
                { value: "Jun–Dec",label: "Best Season"       },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-6 px-4 bg-night-navy/60 text-center"
                >
                  <span className="font-display font-extrabold text-sandy-gold text-xl leading-none mb-1">
                    {value}
                  </span>
                  <span className="text-white/35 text-xs uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </LocationPageLayout>
    </>
  );
}