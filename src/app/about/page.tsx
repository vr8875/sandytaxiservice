import type { Metadata } from "next";
import {
  ShieldCheck, Clock, MapPin,
  Star, Users, Car, Phone, MessageCircle,
} from "lucide-react";
import { BUSINESS, WHATSAPP_URL, CALL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Sandy Taxi Service — Candolim, Goa",
  description:
    "Meet Sandy — your trusted local taxi driver in Goa. Based in Candolim, offering reliable 24x7 cab service across North & South Goa. Learn about our story and commitment to safe travel.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/about",
  },
  openGraph: {
    title: "About Sandy Taxi Service — Candolim, Goa",
    description:
      "Meet Sandy — your trusted local taxi driver in Goa. Reliable, affordable, 24x7.",
    url: "https://www.sandytaxiservice.com/about",
  },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every ride is in a well-maintained, clean vehicle. Your safety is our top priority on every route.",
    accent: "cyan",
  },
  {
    icon: Clock,
    title: "Always On Time",
    desc: "We track your flight, monitor traffic and plan ahead — so we're always there before you need us.",
    accent: "gold",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    desc: "Born and raised in Goa, Sandy knows every road, every beach and every shortcut in the state.",
    accent: "pink",
  },
  {
    icon: Users,
    title: "Personal Service",
    desc: "You deal directly with Sandy — not a call centre. Personal, friendly and always reachable on WhatsApp.",
    accent: "gold",
  },
];

const ICON_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink" },
};

const STATS = [
  { icon: Star, value: "5.0★",  label: "Google Rating", accent: "gold" },
  { icon: Clock, value: "24x7", label: "Always Open",   accent: "cyan" },
  { icon: Car,   value: "10+",  label: "Vehicle Types", accent: "pink" },
  { icon: MapPin,value: "All",  label: "Goa Covered",   accent: "gold" },
];

export default function AboutPage() {
  return (
    <main className="bg-night-navy min-h-screen pt-24">

      {/* ── Hero banner ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(245,197,24,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,212,232,0.1) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-gold mb-6 mx-auto">
            <MapPin size={12} />
            Candolim, North Goa
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            About{" "}
            <span className="text-sandy-gold">Sandy Taxi</span>
          </h1>
          <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            A trusted local taxi service from the heart of Candolim, Goa —
            built on reliability, honesty and a genuine love for this beautiful state.
          </p>
        </div>
      </section>

      {/* ── Story section ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <span className="badge-cyan mb-5 inline-flex">
                Our Story
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-6">
                Your Local Guide{" "}
                <span className="text-sandy-gold">Behind the Wheel</span>
              </h2>
              <div className="space-y-4 text-white/55 text-base leading-relaxed">
                <p>
                  Sandy Taxi Service was founded with one simple goal — to give every
                  visitor and resident in Goa a ride they can count on. Based in
                  Ordra, Candolim, we are a locally operated cab service covering
                  every corner of North and South Goa.
                </p>
                <p>
                  Whether you need an early morning airport pickup, a full-day
                  sightseeing tour, or a long-distance outstation ride, we show up
                  on time, every time. Our fares are fixed and transparent — no
                  surge pricing, no hidden charges.
                </p>
                <p>
                  What sets us apart is the personal touch. When you book with Sandy
                  Taxi, you deal directly with Sandy — a local Goan driver who knows
                  the state inside out. No middleman, no call centre. Just a reliable,
                  friendly driver ready to make your Goa experience smooth and memorable.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href={WHATSAPP_URL}
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

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ icon: Icon, value, label, accent }) => {
                const styles = ICON_STYLES[accent as keyof typeof ICON_STYLES];
                return (
                  <div key={label} className="card-dark p-8 flex flex-col items-center text-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.bg}`}>
                      <Icon size={22} className={styles.text} />
                    </div>
                    <span className={`font-display font-extrabold text-3xl ${styles.text}`}>
                      {value}
                    </span>
                    <span className="text-white/40 text-sm uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-gold mb-4 mx-auto">
              What We Stand For
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
              Our <span className="text-sandy-gold">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc, accent }) => {
              const styles = ICON_STYLES[accent as keyof typeof ICON_STYLES];
              return (
                <div key={title} className="card-dark p-7 flex flex-col gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <Icon size={20} className={styles.text} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base">
                    {title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}