import type { Metadata } from "next";
import {
  Plane, Clock, ShieldCheck,
  MapPin, CheckCircle, ArrowRight,
} from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Airport Taxi Goa — Dabolim & Mopa Airport Transfer",
  description:
    "Reliable airport taxi in Goa. Pickup and drop to Dabolim (GOI) and Mopa (Manohar) airport from anywhere in Goa. 24x7, fixed fares, flight tracking. Book Sandy Taxi +91 91486 80513.",
  alternates: {
    canonical: "http://sandytaxiservice.com/services/airport-transfer",
  },
  openGraph: {
    title: "Airport Taxi Goa — Dabolim & Mopa Airport Transfer",
    description:
      "24x7 airport cab in Goa. Fixed fares, on-time pickup, flight tracking. Dabolim & Mopa airports.",
    url: "http://sandytaxiservice.com/services/airport-transfer",
  },
};

const FEATURES = [
  {
    icon: Clock,
    title: "24x7 Availability",
    desc: "Early morning departures, late night arrivals — we're always on time regardless of your flight schedule.",
  },
  {
    icon: Plane,
    title: "Flight Tracking",
    desc: "We monitor your flight status in real time. Delayed? We adjust. You won't be left waiting.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed Airport Fares",
    desc: "No surge pricing, no meter surprises. Your fare is fixed and confirmed when you book.",
  },
  {
    icon: MapPin,
    title: "Both Airports Covered",
    desc: "We serve both Dabolim (South Goa) and Mopa Manohar International Airport (North Goa).",
  },
];

const INCLUSIONS = [
  "Pickup from your hotel, resort or home address",
  "Drop to Dabolim (GOI) or Mopa airport terminal",
  "Meet & greet on arrival with name board",
  "Help with luggage loading and unloading",
  "AC vehicle throughout the journey",
  "Real-time flight monitoring for arrivals",
  "WhatsApp updates on driver location",
  "No hidden charges — fare confirmed at booking",
];

const AIRPORTS = [
  {
    name: "Dabolim Airport (GOI)",
    code: "GOI",
    area: "South Goa",
    note: "Serving Vasco da Gama, Panaji, Margao, Calangute, Candolim & all of North Goa",
  },
  {
    name: "Mopa Manohar Airport",
    code: "GOX",
    area: "North Goa",
    note: "Serving Calangute, Candolim, Anjuna, Vagator, Mapusa & all of North Goa",
  },
];

// Service JSON-LD schema
function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Airport Taxi Transfer Goa",
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
    areaServed: { "@type": "State", name: "Goa" },
    description:
      "Reliable airport taxi transfers in Goa. Pickup and drop to Dabolim and Mopa airports. Fixed fares, 24x7 availability, flight tracking.",
    offers: {
      "@type": "Offer",
      description: "Fixed fare airport taxi in Goa",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AirportTransferPage() {
  return (
    <>
      <ServiceSchema />
      <ServicePageLayout
        badge="Airport Transfer Goa"
        title="Airport Taxi in"
        titleHighlight="Goa"
        description="On-time pickup and drop to Dabolim and Mopa airports from anywhere in Goa. Fixed fares, flight tracking and 24x7 availability — so your journey starts stress-free."
        icon={<Plane size={28} />}
      >

        {/* ── Airport cards ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Airports We <span className="text-sandy-gold">Serve</span>
              </h2>
              <p className="text-white/45 text-base max-w-xl mx-auto">
                We cover both major airports in Goa — for arrivals and departures.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {AIRPORTS.map((airport) => (
                <div
                  key={airport.code}
                  className="card-dark p-7 hover:border-sandy-gold/35 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sandy-gold/10 flex items-center justify-center">
                      <Plane size={20} className="text-sandy-gold" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white text-base">
                        {airport.name}
                      </p>
                      <span className="badge-cyan text-[10px] py-0.5 px-2">
                        {airport.area}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {airport.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="section-pad bg-night-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Why Book Airport Taxi{" "}
                <span className="text-sandy-gold">With Us</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card-dark p-7 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sandy-gold/10 flex items-center justify-center">
                    <Icon size={20} className="text-sandy-gold" />
                  </div>
                  <h3 className="font-display font-bold text-white text-base">
                    {title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's included ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                What&apos;s <span className="text-sandy-gold">Included</span>
              </h2>
            </div>
            <div className="card-dark p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-goa-cyan mt-0.5 shrink-0"
                    />
                    <span className="text-white/65 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex justify-center"
                >
                  Book Airport Taxi
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </ServicePageLayout>
    </>
  );
}