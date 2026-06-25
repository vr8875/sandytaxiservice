import Link from "next/link";
import {
  Plane, MapPin, Building2, Car,
  Star, Clock, Phone, ArrowRight,
  ChevronDown,
} from "lucide-react";
import { WHATSAPP_URL, CALL_URL, BUSINESS } from "@/lib/constants";

const SERVICES_PILLS = [
  { icon: Plane,     label: "Airport Transfer" },
  { icon: MapPin,    label: "Sightseeing"      },
  { icon: Car,       label: "Outstation"       },
  { icon: Building2, label: "Corporate"        },
];

const STATS = [
  { value: "24x7",  label: "Available"     },
  { value: "5.0★",  label: "Google Rating" },
  { value: "100%",  label: "Fixed Fares"   },
  { value: "All",   label: "Goa Covered"   },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      {/* ── Subtle grid pattern overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,197,24,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(245,197,24,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="badge-gold">
              <MapPin size={12} />
              Candolim, North Goa
            </span>
            <span className="badge-cyan">
              <Clock size={12} />
              Open 24x7
            </span>
          </div>

          {/* H1 */}
          <h1
            className="
              font-display font-extrabold text-balance
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              text-white leading-[1.05] mb-6
              animate-fade-up
            "
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Taxi in Goa —{" "}
            <span className="text-sandy-gold">
              Anytime,
            </span>
            <br />
            <span className="text-goa-cyan">
              Anywhere.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="
              text-white/60 text-lg sm:text-xl leading-relaxed mb-8
              max-w-xl animate-fade-up
            "
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Reliable, affordable cab service from{" "}
            <span className="text-white/90 font-medium">Candolim</span>.
            Airport transfers, sightseeing tours, outstation trips — covering
            all of{" "}
            <span className="text-white/90 font-medium">North &amp; South Goa</span>.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 justify-center"
            >
              <Phone size={18} />
              Book on WhatsApp
            </a>
            <a 
              href={CALL_URL}
              className="btn-outline text-base px-8 py-4 justify-center"
            >
              <Phone size={18} />
              Call Now — {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Service pills */}
          <div
            className="flex flex-wrap gap-3 mb-14 animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            {SERVICES_PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="
                  flex items-center gap-2
                  bg-white/5 border border-white/10
                  text-white/70 text-sm
                  px-4 py-2 rounded-full
                  backdrop-blur-sm
                "
              >
                <Icon size={14} className="text-sandy-gold" />
                {label}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div
            className="
              grid grid-cols-2 sm:grid-cols-4 gap-px
              bg-white/5 rounded-2xl overflow-hidden
              border border-white/10 backdrop-blur-sm
              animate-fade-up
            "
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="
                  flex flex-col items-center justify-center
                  py-5 px-4
                  bg-night-navy/60
                "
              >
                <span className="font-display font-extrabold text-sandy-gold text-2xl leading-none mb-1">
                  {value}
                </span>
                <span className="text-white/40 text-xs uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Star rating strip ── */}
      <div className="relative z-10 border-t border-white/5 bg-night-navy/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Stars */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-sandy-gold fill-sandy-gold"
                  />
                ))}
              </div>
              <span className="text-white/70 text-sm">
                <span className="text-white font-semibold">5.0 </span> rated on Google
                &nbsp;·&nbsp;
              </span>
            </div>

            {/* See services CTA */}
            <Link
              href="#services"
              className="
                flex items-center gap-2
                text-sm text-goa-cyan
                hover:text-white transition-colors
              "
            >
              Explore our services
              <ArrowRight size={14} />
            </Link>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden lg:block animate-float">
        <ChevronDown size={24} className="text-white/20" />
      </div>

    </section>
  );
}