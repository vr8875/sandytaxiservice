import Link from "next/link";
import {
  Plane, Compass, Route, Briefcase,
  Crown, ArrowLeftRight, Car, MapPin,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Plane,
    label: "Airport Transfer",
    desc: "On-time pickup and drop to Dabolim & Mopa airport. Flight tracking included.",
    href: "/services/airport-transfer",
    accent: "gold",
  },
  {
    icon: Compass,
    label: "Goa Sightseeing",
    desc: "Full day & half day tours covering beaches, forts, waterfalls and churches.",
    href: "/services/goa-sightseeing-taxi",
    accent: "cyan",
  },
  {
    icon: Route,
    label: "Outstation Taxi",
    desc: "Comfortable rides to Pune, Mumbai, Bangalore, Mangalore and beyond.",
    href: "/services/outstation-taxi",
    accent: "pink",
  },
  {
    icon: Briefcase,
    label: "Corporate Taxi",
    desc: "Professional cab service for business travel and hotel transfers.",
    href: "/services/corporate-taxi",
    accent: "gold",
  },
  {
    icon: Crown,
    label: "Luxury Cab",
    desc: "Premium vehicles for weddings, honeymoon trips and special occasions.",
    href: "/services/luxury-cab-goa",
    accent: "cyan",
  },
  {
    icon: ArrowLeftRight,
    label: "Round Trip",
    desc: "Same-day return trips with flexible scheduling across Goa.",
    href: "/services/round-trip-taxi",
    accent: "pink",
  },
  {
    icon: Car,
    label: "City Taxi",
    desc: "Local Goa rides anytime — beach to beach, hotel to market, 24x7.",
    href: "/services/city-taxi-goa",
    accent: "gold",
  },
  {
    icon: MapPin,
    label: "Long Distance",
    desc: "Intercity and multi-state rides with comfort stops along the way.",
    href: "/services/long-distance-taxi",
    accent: "cyan",
  },
];

const ACCENT_STYLES = {
  gold: {
    icon: "text-sandy-gold",
    iconBg: "bg-sandy-gold/10",
    border: "hover:border-sandy-gold/40",
    arrow: "group-hover:text-sandy-gold",
  },
  cyan: {
    icon: "text-goa-cyan",
    iconBg: "bg-goa-cyan/10",
    border: "hover:border-goa-cyan/40",
    arrow: "group-hover:text-goa-cyan",
  },
  pink: {
    icon: "text-beach-pink",
    iconBg: "bg-beach-pink/10",
    border: "hover:border-beach-pink/40",
    arrow: "group-hover:text-beach-pink",
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-night-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="badge-cyan mb-4 mx-auto">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Taxi Services in{" "}
            <span className="text-sandy-gold">Goa</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From airport runs to full-day sightseeing — we cover every ride you need across North &amp; South Goa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, label, desc, href, accent }) => {
            const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
            return (
              <Link
                key={href}
                href={href}
                className={`
                  group card-dark p-6
                  flex flex-col gap-4
                  transition-all duration-200
                  ${styles.border}
                `}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.iconBg}`}>
                  <Icon size={22} className={styles.icon} />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white text-base mb-1">
                    {label}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className={`flex items-center gap-1 text-xs text-white/30 font-medium transition-colors ${styles.arrow}`}>
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}