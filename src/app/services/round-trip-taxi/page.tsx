import type { Metadata } from "next";
import {
  ArrowLeftRight, Clock, Wallet,
  CalendarCheck, CheckCircle, MapPin,
} from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Round Trip Taxi Goa — Same Day Return Cab | Sandy Taxi",
  description:
    "Book a round trip taxi in Goa for same-day return journeys. Flexible scheduling, fixed fares, AC vehicle. Ideal for day trips, outstation visits and local tours. Sandy Taxi +91 91486 80513.",
  alternates: {
    canonical: "http://sandytaxiservice.com/services/round-trip-taxi",
  },
  openGraph: {
    title: "Round Trip Taxi Goa — Same Day Return Cab | Sandy Taxi",
    description:
      "Round trip cab in Goa. Same day return, flexible timing, fixed fares. Book Sandy Taxi for your return journey.",
    url: "http://sandytaxiservice.com/services/round-trip-taxi",
  },
};

const FEATURES = [
  {
    icon: ArrowLeftRight,
    title: "Same Driver Both Ways",
    desc: "Your driver stays with you throughout the trip — no rebooking, no new cab needed on return.",
    accent: "gold",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Return Time",
    desc: "You control the schedule. Spend as long as you need at your destination before heading back.",
    accent: "cyan",
  },
  {
    icon: Wallet,
    title: "Better Value",
    desc: "Round trips are more economical than booking two separate one-way cabs. Fixed upfront fare.",
    accent: "pink",
  },
  {
    icon: Clock,
    title: "Wait Time Included",
    desc: "Driver waits at your destination during your visit. No extra charge for reasonable wait time.",
    accent: "gold",
  },
];

const ACCENT_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink" },
};

const POPULAR_TRIPS = [
  {
    trip: "Candolim ↔ Dudhsagar Falls",
    desc: "Full day waterfall trip — most popular round trip in Goa",
    duration: "Full day",
    accent: "gold",
  },
  {
    trip: "Candolim ↔ Old Goa & Ponda",
    desc: "Heritage churches and spice plantations in one day",
    duration: "Half–Full day",
    accent: "cyan",
  },
  {
    trip: "Candolim ↔ South Goa Beaches",
    desc: "Palolem, Agonda, Benaulim — pristine South Goa for a day",
    duration: "Full day",
    accent: "pink",
  },
  {
    trip: "Candolim ↔ Panaji & Old Goa",
    desc: "Capital city tour with ferry ghat and heritage walk",
    duration: "Half day",
    accent: "gold",
  },
  {
    trip: "North Goa ↔ Margao",
    desc: "Shopping and local market visit in Goa's commercial hub",
    duration: "Half day",
    accent: "cyan",
  },
  {
    trip: "Goa ↔ Gokarna",
    desc: "Day trip to Karnataka's scenic beach town",
    duration: "Full day",
    accent: "pink",
  },
];

const TRIP_ACCENT = {
  gold: { border: "hover:border-sandy-gold/35", text: "text-sandy-gold", bg: "bg-sandy-gold/10" },
  cyan: { border: "hover:border-goa-cyan/35",   text: "text-goa-cyan",   bg: "bg-goa-cyan/10"  },
  pink: { border: "hover:border-beach-pink/35", text: "text-beach-pink", bg: "bg-beach-pink/10"},
};

export default function RoundTripTaxiPage() {
  return (
    <ServicePageLayout
      badge="Round Trip Taxi Goa"
      title="Round Trip Cab in"
      titleHighlight="Goa"
      description="Same-day return taxi service across Goa and beyond. One driver, both ways, flexible timing — ideal for day trips, outstation visits and sightseeing tours with a return journey."
      icon={<ArrowLeftRight size={28} />}
    >

      {/* ── Popular round trips ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Popular{" "}
              <span className="text-sandy-gold">Round Trip Routes</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              Day trips from Candolim and North Goa — go and return the same day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POPULAR_TRIPS.map(({ trip, desc, duration, accent }) => {
              const styles = TRIP_ACCENT[accent as keyof typeof TRIP_ACCENT];
              return (
                <div
                  key={trip}
                  className={`card-dark p-6 flex flex-col gap-3 ${styles.border} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${styles.bg}`}>
                      <ArrowLeftRight size={16} className={styles.text} />
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${styles.bg} ${styles.text}`}>
                      {duration}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base">{trip}</h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{desc}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-goa-cyan hover:text-white transition-colors flex items-center gap-1 mt-1"
                  >
                    Get a quote →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Why Book a{" "}
              <span className="text-sandy-gold">Round Trip</span>
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
                "Pickup from your hotel or address",
                "Same driver for onward and return",
                "AC Sedan, MUV or SUV",
                "Flexible time spent at destination",
                "Driver wait time included",
                "Fixed round-trip fare upfront",
                "No rebooking on return journey",
                "WhatsApp support throughout",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-goa-cyan mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <MapPin size={16} />
                Book Round Trip
              </a>
            </div>
          </div>
        </div>
      </section>

    </ServicePageLayout>
  );
}