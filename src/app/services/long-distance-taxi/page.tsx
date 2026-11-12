import type { Metadata } from "next";
import {
  Navigation, Clock, ShieldCheck,
  Coffee, CheckCircle, MapPin,
} from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { OUTSTATION_ROUTES, WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Long Distance Taxi from Goa — Intercity Cab | Sandy Taxi",
  description:
    "Book a long distance taxi from Goa to Mumbai, Pune, Bangalore, Hyderabad, Mangalore and more. Comfortable AC vehicle, experienced driver, planned rest stops. Sandy Taxi +9191486 80513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/services/long-distance-taxi",
  },
  openGraph: {
    title: "Long Distance Taxi from Goa — Intercity Cab | Sandy Taxi",
    description:
      "Long distance cab from Goa. Mumbai, Pune, Bangalore, Hyderabad and more. Comfortable AC ride, fixed fares.",
    url: "https://www.sandytaxiservice.com/services/long-distance-taxi",
  },
};

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Highway Experienced",
    desc: "Sandy has driven long distance routes for years — knows every highway, toll and rest stop.",
    accent: "gold",
  },
  {
    icon: Coffee,
    title: "Planned Rest Stops",
    desc: "Long journeys include planned halts at clean, comfortable dhabas and rest areas.",
    accent: "cyan",
  },
  {
    icon: Clock,
    title: "Depart at Your Time",
    desc: "Early morning, afternoon or evening departure — your schedule, your comfort.",
    accent: "pink",
  },
  {
    icon: Navigation,
    title: "Door to Door",
    desc: "Pickup from your exact location in Goa, drop at your destination address. No transfers.",
    accent: "gold",
  },
];

const ACCENT_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink" },
};

export default function LongDistanceTaxiPage() {
  return (
    <ServicePageLayout
      badge="Long Distance Taxi Goa"
      title="Long Distance Cab from"
      titleHighlight="Goa"
      description="Comfortable intercity taxi from Goa to Mumbai, Pune, Bangalore, Hyderabad and beyond. AC vehicle, experienced highway driver, planned rest stops — door to door at a fixed fare."
      icon={<Navigation size={28} />}
    >

      {/* ── Routes ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Popular Long Distance{" "}
              <span className="text-sandy-gold">Routes</span>
            </h2>
            <p className="text-white/45 text-base">
              One-way fares. Contact us for round-trip and custom route pricing.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block card-dark overflow-hidden mb-4">
            <div className="h-[3px] brand-gradient" />
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">Route</th>
                  <th className="text-center px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">Distance</th>
                  <th className="text-center px-6 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">One-way Fare</th>
                  <th className="text-right px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">Book</th>
                </tr>
              </thead>
              <tbody>
                {OUTSTATION_ROUTES.map((route) => (
                  <tr
                    key={route.to}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-beach-pink shrink-0" />
                        <span className="text-white/60">{route.from}</span>
                        <ArrowRight size={13} className="text-white/20" />
                        <span className="font-display font-bold text-white">{route.to}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-white/50">{route.km} km</td>
                    <td className="px-6 py-5 text-center font-display font-extrabold text-sandy-gold text-lg">
                      {route.price}
                    </td>
                    <td className="px-6 py-5 text-right">
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
            {OUTSTATION_ROUTES.map((route) => (
              <div
                key={route.to}
                className="card-dark p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-beach-pink shrink-0" />
                  <div>
                    <p className="text-white font-display font-bold text-sm">
                      {route.from} → {route.to}
                    </p>
                    <p className="text-white/35 text-xs">{route.km} km</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display font-extrabold text-sandy-gold">
                    {route.price}
                  </p>
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
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Why Travel Long Distance{" "}
              <span className="text-sandy-gold">With Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, accent }) => {
              const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
              return (
                <div key={title} className="card-dark p-7 flex flex-col gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <Icon size={20} className={styles.text} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Inclusions ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-dark p-8">
            <h2 className="font-display font-bold text-white text-2xl mb-6 text-center">
              What&apos;s <span className="text-sandy-gold">Included</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Door-to-door pickup and drop",
                "AC Sedan or SUV — your choice",
                "Experienced long distance driver",
                "Planned comfort and meal stops",
                "Toll charges included in fare",
                "One-way and round-trip available",
                "Flexible departure time",
                "WhatsApp updates throughout trip",
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

    </ServicePageLayout>
  );
}