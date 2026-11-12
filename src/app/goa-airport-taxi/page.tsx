import type { Metadata } from "next";
import {
  Plane, Clock, MapPin,
  ShieldCheck, CheckCircle, ArrowRight,
} from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import { WHATSAPP_URL, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Goa Airport Taxi — Dabolim & Mopa Airport Cab | Sandy Taxi",
  description:
    "Pre-book airport taxi in Goa. Cab service to and from Dabolim (GOI) and Mopa Manohar International Airport. 24x7, fixed fares, meet & greet. Sandy Taxi +918793680513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/goa-airport-taxi",
  },
  openGraph: {
    title: "Goa Airport Taxi — Dabolim & Mopa Airport Cab",
    description:
      "Pre-book airport cab in Goa. Fixed fares, meet & greet, 24x7. Dabolim & Mopa airports.",
    url: "https://www.sandytaxiservice.com/goa-airport-taxi",
  },
};

// Airport-specific schema
function AirportTaxiSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Goa Airport Taxi — Sandy Taxi Service",
    telephone: `+91${BUSINESS.phone}`,
    url: "https://www.sandytaxiservice.com/goa-airport-taxi",
    description:
      "Airport taxi transfers to and from Dabolim and Mopa airports in Goa. Fixed fares, 24x7 service, meet & greet on arrival.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Candolim",
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Airport", name: "Goa International Airport", iataCode: "GOI" },
      { "@type": "Airport", name: "Manohar International Airport", iataCode: "GOX" },
    ],
    openingHours: "Mo-Su 00:00-23:59",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const AIRPORTS = [
  {
    name: "Dabolim Airport",
    code: "GOI",
    location: "South Goa — Vasco da Gama",
    desc: "Goa's main international airport. Serves most domestic and international flights. Around 30 km from Candolim and 45 km from most North Goa beaches.",
    fares: [
      { route: "Dabolim → Candolim / Calangute",  price: "₹900–1,100"  },
      { route: "Dabolim → Baga / Anjuna",          price: "₹1,000–1,200" },
      { route: "Dabolim → Panaji",                  price: "₹700–900"   },
      { route: "Dabolim → Margao",                  price: "₹400–600"   },
      { route: "Dabolim → Palolem",                 price: "₹1,200–1,500"},
    ],
    accent: "gold",
  },
  {
    name: "Mopa Manohar Airport",
    code: "GOX",
    location: "North Goa — Pernem",
    desc: "Goa's newest international airport in Pernem, North Goa. Much closer to North Goa beaches. Rapidly growing with new airline routes being added.",
    fares: [
      { route: "Mopa → Candolim / Calangute",  price: "₹1,200–1,500" },
      { route: "Mopa → Baga / Anjuna",          price: "₹1,100–1,400" },
      { route: "Mopa → Vagator / Morjim",       price: "₹800–1,000"  },
      { route: "Mopa → Panaji",                  price: "₹1,000–1,200" },
      { route: "Mopa → Arambol",                 price: "₹600–800"   },
    ],
    accent: "cyan",
  },
];

const ACCENT_STYLES = {
  gold: { border: "hover:border-sandy-gold/40", text: "text-sandy-gold", bg: "bg-sandy-gold/10", badge: "badge-gold" },
  cyan: { border: "hover:border-goa-cyan/40",   text: "text-goa-cyan",   bg: "bg-goa-cyan/10",   badge: "badge-cyan" },
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "WhatsApp Your Details",
    desc: "Send us your flight number, arrival date, and pickup/drop location on WhatsApp.",
  },
  {
    step: "02",
    title: "We Confirm & Track",
    desc: "We confirm your fare, monitor your flight in real time and adjust for delays.",
  },
  {
    step: "03",
    title: "Meet at Arrival",
    desc: "Your driver meets you at the arrivals gate with a name board — no waiting, no confusion.",
  },
  {
    step: "04",
    title: "Comfortable Ride",
    desc: "Relax in a clean AC vehicle and reach your hotel or destination at a fixed fare.",
  },
];

