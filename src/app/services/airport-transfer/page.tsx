import type { Metadata } from "next";
import {
  Plane, Clock, ShieldCheck,
  MapPin, CheckCircle, ArrowRight,
} from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Airport Taxi Goa — Dabolim, Mopa, Hubli, Belagavi & Sindhudurg",
  description:
    "Reliable airport taxi in Goa and nearby airports. Pickup and drop to Dabolim (GOI), Mopa (GOX), Hubli, Belagavi and Sindhudurg airports. 24x7, fixed fares, flight tracking. Sandy Taxi +9191486 80513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/services/airport-transfer",
  },
  openGraph: {
    title: "Airport Taxi Goa — Dabolim, Mopa, Hubli, Belagavi & Sindhudurg",
    description:
      "24x7 airport cab from Goa. Fixed fares, flight tracking. Dabolim, Mopa, Hubli, Belagavi & Sindhudurg airports covered.",
    url: "https://www.sandytaxiservice.com/services/airport-transfer",
  },
};

const FEATURES = [
  {
    icon: Clock,
    title: "24x7 Availability",
    desc: "Early morning departures, late night arrivals — we are always on time regardless of your flight schedule.",
  },
  {
    icon: Plane,
    title: "Flight Tracking",
    desc: "We monitor your flight status in real time. Delayed? We adjust. You won&apos;t be left waiting.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed Airport Fares",
    desc: "No surge pricing, no meter surprises. Your fare is fixed and confirmed when you book.",
  },
  {
    icon: MapPin,
    title: "5 Airports Covered",
    desc: "Dabolim, Mopa, Hubli, Belagavi and Sindhudurg — we cover all major airports in and around Goa.",
  },
];

const INCLUSIONS = [
  "Pickup from your hotel, resort or home address",
  "Drop to your chosen airport terminal",
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
    distance: "~30 km from Candolim",
    note: "Serving Vasco da Gama, Panaji, Margao, Calangute, Candolim & all of North Goa.",
    accent: "gold",
  },
  {
    name: "Mopa Manohar Airport (GOX)",
    code: "GOX",
    area: "North Goa",
    distance: "~45 km from Candolim",
    note: "Serving Calangute, Candolim, Anjuna, Vagator, Mapusa & all of North Goa.",
    accent: "cyan",
  },
  {
    name: "Hubli Airport (HBX)",
    code: "HBX",
    area: "Karnataka",
    distance: "~180 km from Goa",
    note: "Ideal for passengers flying into Hubli and travelling to Goa by road. Comfortable AC cab service available.",
    accent: "pink",
  },
  {
    name: "Belagavi Airport (IXG)",
    code: "IXG",
    area: "Karnataka",
    distance: "~160 km from Goa",
    note: "Belagavi (Belgaum) airport transfers to and from Goa. Smooth highway drive through the Western Ghats.",
    accent: "gold",
  },
  {
    name: "Sindhudurg Airport (SDW)",
    code: "SDW",
    area: "Maharashtra",
    distance: "~110 km from Goa",
    note: "Chipi Sindhudurg airport — serving passengers travelling between coastal Maharashtra and Goa.",
    accent: "cyan",
  },
];

const AIRPORT_ACCENT = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold", border: "hover:border-sandy-gold/35", badge: "badge-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan",   border: "hover:border-goa-cyan/35",   badge: "badge-cyan" },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink", border: "hover:border-beach-pink/35", badge: "badge-pink" },
};

const FARES = [
  { from: "Goa (Candolim)",  to: "Dabolim Airport",    price: "₹1800–2000"   },
  { from: "Goa (Candolim)",  to: "Mopa Airport",        price: "₹1800–2000" },
  { from: "Goa",             to: "Hubli Airport",        price: "₹12000–15000" },
  { from: "Goa",             to: "Belagavi Airport",     price: "₹8000–12000" },
  { from: "Goa",             to: "Sindhudurg Airport",   price: "₹6000–8000" },
];

// Service JSON-LD schema
function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Airport Taxi Transfer — Goa, Hubli, Belagavi & Sindhudurg",
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
    areaServed: [
      { "@type": "State", name: "Goa"         },
      { "@type": "State", name: "Karnataka"   },
      { "@type": "State", name: "Maharashtra" },
    ],
    description:
      "Reliable airport taxi transfers in Goa and nearby airports. Covering Dabolim, Mopa, Hubli, Belagavi and Sindhudurg airports. Fixed fares, 24x7 availability, flight tracking.",
    offers: {
      "@type": "Offer",
      description: "Fixed fare airport taxi — Goa, Hubli, Belagavi & Sindhudurg",
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
        badge="Airport Transfer — Goa & Nearby"
        title="Airport Taxi from"
        titleHighlight="Goa"
        description="On-time pickup and drop to Dabolim, Mopa, Hubli, Belagavi and Sindhudurg airports. Fixed fares, real-time flight tracking and 24x7 availability — your journey starts stress-free."
        icon={<Plane size={28} />}
      >

        {/* ── Airport cards ── */}
        <section className="section-pad bg-[#080810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Airports We <span className="text-sandy-gold">Cover</span>
              </h2>
              <p className="text-white/45 text-base max-w-xl mx-auto">
                We cover all major airports in and around Goa — arrivals and departures.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AIRPORTS.map((airport) => {
                const styles = AIRPORT_ACCENT[airport.accent as keyof typeof AIRPORT_ACCENT];
                return (
                  <div
                    key={airport.code}
                    className={`card-dark p-7 ${styles.border} transition-colors`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${styles.bg}`}>
                        <Plane size={20} className={styles.text} />
                      </div>
                      <div>
                        <p className="font-display font-bold text-white text-base leading-snug">
                          {airport.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${styles.bg} ${styles.text}`}>
                            {airport.code}
                          </span>
                          <span className="text-white/35 text-[10px]">{airport.area}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <MapPin size={11} className="text-white/30 shrink-0" />
                      <span className="text-white/30 text-xs">{airport.distance}</span>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {airport.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Fare table ── */}
        <section className="section-pad bg-night-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Airport Fare <span className="text-sandy-gold">Guide</span>
              </h2>
              <p className="text-white/45 text-base">
                Approximate fares — confirmed at booking. No hidden charges.
              </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block card-dark overflow-hidden mb-4">
              <div className="h-[3px] brand-gradient" />
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">From</th>
                    <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">To</th>
                    <th className="text-center px-6 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">Approx Fare</th>
                    <th className="text-right px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {FARES.map((fare) => (
                    <tr
                      key={`${fare.from}-${fare.to}`}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-6 py-4 text-white/60">{fare.from}</td>
                      <td className="px-6 py-4 font-display font-bold text-white">{fare.to}</td>
                      <td className="px-6 py-4 text-center font-display font-extrabold text-sandy-gold">
                        {fare.price}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-goa-cyan hover:text-white transition-colors"
                        >
                          Book →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-3 mb-4">
              {FARES.map((fare) => (
                <div
                  key={`${fare.from}-${fare.to}`}
                  className="card-dark p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-white font-display font-bold text-sm">
                      {fare.from} → {fare.to}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-extrabold text-sandy-gold">{fare.price}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-goa-cyan text-xs"
                    >
                      Book →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/25 text-xs text-center">
              Fares are approximate and may vary by vehicle type. Contact us for exact quote.
            </p>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="section-pad bg-[#080810]">
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
        <section className="section-pad bg-night-navy">
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
                    <CheckCircle size={16} className="text-goa-cyan mt-0.5 shrink-0" />
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