export default function GoaAirportTaxiPage() {
  return (
    <>
      <AirportTaxiSchema />
      <LocationPageLayout
        badge="Goa Airport Taxi"
        title="Airport Taxi in"
        titleHighlight="Goa"
        description="Pre-book your airport cab in Goa and arrive stress-free. We serve both Dabolim (GOI) and Mopa Manohar Airport (GOX) — 24x7, fixed fares, meet & greet on arrival."
        icon={<Plane size={28} />}
        areaName="Goa"
      >

        {/* ── Airport fare tables ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Airport Fares &amp;{" "}
                <span className="text-sandy-gold">Routes</span>
              </h2>
              <p className="text-white/45 text-base max-w-lg mx-auto">
                Fixed fares from both Goa airports to all major hotels and beaches.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {AIRPORTS.map(({ name, code, location, desc, fares, accent }) => {
                const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
                return (
                  <div key={code} className={`card-dark overflow-hidden ${styles.border} transition-colors`}>
                    <div className="h-[3px] brand-gradient" />
                    <div className="p-7">

                      {/* Airport header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${styles.bg}`}>
                          <Plane size={22} className={styles.text} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display font-bold text-white text-xl">{name}</h3>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${styles.bg} ${styles.text}`}>
                              {code}
                            </span>
                          </div>
                          <p className="text-white/40 text-xs flex items-center gap-1">
                            <MapPin size={11} />
                            {location}
                          </p>
                        </div>
                      </div>

                      <p className="text-white/45 text-sm leading-relaxed mb-6">
                        {desc}
                      </p>

                      {/* Fare rows */}
                      <div className="space-y-2">
                        {fares.map(({ route, price }) => (
                          <div
                            key={route}
                            className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                          >
                            <div className="flex items-center gap-2">
                              <ArrowRight size={12} className={`${styles.text} shrink-0`} />
                              <span className="text-white/60 text-sm">{route}</span>
                            </div>
                            <span className={`font-display font-bold ${styles.text} text-sm`}>
                              {price}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full justify-center text-sm py-3"
                        >
                          Book {name} Taxi
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="section-pad bg-night-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                How Airport Booking{" "}
                <span className="text-sandy-gold">Works</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map(({ step, title, desc }) => (
                <div key={step} className="card-dark p-7 flex flex-col gap-4">
                  <span className="font-display font-extrabold text-4xl text-sandy-gold/20">
                    {step}
                  </span>
                  <h3 className="font-display font-bold text-white text-base">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Inclusions ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-dark p-8">
              <h2 className="font-display font-bold text-white text-2xl mb-6 text-center">
                Every Airport Ride{" "}
                <span className="text-sandy-gold">Includes</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Meet & greet at arrivals with name board",
                  "Real-time flight tracking",
                  "AC vehicle — Sedan, MUV or SUV",
                  "Luggage assistance",
                  "Fixed fare — no surprises",
                  "24x7 availability — any flight time",
                  "WhatsApp driver tracking updates",
                  "Adjustment for flight delays",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-goa-cyan mt-0.5 shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust signals ── */}
        <section className="py-12 bg-night-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              {[
                { icon: Clock,      value: "24x7",   label: "Available"      },
                { icon: ShieldCheck,value: "Fixed",  label: "No Surge Fare"  },
                { icon: Plane,      value: "Both",   label: "Airports"       },
                { icon: MapPin,     value: "All",    label: "Goa Covered"    },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-6 px-4 bg-night-navy/60 text-center"
                >
                  <Icon size={18} className="text-sandy-gold mb-2" />
                  <span className="font-display font-extrabold text-sandy-gold text-xl leading-none mb-1">
                    {value}
                  </span>
                  <span className="text-white/35 text-xs uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </LocationPageLayout>
    </>
  );
}